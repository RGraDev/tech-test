const fs = require('fs');
const algoliasearch = require('algoliasearch');
require('dotenv').config({ path: '../../.env' });

const importFilePath = '../../data/products.json';

const reducePricesByPercentage = (products, targetCategories, percentage) => {
  return products.map((product) => {
    if (product.categories.some((category) => targetCategories.includes(category))) {
      product.price = Math.floor(product.price * (1 - percentage / 100));
    }
    return product;
  });
};

fs.readFile(importFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Could not read file', err.message);
    return;
  }

  const products = JSON.parse(data);

  const transformedProducts = reducePricesByPercentage(
    products,
    ['Cameras & Camcorders'],
    20
  );

  console.log(transformedProducts);

  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  );
  const index = client.initIndex(process.env.ALGOLIA_INDEX);

  index
    .saveObjects(transformedProducts, { autoGenerateObjectIDIfNotExist: true })
    .then(() => {
      console.log('Data indexed to Algolia');
    })
    .catch((apiErr) => {
      console.error('Error indexing data to Algolia', apiErr.message);
    });
});

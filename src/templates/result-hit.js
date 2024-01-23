const resultHit = (hit, { sendEvent, html, components }) => {
  return html`<a class="result-hit">
    <div class="result-hit__image-container">
      <img class="result-hit__image" src="${hit.image}" />
    </div>
    <div class="result-hit__details">
      <h3 class="result-hit__name">
        ${components.Highlight({ attribute: 'name', hit })}
      </h3>
      <p class="result-hit__price">$${hit.price}</p>
    </div>
    <div class="result-hit__controls">
      <button
        id="view-item"
        class="result-hit__view"
        onClick="${() => sendEvent('click', hit, 'Product Viewed')}"
      >
        View
      </button>
      <button
        id="add-to-cart"
        class="result-hit__cart"
        onClick="${() => sendEvent('conversion', hit, 'Product Added To Cart')}"
      >
        Add To Cart
      </button>
    </div>
  </a>`;
};

export default resultHit;

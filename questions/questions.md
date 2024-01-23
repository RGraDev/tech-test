*Question 1*


From: marissa@startup.com
Subject:  Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,
Marissa

--

Hi Marissa,

Thanks for reaching out. I'm sorry to hear that you are not enjoying the new dashboard design.

As an alternative to clearing/deleting indices via the dashboard, it is also possible to do this programmatically
via the API. The link provided below details how you would go about doing this. This may actually be a better option
for you if you are frequently clearing and deleting indices.

https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#delete-indices-in-the-algolia-dashboard

Once you've taken a look at the documentation provided, please do let me know if you require any further assistance.
In the meantime I'll be sure to pass your feedback regarding the new dashboard design onto the relevant team.

Kind regards,

Ryan

--

*Question 2*:

From: carrie@coffee.com
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

--

Hi Carrie,

Thanks for getting in touch - sorry to hear you've been experiencing this problem.

The "record is too big" error is shown when the maximum limit on the record size is being exceeded. If a record's size
exceeds 100KB then this error will be surfaced. Primarily this size limit is in place to ensure Algolia is always highly
performant.

You mention in your email that you are currently storing a lot of metadata against each record, and that this data is
not used for search. I would recommend removing those attributes which are not being used for search purposes from your
index. Records stored in Algolia should only contain the information which is helping you drive a great search
experience for customers on your website.

Hopefully that helps in terms of understanding why you're seeing the error and what can be done to fix it, but please
do let me know if I can be of further assistance or if you require any clarification of the above.

Kind regards,

Ryan

--

*Question 3*:


From: marc@hotmail.com
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

--

Hi Marc,

Sorry to hear you are having issues with your website.

I have taken a look at the error you've provided and I can see this error concerns Searchkit, which is a
library used alongside Elasticsearch. I'd recommend reaching out to the team who develop Searchkit, or to Elasticsearch
directly to get more help on the error. Apologies I'm not able to be of more help here.

Regards,

Ryan


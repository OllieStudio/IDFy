# ID-Fy

**Author**: Ollie Estúdio Digital (**[https://ollies.com.br](https://ollies.com.br)**)

**Description**: Add "id" and "sequencial" fields to Firestore documents.



**Details**: Use this extension to add Firestore auto-generated ID as "id" field in object, plus add a "sequencial" ID field to created Firestore documents.


#### Additional setup

Before installing this extension, make sure that you've [set up a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart) in your Firebase project.


Detailed information for these post-installation tasks are provided after you install this extension.


#### Billing
 
To install an extension, your project must be on the [Blaze (pay as you go) plan](https://firebase.google.com/pricing)
 
- You will be charged a small amount (typically around $0.01/month) for the Firebase resources required by this extension (even if it is not used).
- This extension uses other Firebase and Google Cloud Platform services, which have associated charges if you exceed the service’s no-cost tier:
 - Cloud Firestore
 - Cloud Functions (Node.js 10+ runtime. [See FAQs](https://firebase.google.com/support/faq#extensions-pricing))



**Configuration Parameters:**

* Cloud Functions location: Where do you want to deploy the functions created for this extension? You usually want a location close to your database. For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).

* Document path.


**Cloud Functions:**

* **onCreate:** Listens for changes on counter shards that may need aggregating. This function is limited to max 1 instance.



**Access Required**:



This extension will operate with the following project IAM roles:

* datastore.user (Reason: Allows the extension to update documents.)

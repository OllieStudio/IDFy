const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.idfy = functions.firestore
    .document(process.env.YOUR_DOCUMENT_PATH)
    .onCreate(async (snap, context) => {
      const object = snap.data();
      const ref = snap.ref;
      const parent = snap.ref.parent;

      let count = await parent.get();
      ref.update({id:context.params.objectID, sequencial:count.docs.length});
    })

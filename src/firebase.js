import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ref } from 'vue'

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const contactsCollection = db.collection('contacts');

// const storage = firebaseApp.storage();
// const storageRef = firebaseApp.storage().ref();
// const imagesRef = storageRef.child('images');



export const createContact = contact => {
  return contactsCollection.add(contact);
}

export const getContact = async id => {
  const contact = await contactsCollection.doc(id).get();
  return contact.exists ? contact.data() : null 
}

export const updateContact = (id, contact) => {
  return contactsCollection.doc(id).update(contact);
}

export const deleteContact = id => {
  return contactsCollection.doc(id).delete();
}

export const useLoadContacts = () => {
  const contacts = ref([]);
  contactsCollection.onSnapshot(snapshot => {
    contacts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  return contacts
}

// export const uploadImage = file => {
//   // Create the file metadata
//   let metadata = {
//     contentType: 'image/jpeg'
//   };

//   // Upload file and metadata to the object 'images/mountains.jpg'
//   let uploadTask = storage.child('images/' + file.name).put(file, metadata);

//   // Listen for state changes, errors, and completion of the upload.
//   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//     (snapshot) => {
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case firebase.storage.TaskState.PAUSED: // or 'paused'
//           console.log('Upload is paused');
//           break;
//         case firebase.storage.TaskState.RUNNING: // or 'running'
//           console.log('Upload is running');
//           break;
//       }
//     },
//     (error) => {
//       // A full list of error codes is available at
//       // https://firebase.google.com/docs/storage/web/handle-errors
//       switch (error.code) {
//         case 'storage/unauthorized':
//           // User doesn't have permission to access the object
//           break;
//         case 'storage/canceled':
//           // User canceled the upload
//           break;

//         // ...

//         case 'storage/unknown':
//           // Unknown error occurred, inspect error.serverResponse
//           break;
//       }
//     },
//     () => {
//       // Upload completed successfully, now we can get the download URL
//       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//         console.log('File available at', downloadURL);
//       });
//     }
//   );
// }
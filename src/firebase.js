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
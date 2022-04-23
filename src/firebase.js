import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ref } from 'vue'

const config = {
  apiKey: "AIzaSyBZIwKXXpZzX4ebsbpna8LJT-3cabvk9eY",
  authDomain: "alfasoft-test-36468.firebaseapp.com",
  projectId: "alfasoft-test-36468",
  storageBucket: "alfasoft-test-36468.appspot.com",
  messagingSenderId: "827853511109",
  appId: "1:827853511109:web:424911c9281dac066f93ac"
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
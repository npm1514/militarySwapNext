import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
export const addToFirebase = async (listing, collectionName) => {
	return await addDoc(collection(db, collectionName), listing);
};

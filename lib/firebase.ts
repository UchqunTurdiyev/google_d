// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLICK_FIREBASE_API_KEY,
	authDomain: 'd-6ee39.firebaseapp.com',
	projectId: 'd-6ee39',
	storageBucket: 'd-6ee39.appspot.com',
	messagingSenderId: '1031939705184',
	appId: '1:1031939705184:web:b1613cf8bba15d63cab605',
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
export { db };

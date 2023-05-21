import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore , collection , setDoc , getDocs , doc , deleteDoc } from "firebase/firestore";
import products from "../json/products.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imagesCollection = collection(db, "movies"); 

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(imagesCollection);
  querySnapshot.forEach(async (products) => {
    await deleteDoc(doc(db, "movies", products.id));
  });
  // ADD NEW DOCS
  products.forEach(async (products) => {
    const docRef = await doc(imagesCollection);
    await setDoc(docRef, { ...products, id: docRef.id });
  });
};
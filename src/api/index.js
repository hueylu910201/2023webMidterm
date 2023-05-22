import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore , collection , setDoc , getDocs , doc , deleteDoc ,getDoc ,query, where } from "firebase/firestore";
import { 
  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  initializeAuth,
  signOut,
  updateProfile,
} from 'firebase/auth';
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

// REFERENCE AUTH
const auth = app_length ? getAuth(app) : initializeAuth(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "movies"); 

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (products) => {
    await deleteDoc(doc(db, "movies", products.id));
  });
  // ADD NEW DOCS
  products.forEach(async (products) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...products, id: docRef.id });
  });
};

export const getProductById = async ({ queryKey }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "movies", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getProducts = async ({ queryKey }) => {
  const [category] = queryKey;
  let querySnapshot;
  if (category == "/") querySnapshot = await getDocs(productsCollection);
  else {
    const q = await query(
      productsCollection,
      where("category", "==", category.toUpperCase())
    );
    querySnapshot = await getDocs(q);
  }
  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (products) => {
    await result.push(products.data());
  });
  console.log({ result });
  return result;
};

export const login = async ({ email, password }) => {
  signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const register = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  const docRef = doc(db, "users", user.uid);
  setDoc(docRef, {
    name,
  });
};

export const logout = async () => {
  auth.signOut();
}
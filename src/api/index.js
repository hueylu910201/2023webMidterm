import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore , collection , setDoc , getDocs , doc , deleteDoc , updateDoc , getDoc ,query, where ,addDoc} from "firebase/firestore";
import { 
  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  initializeAuth,
} from 'firebase/auth';
import _ from "lodash";
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
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};

export const register = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  localStorage.setItem("user", JSON.stringify(user));
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    name,
  });
};


export const getUserInfo = async () => {
  const storedUser = localStorage.getItem("user");
  const user = auth?.currentUser || JSON.parse(storedUser) || null;

  if(user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };    
  } else {
    return {}
  }
}

export const updateUserInfo = async ({ name, adrs, tel, uid }) => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    name: name,
    adrs,
    tel,
  });
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
}


export const logout = async () => {
  await auth.signOut();
  localStorage.removeItem("user");
}

export const toggleFavoriteProduct = async ({productId, uid}) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const userDoc = docSnap.data();
  const favorites = userDoc?.favorites || [];
  if(favorites.length === _.pull(favorites,productId).length){
    favorites.push(productId);  
  }
  await updateDoc(docRef, { favorites }); 
  return favorites;
}

export const addComment = async ({queryKey ,userData }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "movies", id);
  const commentsCollectionRef = collection(docRef, "comments");
  await addDoc(commentsCollectionRef, userData);
  return { success: true };
};

export const getComments = async ({ queryKey }) => {
  const productId = queryKey[0];
  const docRef = await doc(db, "movies", productId);
  const commentsCollectionRef = collection(docRef, "comments");
  const querySnapshot = await getDocs(commentsCollectionRef);
  let comments = [];
  querySnapshot.forEach((doc) => {
    comments.push(doc.data());
  });
  return comments;
};

// export const addCommentToProduct = async ({ productId, userId, comment }) => {
//   const docRef = await doc(db, "movies", productId);
//   const movieSnap = await getDoc(docRef);
//   const movieData = movieSnap.data();

//   // Create a new comment object
//   const newComment = {
//     userId,
//     comment,
//     timestamp: new Date().toISOString(),
//   };

//   // Add the new comment to the comments subcollection
//   const commentsCollectionRef = collection(movieRef, "comments");
//   await addDoc(commentsCollectionRef, newComment);
// };

// export const fetchComments = async (productId) => {
//   const response = await fetch(`/api/products/${productId}/comments`);
//   const text = await response.text();
//   try {
//     const data = JSON.parse(text);
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const addComment = async (productId, userId, comment) => {
//   const timestamp = new Date().toISOString();
//   const response = await fetch(`/api/products/${productId}/comments`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ userId, comment, timestamp }),
//   });
//   const data = await response.json();
//   return data;

//   // const firestore = firestore();
//   // const batch = firestore.batch();
//   // const productRef = firestore.collection('movies').doc(productId)
//   // const commentRef = productRef.collection('comments').doc();
//   // batch.set(commentRef,{
//   //     content: comment,
//   //     createAt:firestore.Timetamp.now(),
//   //     author: Firebase.auth().userId
//   // });
//   // batch.commit();
// };
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore , collection , setDoc , getDocs , doc , deleteDoc , updateDoc , getDoc ,query, where } from "firebase/firestore";
import { 
  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  initializeAuth,
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

// export const login = async ({ email, password }) => {
//   signInWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   try {
//     // 执行登录验证操作，例如调用身份验证库的signInWithEmailAndPassword方法
//     await signInWithEmailAndPassword(email, password);

//     // 登录成功，可以进行其他处理，如保存令牌等
//     console.log("Login success");
//   } catch (error) {
//     // 处理登录错误，可以抛出错误或返回相应的错误信息
//     throw new Error("Login failed" + error.message);
//   }
// };

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
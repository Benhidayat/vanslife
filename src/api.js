// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    where,
    query
 } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBABVEHa0JdCltvN2QCwezMvh_XUB6KLd4",
  authDomain: "vanslife-199ac.firebaseapp.com",
  projectId: "vanslife-199ac",
  storageBucket: "vanslife-199ac.firebasestorage.app",
  messagingSenderId: "725063296120",
  appId: "1:725063296120:web:47d9fa3aaab96f0c96b98d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vanCollectionRef = collection(db, 'vans');

export const getData = async () => {
    const querySnapshot = await getDocs(vanCollectionRef);
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr;
}

export const getVan = async (id) => {
    const docRef = doc(db, 'vans', id)
    const vanSnapshot = await getDoc(docRef);

    const vanData = {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }

    return vanData
}

export const getHostVans = async () => {
    const q = query(vanCollectionRef, where("hostId", "==", "123"));
    const vansSnapshot = await getDocs(q);
    const dataArr = vansSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr;
}

export const loginUser = async (creds) => {
    
    const res = await fetch("/api/login",
        {method: "post", body: JSON.stringify(creds)}
    );

    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: data.statusText,
            status: data.status
        }
    }

    return data;

};
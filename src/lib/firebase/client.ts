import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: "123456789",
  appId: "1:123456789:web:123456789",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

if (process.env.NEXT_PUBLIC_USE_EMULATOR === "true") {
  // Prevent connecting multiple times to emulator in dev mode
  if (!globalThis.__FIREBASE_EMULATORS_CONNECTED__) {
    const authHost = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST || "127.0.0.1:9099";
    const firestoreHost = process.env.NEXT_PUBLIC_FIRESTORE_EMULATOR_HOST || "127.0.0.1:8080";
    
    connectAuthEmulator(auth, `http://${authHost}`);
    connectFirestoreEmulator(db, firestoreHost.split(":")[0], parseInt(firestoreHost.split(":")[1], 10));
    
    globalThis.__FIREBASE_EMULATORS_CONNECTED__ = true;
  }
}

export { app, auth, db };

import * as admin from "firebase-admin";

const initializeAdmin = () => {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  // When using emulator, setting FIREBASE_AUTH_EMULATOR_HOST and FIRESTORE_EMULATOR_HOST 
  // environment variables automatically configures the Admin SDK.
  // We just need to initialize with the project ID.
  return admin.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
};

export const adminApp = initializeAdmin();
export const adminAuth = adminApp.auth();
export const adminDb = adminApp.firestore();

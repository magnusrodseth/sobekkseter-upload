import { initializeApp } from 'firebase/app'
import { FirebaseApp, getApp, FirebaseOptions } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { config } from 'dotenv'
import { getAuth } from 'firebase/auth'
config()

/**
 * Gets the Firebase application.
 *
 * First, it attempts to get the default application. If that does not work, a new application is initialized.
 * @param config is the Firebase configuration.
 * @returns a Firebase application.
 */
const firebaseApp = (config: FirebaseOptions): FirebaseApp => {
  try {
    return getApp()
  } catch (error) {
    return initializeApp(config)
  }
}

// Initialize Firebase
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
}

// Initialize Firebase
const app = firebaseApp(firebaseConfig)

const storage = getStorage(app)

const auth = getAuth(app)

export { app, storage, auth }

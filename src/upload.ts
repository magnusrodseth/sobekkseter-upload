import { ref, uploadBytes } from 'firebase/storage'
import { signInAnonymously } from "firebase/auth";
import { storage, auth } from './lib/firebase'
import { readFileSync } from 'fs'

// Read file from local file system
const file = readFileSync('/app/webcamera.jpg')
const destination = 'webcamera.jpg'

signInAnonymously(auth).then(async () => {
  // Upload file to Firebase Storage
  await uploadBytes(ref(storage, destination), file)
    .then(() => {
      console.log(`✅ Uploaded '${destination}' to Firebase Storage!`)
    })
    .catch(() => {
      console.log(`❌ Failed to upload '${destination}' to Firebase Storage!`)
    })
}).catch((error) => {
  console.log(`❌ Failed to sign in anonymously: ${error}`)
})


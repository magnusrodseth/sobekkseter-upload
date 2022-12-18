import { ref, uploadBytes } from 'firebase/storage'
import { storage } from './lib/firebase'
import { readFileSync } from 'fs'

// Read file from local file system
const file = readFileSync('./test.png')

// Upload file to Firebase Storage
uploadBytes(ref(storage, 'test.png'), file).then((snapshot) => {
  console.log('Uploaded a blob or file!')
  console.log(snapshot)
})

import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyDhBaUIwTpQk6bKG6btd8pZrqiYouGSiI0",
  authDomain: "my-app-14021965.firebaseapp.com",
  projectId: "my-app-14021965",
  storageBucket: "my-app-14021965.appspot.com",
  messagingSenderId: "931412923676",
  appId: "1:931412923676:web:224e924fb64a618c3496d9"
})

export const auth = app.auth()
export default app

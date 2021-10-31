const firebaseConfig = {
    // apiKey: "AIzaSyB5J2Txkwe3b8GFNOcpijavYPYeKbAo2LI",
    // authDomain: "assignment-11-b1d81.firebaseapp.com",
    // projectId: "assignment-11-b1d81",
    // storageBucket: "assignment-11-b1d81.appspot.com",
    // messagingSenderId: "849429330004",
    // appId: "1:849429330004:web:70003e63d0f0b06e8655c1"
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_API_ID
}
export default firebaseConfig;
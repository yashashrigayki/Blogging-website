let firebaseConfig = {
    apiKey: "AIzaSyAoDAmOEz2xSQB6MN0cDhYxfJkUnmMDbxc",
    authDomain: "blogging-website-cde03.firebaseapp.com",
    projectId: "blogging-website-cde03",
    storageBucket: "blogging-website-cde03.appspot.com",
    messagingSenderId: "359827157946",
    appId: "1:359827157946:web:9760744ee1cedbedb6a383"
};


const app = initializeApp(firebaseConfig);

let db = firebase.firestore();
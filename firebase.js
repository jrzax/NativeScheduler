import * as firebase from 'firebase';

import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmVEy2x6l-0XaFrxZl8K2UAmKjqK7dRd0",
    authDomain: "nativescheduler-f40f8.firebaseapp.com",
    databaseURL: "https://nativescheduler-f40f8.firebaseio.com",
    projectId: "nativescheduler-f40f8",
    storageBucket: "nativescheduler-f40f8.appspot.com",
    messagingSenderId: "263950123882",
    appId: "1:263950123882:web:118e21b86baf1042d99b13"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
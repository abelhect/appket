import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCqdK4r21WBst8tp2E4xKi6unWinHSOiL8",
    authDomain: "appket-fb95e.firebaseapp.com",
    databaseURL: "https://appket-fb95e.firebaseio.com",
    projectId: "appket-fb95e",
    storageBucket: "appket-fb95e.appspot.com",
    messagingSenderId: "503412754232"
  };

  export const firebaseApp = firebase.initializeApp(config);

import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBarCU8WYZuW29Lfop60wqoU0rG30SJmIA",
    authDomain: "isa-sandbox-8905.firebaseapp.com",
    databaseURL: "https://isa-sandbox-8905.firebaseio.com",
    projectId: "isa-sandbox-8905",
    storageBucket: "isa-sandbox-8905.appspot.com",
    messagingSenderId: "102268586323"
};
firebase.initializeApp(config)
export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

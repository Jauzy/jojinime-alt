import firebase from 'gatsby-plugin-firebase'

// var firebaseConfig = {
//     apiKey: "AIzaSyA7VDCuahsJ056GsoJHUqB74hw9xU2Znh0",
//     authDomain: "jojinime.firebaseapp.com",
//     databaseURL: "https://jojinime.firebaseio.com",
//     projectId: "jojinime",
//     storageBucket: "jojinime.appspot.com",
//     messagingSenderId: "187285926728",
//     appId: "1:187285926728:web:db85735a4e666edbb7797d"
// };


// const fire = firebase.initializeApp(firebaseConfig)

export let firebaseAuth

if (typeof window !== "undefined") { 
    firebaseAuth = firebase.auth()
}

export const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccess: () => false
    }
};

// export default fire
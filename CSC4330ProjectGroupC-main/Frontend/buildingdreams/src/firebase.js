// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyDPooWPpMfXPgKWWEfWv0RMUTTjQyoGP3o",
	authDomain: "pcpicker-9d3e9.firebaseapp.com",
	projectId: "pcpicker-9d3e9",
	storageBucket: "pcpicker-9d3e9.appspot.com",
	messagingSenderId: "194246671439",
	appId: "1:194246671439:web:7abf5c4d010cb88fb97e3a",
	measurementId: "G-7QNJKWWFJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
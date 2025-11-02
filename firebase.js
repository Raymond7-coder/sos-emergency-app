import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// TODO: replace with your config from Firebase Console → Project settings → Your apps (Web)
export const appConfig = {
  apiKey: "AIzaSyDlllAQrnUTlmYWzdXDgCRUoWHD_l1QU-E",
  authDomain: "sos-admin-3d4ca.firebaseapp.com",
  projectId: "sos-admin-3d4ca",
  storageBucket: "sos-admin-3d4ca.firebasestorage.app",
  messagingSenderId: "817362566965",
  appId: "1:817362566965:web:029ddada4e36b46103d67c",
};

const app  = initializeApp(appConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
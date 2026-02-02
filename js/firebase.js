// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase config copied from console
const firebaseConfig = {
  apiKey: "AIzaSyC-AXEmQjf8e8ly2UeDcJyZ3uxOTwinqi0",
  authDomain: "campus-mitra-b5ce2.firebaseapp.com",
  projectId: "campus-mitra-b5ce2",
  storageBucket: "campus-mitra-b5ce2.firebasestorage.app",
  messagingSenderId: "884366224201",
  appId: "1:884366224201:web:56c93dffb9644c84a50898",
  measurementId: "G-3ZFVV0XLYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth + Firestore exports
export const auth = getAuth(app);
export const db = getFirestore(app);
<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.auth = auth; // IMPORTANT
</script>


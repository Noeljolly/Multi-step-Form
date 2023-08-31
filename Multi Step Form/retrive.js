import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnwPG-PaMI1mPqEAAH-txckaMciMvKFoY",
  authDomain: "multi-form-4b3ee.firebaseapp.com",
  projectId: "multi-form-4b3ee",
  storageBucket: "multi-form-4b3ee.appspot.com",
  messagingSenderId: "249046412192",
  appId: "1:249046412192:web:9b70badac688eb12d0d2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const tableBody = document.getElementById('table-body');

// Function to fetch data from Firestore and populate the table
async function populateTable() {
  const usersCollection = collection(db, 'users');
  const querySnapshot = await getDocs(usersCollection);

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    const row = tableBody.insertRow();
    row.insertCell().textContent = userData.name;
    row.insertCell().textContent = userData.email;
    row.insertCell().textContent = userData.phone;
    row.insertCell().textContent = userData.Plan.planName;
    row.insertCell().textContent = userData.AddOn.map(addon => addon.name).join(', ');
  });
}

// Call the populateTable function to fetch and display data
populateTable();
// // DATABASE 

const nameInput = form.querySelector('input[name="userName"]');
const emailInput = form.querySelector('input[name="email"]');
const phoneInput = form.querySelector('input[name="phone"]');


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

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

const dbSubmit = document.querySelector('.db_submit_button');
dbSubmit.addEventListener('click', async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      Plan: selectedPlan,
      AddOn: selectedAddons,

    });

    console.log("Document written with ID: ", docRef.id);
    step4.style.display = "none";
    step5.style.display = "block";
    setContainerHeight();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});



function setContainerHeight() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 500) {
    const stepsContainer = document.querySelector('.steps__container');
    
    // Adjust the height as needed
    stepsContainer.style.height = '412px'; // Change this to your desired height
  }
}    

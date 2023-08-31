
const sidebarStep = document.querySelectorAll('.indecater__num');
// Get the Step elements
var step1 = document.getElementById("form");
var step2 = document.getElementById("step-2");
var step3 = document.getElementById("step-3");
var step4 = document.getElementById("step-4");
var step5 = document.getElementById("step-5");

step2.style.display = "none";
step3.style.display = "none";
step4.style.display = "none";
step5.style.display = "none";

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var prevButton = document.getElementById("prev-button2");
var prevButton2 = document.getElementById("prev-button3");
var prevButton3 = document.getElementById('prev-button4')

var selectedAddons = [];
let selectedPlan = {};
// Step 1
var flg=0;
var flg1=0;
var warnings = document.getElementsByClassName("warning");
    function validateForm() {
        var inputs = document.getElementsByClassName("input");
    
        
         
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                warnings[i].classList.add("visible");
                flg=1;
            } else {
                warnings[i].classList.remove("visible");
                flg=0;
            }
        }

          // Validate Email
            var emailInput = document.forms["form"]["email"];
            
            if(emailInput.value ===""){
                warnings[1].textContent = "This field is required"; 
                warnings[1].classList.add("visible");
                flg=1;
            } 
            else if (!isValidEmail(emailInput.value)) {
                warnings[1].textContent = "Invalid Email Format";
                warnings[1].classList.add("visible");
                flg=1;
            }
            else {
                warnings[1].classList.remove("visible");
                flg=0;
            }
         // Validate Phone Number 
            var phoneInput = document.forms["form"]["phone"];

            if (phoneInput.value === "") {
                warnings[2].textContent = "This field is required";
                warnings[2].classList.add("visible");
                flg1=1;
            } else if (!isValidPhoneNumber(phoneInput.value)) {
                warnings[2].textContent = "Invalid Phone Number";
                warnings[2].classList.add("visible");
                flg1=1;
            } else {
                warnings[2].classList.remove("visible");
                flg1=0;
            }

        if(flg === 0 && flg1===0)
        {
            step1.style.display = "none";
            btn1.style.display = "none";
            step2.style.display = "block";
            btn2.style.display = "block";
            prevButton.style.visibility = "visible";
            sidebarStep[0].classList.remove('active');
            sidebarStep[1].classList.add('active');
            setContainerHeight2();
            if (selectedPlan.planDur === "mo") {
              setContainerHeight2();
            } else if (selectedPlan.planDur === "yr") {
                  setContainerHeight3()
            }
        }
        
    }   

    // Prevent entering numbers in name
    function restrictToAlphabets(input) {
        var regex = /[^a-zA-Z\s]/g;
        input.value = input.value.replace(regex, '');
      }
    // prevent entering alphabets in Phone number
    function restrictToNumbers(input) {
        var regex = /[^0-9]/g;
        input.value = input.value.replace(regex, '');
     }  

    // Validate Email id 
     function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Validate Phone Number
    function isValidPhoneNumber(phone) {
        var phonePattern = /^[0-9]{10}$/; 
        return phonePattern.test(phone);
    }


//Step 2

const planCards = document.querySelectorAll('.plan_card');
const toggle = document.getElementById('toggle1');
const yearlyBenefit = document.querySelectorAll('.yearly__benefit');
const month = document.getElementById('monthly');
const year = document.getElementById('yearly');
const addsonCards = document.querySelectorAll('.addon__card');
// plan prices
const monthlyPlanPrices = [9, 12, 15];
const yearlyPlanPrices = [90, 120, 150];
const monthlyAdsOnPrice = [1, 2, 2];
const yearlyAdsOnPrice = [10, 20, 20];

// function to change price and duration of the given card
const setplan = (card, price, duration) => {
  card.forEach((card, i) => {
    card.querySelector('.subscription__price').textContent = `${price[i]}`;
    card.querySelector('.subscription__duration').textContent = `${duration}`;
    
  });
};

var flg2=0;
var flg3=0;
// set default price and duration of the cards
setplan(planCards, monthlyPlanPrices, 'mo');
setplan(addsonCards, monthlyAdsOnPrice, 'mo');


// toggle button for changing plan duration yearly or monthly
toggle.addEventListener('click', (e) => {
    planCards.forEach((card) => {
        card.classList.remove('selected') 
        flg2 = 2 });

    selectedPlan = {};
    selectedAddons = [];
  toggle.classList.toggle('active');
  uncheckAllCheckboxes();
  if (toggle.classList.contains('active')) {
    setContainerHeight3();
    yearlyBenefit.forEach((item) => item.classList.add('show'));
    setplan(planCards, yearlyPlanPrices, 'yr');
    setplan(addsonCards, yearlyAdsOnPrice, 'yr');
    year.classList.add('selected__plan');
    month.classList.remove('selected__plan');
  } else { 
    setContainerHeight2();
    setplan(planCards, monthlyPlanPrices, 'mo');
    setplan(addsonCards, monthlyAdsOnPrice, 'mo');
    yearlyBenefit.forEach((item) => item.classList.remove('show'));
    month.classList.add('selected__plan');
    year.classList.remove('selected__plan');
  }
});


// Select plan card
planCards.forEach((card) => {
    card.addEventListener('click', (e) => {
       
      let target = e.currentTarget;
      // remove selected class of all cards
      planCards.forEach((card) => card.classList.remove('selected'));
      flg2=1
      // add selected class to the current card
      target.classList.add('selected');
        
      // store selected plan name, price and duration
      let planName = target.querySelector('.card__name').textContent;
      let planPrice = target.querySelector('.subscription__price').textContent;
      let planDur = target.querySelector('.subscription__duration').textContent;
      // add selected plan details to the selectedPlan object
      return (selectedPlan = { planName, planPrice, planDur });
    });
  });

    function Validate(){
        
        if (flg2 === 1) {
            warnings[3].classList.add("hidden");
            step2.style.display = "none";
            step3.style.display = "block";
            btn3.style.display = "block";
            prevButton2.style.visibility = "visible";
            sidebarStep[1].classList.remove('active');
            sidebarStep[2].classList.add('active');
            setContainerHeight4();
        }
        else{
            warnings[3].classList.add("visible");
        }
    }  

    function goback(){
        step1.style.display = "block";
        btn1.style.display = "block";
        step2.style.display = "none";
        sidebarStep[1].classList.remove('active');
        sidebarStep[0].classList.add('active');
        setContainerHeight();
    }


//Step 3 

// rough


var addonCards = document.querySelectorAll(".addon__card");

addonCards.forEach(function(card) {
    var checkbox = card.querySelector(".checkbox");

    card.addEventListener("click", function() {
        checkbox.checked = !checkbox.checked; // Toggle the checkbox state

        var cardName = card.querySelector(".card__name").textContent;
        var cardDescription = card.querySelector(".card__description").textContent;
        var cardPrice = card.querySelector(".subscription__price").textContent;
        var cardDuration = card.querySelector(".subscription__duration").textContent;

        if (checkbox.checked) {
            // Add the selected addon details to the array
            selectedAddons.push({
                name: cardName,
                description: cardDescription,
                price: cardPrice,
                duration: cardDuration               
            });
            card.classList.add("selected_addon");
        } else {
            // Remove the unselected addon details from the array
            selectedAddons = selectedAddons.filter(function(addon) {
                return addon.name !== cardName;
            });
            card.classList.remove("selected_addon");
        }

        // You can now use the selectedAddons array anywhere in your code
        console.log(selectedAddons);
    });
});



function uncheckAllCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox');
    
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    addonCards.forEach((card) => {
        card.classList.remove("selected_addon");
    });
  }
  
// rough
  

 function next2(){
            step3.style.display = "none";
            step4.style.display = "block";
            btn3.style.display = "block";
            prevButton3.style.visibility = "visible";
            sidebarStep[2].classList.remove('active');
            sidebarStep[3].classList.add('active');
            getTotal();
            console.log(selectedAddons);
            setContainerHeight5();
 }


 function goback2(){
    step2.style.display = "block";
    step3.style.display = "none";
    sidebarStep[2].classList.remove('active');
    sidebarStep[1].classList.add('active');
    
    if (selectedPlan.planDur === "mo") {
        setContainerHeight2();
  } else if (selectedPlan.planDur === "yr") {
        setContainerHeight3()
  }
}


// step 4

function goback3(){
    step3.style.display = "block";
    step4.style.display = "none";
    sidebarStep[3].classList.remove('active');
    sidebarStep[2].classList.add('active');
    deleteService();
}


function getTotal(){

    let TotalAmount = 0;
    var totalAmountSpan = document.querySelector(".total_amount");
    var planTextElement = document.getElementById("plan-text");
    var duration = document.querySelector(".mn_yr");

if (selectedPlan.planDur === "mo") {
    planTextElement.textContent = selectedPlan.planName + " (Monthly)";
} else if (selectedPlan.planDur === "yr") {
    planTextElement.textContent = selectedPlan.planName + " (Yearly)";
}

var amtElement = document.querySelector(".amt");
var durElement = document.querySelector(".dur");


amtElement.textContent = "$" + selectedPlan.planPrice;
durElement.textContent = selectedPlan.planDur;

TotalAmount+=parseInt(selectedPlan.planPrice);

  // Get the reference to the <div> element
  var container = document.querySelector(".service_container");
  
  // Loop through the selectedAddons array
  selectedAddons.forEach(function(addon) {
      // Create the necessary elements
    var serviceDiv = document.createElement("div");
    serviceDiv.className = "service";
    // Create the <span> elements
    var addOnSpan = document.createElement("span");
    addOnSpan.className = "add_on";
    addOnSpan.textContent = addon.name;
  
    var addOnPeriodSpan = document.createElement("span");
    addOnPeriodSpan.className = "add_on_period";
    addOnPeriodSpan.textContent = "+$" + addon.price + "/" + addon.duration;
  
    // Append the created <span> elements to the <div> element
    serviceDiv.appendChild(addOnSpan);
    serviceDiv.appendChild(addOnPeriodSpan);
    container.appendChild(serviceDiv);

    TotalAmount+=parseInt(addon.price);
  });
  
  totalAmountSpan.textContent = "+$" + TotalAmount + "/" + selectedPlan.planDur;

  if (selectedPlan.planDur === "mo") {
    duration.textContent = "(per month)";
} else if (selectedPlan.planDur === "yr") {
    duration.textContent = " (per year)";
}
  

}

function deleteService() {
    var container = document.querySelector(".service_container");
    
    // Remove all child elements from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function jump(){

    step2.style.display = "block";
    step4.style.display = "none";
    deleteService();
    
    if (selectedPlan.planDur === "mo") {
      setContainerHeight2();
    } else if (selectedPlan.planDur === "yr") {
          setContainerHeight3()
    }
}


// Varying Height

function setContainerHeight() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 500) {
      const stepsContainer = document.querySelector('.steps__container');
      
      // Adjust the height as needed
      stepsContainer.style.height = '409px'; // Change this to your desired height
    }
  }
  setContainerHeight();

function setContainerHeight2() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 500) {
      const stepsContainer = document.querySelector('.steps__container');
      
      // Adjust the height as needed
      stepsContainer.style.height = '479px'; // Change this to your desired height
    }
    console.log('2');
  }

function setContainerHeight3() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 500) {
      const stepsContainer = document.querySelector('.steps__container');
      
      // Adjust the height as needed
      stepsContainer.style.height = '533px'; // Change this to your desired height
    }
    console.log('3');
  }  

  function setContainerHeight4() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 500) {
      const stepsContainer = document.querySelector('.steps__container');
      
      // Adjust the height as needed
      stepsContainer.style.height = '395px'; // Change this to your desired height
    }
    console.log('4');
  }    

  function setContainerHeight5() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 500) {
      const stepsContainer = document.querySelector('.steps__container');
      
      // Adjust the height as needed
      stepsContainer.style.height = '384px'; // Change this to your desired height
    }
    console.log('5');
  }    
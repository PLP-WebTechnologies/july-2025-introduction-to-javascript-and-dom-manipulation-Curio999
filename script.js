
// Part 1: Variable Declarations and Conditionals

let userName = "Calvin";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult yet.");
}


// Part 2: Custom Functions


// Function 1: Random background color changer
function changeBackgroundColor() {
  const colors = ["#ff9999", "#99ccff", "#99ff99", "#ffff99", "#d9b3ff"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

// Function 2: Greeting updater
function updateGreeting(newName) {
  document.getElementById("greeting").innerText = "Welcome, " + newName + "!";
}


// Part 3: Loops


// Example 1: For loop
function generateNumberList() {
  let listContainer = document.getElementById("numberList");
  listContainer.innerHTML = ""; // Clear previous list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Number " + i;
    listContainer.appendChild(li);
  }
}

// Example 2: While loop
function countDown(n) {
  while (n > 0) {
    console.log("Countdown: " + n);
    n--;
  }
}


// Part 4: DOM Interactions


// Interaction 1: Change greeting text on page load
updateGreeting(userName);

// Interaction 2: Button click to change background color
document.getElementById("colorBtn").addEventListener("click", changeBackgroundColor);

// Interaction 3: Button click to generate number list
document.getElementById("listBtn").addEventListener("click", generateNumberList);

// Run countdown in console as a demo
countDown(5);

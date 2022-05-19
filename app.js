console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Forrest";
console.log("FirstName:", firstName);
let lastName = "Rabideau";
console.log("LastName:", lastName);
var age = 37;
console.log("Age:", age);
// Exercise 2
let fullName = firstName+" "+lastName;
console.log(fullName);
// Exercise 3
let city = "Hillsboro";
let pastime = "spending time with the family";
let myStory; 
myStory = `Hello! My name is ${fullName} and I am around ${age} years old. I currently live in ${city}, Oregon with wife and stepson. When not at work I enjoy ${pastime}.`;
console.log(myStory);  
          
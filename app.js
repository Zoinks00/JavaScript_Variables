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
 //above script is from class handout
 //below script from README file
 let language = "JavaScript";
 let createYear = 1995;
 let isCaseSensitive = true;
 console.log(`${language} was created in ${createYear} and is casesenitive ${isCaseSensitive}.`); 
 //Exercise 4
 let price = 19.99;
 let isOnSale = false;
 let salePercentage = 15;
 let stock = 0;
 let inStock = false;
 let selectedSize = "M";
 console.log(`Shirt size ${selectedSize} cost ${price} with ${stock} in stock. ${salePercentage}'%' sale price applied: ${isOnSale}.`);

 //Exercise 5
 let title = "Name of the Wind";
 let author = "Patrick Rothfuss";
 let pageCount = 722;
 let bookmark = 456;
 let hasRead = true;
 console.log(`Book title: ${title} by author ${author} has ${pageCount} pages.`);
 console.log (`Timmy has read: ${hasRead} up to ${bookmark} pages of ${title}.`);
 
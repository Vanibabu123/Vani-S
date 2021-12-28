// Prototype Property

// Definition of Prototype Property 
// 1. Add the property using prototype object
// 2. When we are missing the property,on that time we have to add the property using prototype property object
// 3. And also we have to assign the function using prototype property  

// Example Prototype Property
function display(n, a) {
    this.name = n;
    this.age = a;
    //this.year = "1st year"; // Here add the additional property
}

//Assign the Value for additional property
display.prototype.year = "1st year"; // add additional property using prototype, outside of the funtion
var s1 = new display("abc", 15);
var s2 = new display("xyz", 20);
console.log(s1.year); //display 1st year

//Assign the Function for additional property
    display.prototype.year = "1st year";
    display.prototype.details = function() {
    return this.name+" "+this.age+" " +this.year;    
};
var s1 = new display("abc", 15);
var s2 = new display("xyz", 20);
console.log(s1.details()); //display s1 details
console.log(s2.details()); //display s2 details
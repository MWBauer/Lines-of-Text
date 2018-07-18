//4.1
document.writeln("<h1>Welcome to JavaScript Programming!</h1>"); 
//4.2
document.writeln("<h2 style= \"color: magenta\">");
document.writeln("Welcome to JavaScript" + "Programming!</h2>");
//4.3
document.writeln("<h1>Welcome to<br/>JavaScript" + "<br/>Programming! This is a<br/>multi-line JS script.</h1>");
//4.4
window.alert("Welcome to\nJavaScript\nProgramming!");
//4.5
var name; //string entered by user
name=window.prompt("Please enter your name");
document.writeln("<h1>Hello, " + name + ", welcome to JavaScript programming!</h1>");

var firstNumber; //first string entered by user
var secondNumber;  //second string entered by user
var number1; //first number to add
var number2; //second number to add
var sum; //sum of number 1 and number2
//read in first number from user as a string
firstNumber = window.prompt("Enter first integer");
//read in second number from user as a string
secondNumber = window.prompt("Enter second integer");
//convert numbers from strings to integers
number1 = parseInt(firstNumber);
number2= parseInt(secondNumber);
sum = number1 + number2; //adds the integers
document.writeln("<h1>The sum is " + sum + "</h1>");

var name;
var now= new Date(); //current date and time
  document.writeln(Date());
var hour = now.getHours(); //gets current hour
var min = now.getMinutes(); //current minutes
if (min <= 9) {
  min = "0" + min;
}
  document.writeln(hour + ":" + min);
if (hour < 12) //determines if it is morning
  document.writeln("<p>Good Morning, " + name + "!</p>");
else if (hour >= 12 || hour < 18)
{
  document.writeln("<p>Good Afternoon, " + name + "!</p>");
  //hour = hour -12 will convert to standard time}
else (hour >= 18 || hour <= 23)
{
  document.writeln("<p>Good Night, " + name + "!</p>");}
document.writeln(name + "<p>, welcome to JavaScript Programming!</p>");}
/////////////////CHAPTER 35-38//////////////////////


//q1

// function date(){
//     var a=new Date()
//     document.write(a)
// }
// date()

//q2
// function username(fn, ln){
//     var fn=prompt("Enter your frst name")
//     var ln=prompt("Enter your last name")
//     document.write("GOOD MORNING" + " "+ fn+ " "+ ln + "<br>")
// }
// username("fn","ln")


//q3

// function add(val1, val2){
//     var val1=+prompt("Enter your frst value")
//     var val2=+prompt("Enter your last value2")
//     document.write(val1+val2)
// }
// add("val1","val2")


// q4

// var num1=+prompt("enter value 1")
// var opt=prompt("Enter operator")
// var num2=+prompt("enter value 2")

// function calculator(num1, opt, num2){
//     if(opt=="+"){
//         return num1+num2
//     }
//     else if (opt=="-"){
//         return num1 - num2
//     }
//     else if (opt=="*"){
//         return num1 * num2
//     }
//     else if (opt=="/"){
//         return num1 / num2
//     }
//     else{
//         document.write("enter correct operator")
//     }
// }


// var value = calculator(num1 , opt , num2)

// document.write("Value 1 is"+ " "+ num1 + "<br>") 
// document.write("Operator is"+ opt + "<br>")
// document.write("Value 2 is"+ " "+ num2 + "<br>")

// document.write(num1 + " " + opt + " " + num2 + " " + "= " +value)


//q5


// function sqr(){
//     var b=+prompt("enter number which you want to make square","your number is:")
//     var sqrt=b*b
//     document.write("Square root of" + " " + b + " " +"is " + " " + sqrt)
// }
// sqr();


// //q6

// function factorial(a){
 
//     if(a == 0 || a == 1){
//         return 1;}
 
//     else{
//         return a * factorial(a-1);
//     }
// }
// let a = prompt("enter any number",'your number is');
// ans = factorial(a)
// document.write("The factorial of " + a + " is " + ans);


//q7

// function counts(num1,num2){
//     for (i= num1 ; i <=num2; i++ ){
//     document.write(i + " ")
//     }
// }
// var num1 = prompt('Enter start number')
// var num2 = prompt('Enter End number')
// ans = counts (num1,num2)
// counts();



//q8


// function calHypotenus(base,perpendicular) {
//     function calSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenus = calSquare(base) + calSquare(perpendicular);
//     return document.write(hypotenus)
// }

// calHypotenus(prompt('enter base','your base is'),prompt('enter perpendicular','your perpendicular is'));


//q9

// function angle(){
//     var height=prompt("enter height")
//     var width=prompt("enter width")
//     var a=height*width
//     document.write("The area of Triangle is"+ " "+ a)
// }

// angle()

//q10

// function pal (a){

//     var b
//     var c
//     for (var i = 0; i<a.length; i++){   
//         b = a.charAt(i)
//     }

//     for (var i = a.length; i>=0; i--){
//         c = a.charAt(i)
//     }
//     if(b==c){
//         document.write("this is palindorme")
//     }
//     else{
//         document.write("this is not palindorme")

//     }
// }
// var a=prompt("enter any word")
// pal(a)



//q11


// function FirstLetterUpper(str){
//     var text = str.split(' ');
//     var temp = [];
//   for(var i=0; i<text.length; i++){
//     temp.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
//   }
//   return (temp.join(' '));
// }
// document.write(FirstLetterUpper(prompt("Enter  sentence")));


// //q12

// function long(l){

//     var str = l.split(" ")
//     var count = 0
//     var final = ""
//     for (var i = 0; i<str.length; i++){ 
//         if(str[i].length>count){
//             count = str[i].length
//             final = str[i]
//         }
//     }
//     return final
// }

// var c  =  long(prompt("enter sentence to determine the longest word"))
// document.write("Longest word in this sentcence is:" + " "+ c)


//q13

// function CheckLetter(str,letter){
//     var count=0;
//     var string = str.split('');
//     for(var i=0; i < string.length; i++){
//       if(string[i] === letter){
//         count++;
//       }
//     }
//   return (count);
//   }
//   var str = prompt("enter any word");
//   var letter = 'o';
//   document.write("This "+letter+" is present "+CheckLetter(str,letter)+" times");


//q14

// document.write("<h1> THE GEOMETRIZER </h1> <br> <br> ")

// function calcCircumference(radius){
//     var circumF = (2 * Math.PI * radius); 
    
//     return (circumF);
//   }
//   function calcArea(rad){
//     var area = (2 * Math.PI * rad) ;
//     return (area);
//   }
//   var radius = 9;
//   var rad = 12;
// document.write("The Circumference of the Circle is: "+calcCircumference(radius)+"<br>The area of Circle is: "+calcArea(rad));



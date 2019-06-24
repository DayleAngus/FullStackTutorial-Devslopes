//var length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//console.log(area1);
//
//var length2 =12;
//var width2 = 14;
//var area2 = length2 * width2;
//console.log(area2);

//function area(length, width) {
//    return length * width;
//}
//
//var rectangleAreas = [];
//rectangleAreas.push(area(10,15));
//rectangleAreas.push(area(14,2));
//rectangleAreas.push(area(4,5));
//
//console.log(rectangleAreas);
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale){
//    if(priceOfSale <= bankBalance){
//        bankBalance -= priceOfSale;
//        console.log("purchase successful");
//    } else {
//        console.log("insufficient funds");
//    }
//}
//
//makeTransaction(79.00);
//console.log(bankBalance);
//makeTransaction(2.32);
//console.log(bankBalance);
//makeTransaction(10.45);
//console.log(bankBalance);
//makeTransaction(450.00);
//console.log(bankBalance);

//
//var student = {
//    firstName: "John",
//    lastName: "Parker",
//    age: 7,
//    greeting: function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."
//    }
//};
// 
//console.log(student.greeting());
//
//var student1 = new Object();
//student1.firstName = "Steve";
//student1.lastName = "Smith";
//student1.age = 4;
//
//var student2 = new Object();
//student2.firstName = "Tony";
//student2.lastName = "Stark";
//student2.age = 8;
//
//
//var students = [];
//students.push(student);
//students.push(student1);
//students.push(student2);

//
//function student(firstName, lastName, age) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."
//    };
//}
//
//var s1 = new student("Jenny","Laga",34);
//var s2 = new student("Michael","Meyers",62);
//var s3 = new student("Billy","Idol",15);
//var s4 = new student("Bruce","Banner",23);
//
//var students = [s1,s2,s3,s4];
//
//for(var i = 0; i < students.length; i++){
//    console.log(students[i]);
//    console.log(students[i].greeting());
//}
//

//binding stored functions to objects
this.contextvar = "Global";

var obj = {
    contextvar: "local",
    getvar: function() {
        return this.contextvar;
    }
}

console.log(obj.getvar());

var storefun = obj.getvar;

console.log(storefun());

var storebindedfun = obj.getvar.bind(obj);

console.log(storebindedfun());







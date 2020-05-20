//Inheritance
// Q1 Create a class called Person with three properties called firstName, lastName and age. 
//Include a constructor that assigns these values

// class Person {
//         constructor(firstName, lastName, age) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.age = age;
//         }

// Q2 Create a method in person called getInfo that takes no parameters and returns information 
//about the name and age of the person

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get info() { 
//           return `${this.firstName} ${this.lastName} is ${this.age} years old.`
//     }
// }
// let people = new Person ("Annette", "Brand", 37);
// console.log(people.info); //output Annette Brand is 37 years old.

// Q3 Create a class called Student that extends Person. Student should have a property called 
//grades that should be an array of numbers that represent their mark out of 100 for a series of tests

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get info() { 
//           return `${this.firstName} ${this.lastName} is ${this.age} years old.`
//     }
// }
//     class Student extends Person {
//         constructor (firstName, lastName, age, grades) {
//             super(firstName, lastName, age);
//             this.grades = grades;
//         }
// }
// let me = new Student("Annette", "Brand", 25, [98, 87, 76, 65]);
// console.log(me); 
//Output Student {
//     firstName: 'Annette',
//     lastName: 'Brand',
//     age: 25,
//     grades: [ 98, 87, 76, 65 ]
//   }

// Q4 Create a method inside student that calculates their average grade

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get info() { 
//           return `${this.firstName} ${this.lastName} is ${this.age} years old.`
//     }
// }
//     class Student extends Person {
//         constructor (firstName, lastName, age) {
//             super(firstName, lastName, age);
//             this.grade = grade;
//         }
// }
//     class Grades extends Student {
//         constructor (firstName, lastName, age) {
//             super(firstName, lastName, age);
//             this.grade = grade;
//         }
//         getAverageGrade() {
//         let totalGrades = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             totalGrades += this.grades[i];
//         }

//         let reducer = function(total, currentValue) {
//             return total + currentValue;
//         }

//         let totalGrades = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             let grade = this.grades[i];
//             totalGrades = reducer(totalGrades, grade);
//         }

//         let totalGrades = this.grades.reduce(function (total, currentValue) {
//             return total + currentValue;
//         });

//         return totalGrades / this.grades.length;
//     }
// }

// let me = new Student("Annette", "Brand", 25, [98, 87, 76, 65]);
//  console.log(me); 


// Q5 Override the getInfo method for Student so that it also displays the average grade of the 
//student. Make sure to include a call to super.getInfo

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get info() { 
//           return `${this.firstName} ${this.lastName} is ${this.age} years old.`
//     }
// }
//     class Student extends Person {
//         constructor (firstName, lastName, age) {
//             super(firstName, lastName, age);
//             this.grade = grade;
//         }
// }
//     class Grades extends Student {
//         constructor (firstName, lastName, age) {
//             super(firstName, lastName, age);
//             this.grade = grade;
//         }
//         getAverageGrade() {
//         let totalGrades = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             totalGrades += this.grades[i];
//         }

//         let reducer = function(total, currentValue) {
//             return total + currentValue;
//         }

//         let totalGrades = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             let grade = this.grades[i];
//             totalGrades = reducer(totalGrades, grade);
//         }

//         let totalGrades = this.grades.reduce(function (total, currentValue) {
//             return total + currentValue;
//         });

//         return totalGrades / this.grades.length;
//     }
//         getInfo() {
//             return `${super.getInfo()} and their average grade is ${this.getAverageGrade()}`
//         }
//     }
    
//     let myStudent = new Student("Max", "Kellett", 25, [87, 68, 78, 91]);
//     console.log(myStudent);
    
//     console.log(myStudent.getAverageGrade());
//     console.log(myStudent.getInfo());

// Q6 Create a class called Teacher that extends Person. Teacher should have a property called 
//students that should be an array of Student objects representing the students in their class

// class Teacher extends Person {
//     constructor(firstName, lastName, age, students){
//         super(firstName, lastName, age);
//         this.students = students;
//     }
//     // 7 Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number.
//     getStudentAverageGrade() {
//         // let totalGrades = 0;
//         // for (let i = 0; i < this.students.length; i++) {
//         //     let student = this.students[i];
//         //     let avgGrade = student.getAverageGrade();
//         //     totalGrades += avgGrade;
//         // }

// Q7 Create a method inside Teacher that calculates the average grade across all of their students 
//and returns it as a number.

//         let totalGrades = this.students.reduce(function (total, student) {
//             let studentAvg = student.getAverageGrade();
//             return total + studentAvg;
//         }, 0);
//         return totalGrades / this.students.length;
//     }
//}

// Q8 Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call to super.getInfo
// getInfo() {
//     return `${super.getInfo()}, their average student grade is ${this.getStudentAverageGrade()}`
// }
// }

// let students = [
// new Student("Max", "Kellett", 25, [87, 68, 78, 91]),
// new Student("Daniella", "Matthews", 28, [46, 68, 91]),
// new Student("Shelly", "Andrews", 21, [45, 56, 75, 92]),
// new Student("Dave", "Parks", 40, [90, 98, 88, 91, 96]),
// ];

// let myTeacher = new Teacher("Luke", "Parker", 23, students);
// console.log(myTeacher.getStudentAverageGrade());
// console.log(myTeacher.getInfo());
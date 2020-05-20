//Create a static method in the Person class that takes 1 argument which should be an integer number 
//and returns an array of randomly generated Owners with length equal to the number given. 
//The ids of the owners should all be unique. You can use this gist to generate random names: 
//https://gist.github.com/LukeParkerTAFE/161fd0d451f7236dae99fbb30573735d

const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}

const getRandomNumber = function (max) {
    return Math.floor(Math.random() * max);
}

class Person {
    constructor(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42) + 18, i);
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, id, grades) {
        super(firstName, lastName, age, id);
        this.grades = grades;
    }

    getAverageGrade() {
        let totalGrades = this.grades.reduce(function (total, currentValue) {
            return total + currentValue;
        });

        return totalGrades / this.grades.length;
    }

    getInfo() {
        return `${super.getInfo()} and their average grade is ${this.getAverageGrade()}`
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let grades = [];
            for (let i = 0; i < getRandomNumber(10); i++) {
                grades.push(getRandomNumber(100));
            }
            let randomPerson = new Student(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42) + 18, i, grades);
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, id, students) {
        super(firstName, lastName, age, id);
        this.students = students;
    }
    getStudentAverageGrade() {
        let totalGrades = this.students.reduce(function (total, student) {
            let studentAvg = student.getAverageGrade();
            return total + studentAvg;
        }, 0);
        return totalGrades / this.students.length;
    }

    getInfo() {
        return `${super.getInfo()}, their average student grade is ${this.getStudentAverageGrade()}`
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let students = Student.generateRandomPeople(getRandomNumber(10));
            let randomPerson = new Teacher(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42) + 18, i, students);
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

let randomPeople = Person.generateRandomPeople(5);
console.log(randomPeople);
// Output: [
//     Person { firstName: 'Isla', lastName: 'Thompson', age: 45, id: 0 },
//     Person { firstName: 'Oliver', lastName: 'White', age: 52, id: 1 },
//     Person { firstName: 'Oliver', lastName: 'Jones', age: 45, id: 2 },
//     Person { firstName: 'Noah', lastName: 'White', age: 35, id: 3 },
//     Person { firstName: 'James', lastName: 'Johnson', age: 57, id: 4 }
//   ]
  let randomStudents = Student.generateRandomPeople(5);
  console.log(randomStudents);
//  Output: 
//  [
//     Student {
//       firstName: 'Olivia',
//       lastName: 'White',
//       age: 23,
//       id: 0,
//       grades: [ 1 ]
//     },
//     Student {
//       firstName: 'Thomas',
//       lastName: 'Thompson',
//       age: 31,
//       id: 1,
//       grades: [ 26, 11, 3, 3 ]
//     },
//     Student {
//       firstName: 'Isla',
//       lastName: 'Brown',
//       age: 23,
//       id: 2,
//       grades: [ 5, 97 ]
//     },
//     Student {
//       firstName: 'William',
//       lastName: 'Anderson',
//       age: 35,
//       id: 3,
//       grades: [ 19 ]
//     },
//     Student {
//       firstName: 'Jack',
//       lastName: 'Taylor',
//       age: 41,
//       id: 4,
//       grades: [ 50, 57, 24 ]
//     }
//   ]
 let randomTeachers = Teacher.generateRandomPeople(5);
 console.log(randomTeachers[0]);
//  Output:
//  Teacher {
//     firstName: 'Isla',
//     lastName: 'Nguyen',
//     age: 45,
//     id: 0,
//     students: [
//       Student {
//         firstName: 'Oliver',
//         lastName: 'Taylor',
//         age: 19,
//         id: 0,
//         grades: [Array]
//       },
//       Student {
//         firstName: 'Ava',
//         lastName: 'Smith',
//         age: 44,
//         id: 1,
//         grades: [Array]
//       }
//     ]
//   }
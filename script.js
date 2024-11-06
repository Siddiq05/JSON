const students = [
    { "name": "John Doe", "age": 20, "address": { "pincode": "100001", "city": "New York", "country": "USA" } },
    { "name": "Alice Smith", "age": 22, "address": { "pincode": "200002", "city": "Los Angeles", "country": "USA" } },
    { "name": "Rahul Mehta", "age": 21, "address": { "pincode": "110011", "city": "Delhi", "country": "India" } },
    { "name": "Maria Garcia", "age": 23, "address": { "pincode": "28013", "city": "Madrid", "country": "Spain" } },
    { "name": "Sophia Brown", "age": 19, "address": { "pincode": "SW1A 1AA", "city": "London", "country": "UK" } },
    { "name": "Liam Nguyen", "age": 20, "address": { "pincode": "75001", "city": "Paris", "country": "France" } },
    { "name": "Emma Johnson", "age": 21, "address": { "pincode": "90001", "city": "Chicago", "country": "USA" } },
    { "name": "David Chen", "age": 22, "address": { "pincode": "200080", "city": "Shanghai", "country": "China" } },
    { "name": "Nina Patel", "age": 24, "address": { "pincode": "400001", "city": "Mumbai", "country": "India" } },
    { "name": "Carlos Sanchez", "age": 23, "address": { "pincode": "01000", "city": "Mexico City", "country": "Mexico" } }
];




// 1. Accessing Data

// - Write a function that takes in the JSON data and prints out all the students' names.
function studentNames(students) {
    students.forEach(student => {
        console.log(student.name);
    })
}
studentNames(students);


// - Create a function that lists all students who are from the USA.

function USAStudents(students) {
    const studentname = students.filter(student => student.address.country === "USA")
    console.log(studentname);
}
USAStudents(students);


// - Write a function to find the city of a student based on their name. If the student is not found, return "Student not found".


function FindStudentCity(students, studentName) {
    const student = students.find(student => student.name === studentName)
    if (student) {
        console.log(student);

    } else {
        console.log('Student not found');

    }
}

FindStudentCity(students, "John Doe");
FindStudentCity(students, "Doe")



// 2. Filtering and Mapping


// - Write a function that returns an array of all students who are above 21 years old.

const studentsAbove21 = (students) => {
    return students.filter(student => student.age > 21)

}

const studentsAbv21 = studentsAbove21(students);
console.log(studentsAbv21);

// - Create a function that returns an array of names of students from a given country, like "India" or "Japan".

function StudentCountry(students, studentCountry) {
    return students.filter(student => student.address.country === studentCountry).map(student => student.name)

}
const stCountry = StudentCountry(students, "India");
const stCountry1 = StudentCountry(students, "Japan");
console.log(stCountry);
console.log(stCountry1);

// - Write a function that returns an array of objects with only name and age properties for each student.

function Studentnameage(students) {
    return students.map(student => ({ name: student.name, age: student.age }))
}

const Studentna = Studentnameage(students);
console.log(Studentna);


// 3. Updating and Adding Data

// - Write a function to add a new student to the JSON data. Accept name, age, pincode, city, and country as inputs.

function newstudent(name, age, pincode, city, country) {
    const addstudent = {
        name: name,
        age: age,
        address: {
            pincode: pincode,
            city: city,
            country: country
        }

    }
    students.unshift(addstudent);
}

newstudent("Yuki", 13, "150-0001", "Tokyo", "Japan");
console.log(students);

// - Create a function that updates the city of a student based on their name. If the student isn’t found, return "Student not found".


function updateStudentCity(studentName, newCity) {
    const student = students.find(student => student.name === studentName);
    if (student) {
        student.address.city = newCity; 
        return `City updated to ${newCity}`;
    } else {
        return "Student not found"; 
    }
}
const result = updateStudentCity("Alice Smith", "San Francisco");
console.log(result); 
console.log(students);

// - Write a function that increases the age of each student by 1 (e.g., for updating a new academic year).

function incrementStudentAges() {
    students.forEach(student => {
        student.age += 1; 
    });
}

incrementStudentAges();
console.log(students); 


// 4. Counting and Summing Data

// - Write a function to count how many students are from each country. Return the result as an object, e.g., { "USA": 5, "India": 3 }.

function countStudentsByCountry(students) {
    return students.reduce((acc, student) => {
        const country = student.address.country;
        acc[country] = (acc[country] || 0) + 1;
        return acc;
    }, {});
}

const result1 = countStudentsByCountry(students);
console.log(result1); 


// - Write a function that calculates the average age of all students.

function calculateAverageAge(students) {
    // Calculate the sum of all ages
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    
    // Calculate the average age
    const averageAge = totalAge / students.length;

    return averageAge;
}

const average = calculateAverageAge(students);
console.log(average); 


// - Create a function that calculates the total number of students who are older than 22.

function countStudentsOlderThan22(students) {
    // Filter students who are older than 22
    const olderStudents = students.filter(student => student.age > 22);
    
    // Return the count of students
    return olderStudents.length;
}

const count = countStudentsOlderThan22(students);
console.log(count); 

// 5. Searching and Sorting

// - Write a function to search for students by city and return a list of names of students from that city.

function searchStudentsByCity(students, city) {
    // Filter students based on the city
    const studentsFromCity = students.filter(student => student.address.city === city);
    
    // Map to extract names of the students
    const studentNames = studentsFromCity.map(student => student.name);
    
    return studentNames;
}

const result3 = searchStudentsByCity(students, "New York");
console.log(result3);  //


// - Create a function that sorts the students by age in ascending order and prints their names and ages

function sortStudentsByAge(students) {
    // Sort the students by age in ascending order
    const sortedStudents = students.sort((a, b) => a.age - b.age);
    
    // Print each student's name and age
    sortedStudents.forEach(student => {
        console.log(`${student.name} - ${student.age}`);
    });
}

sortStudentsByAge(students);

// - Write a function to find the oldest student and print their name, age, and city.

function findOldestStudent(students) {
    // Use reduce to find the student with the highest age
    const oldestStudent = students.reduce((oldest, student) => {
        return (student.age > oldest.age) ? student : oldest;
    }, students[0]);  // Initialize with the first student in the array

    // Print the oldest student's name, age, and city
    console.log(`Name: ${oldestStudent.name}`);
    console.log(`Age: ${oldestStudent.age}`);
    console.log(`City: ${oldestStudent.address.city}`);
}

findOldestStudent(students);

// 6. Transforming Data

// - Write a function that returns a new JSON array with each student's name in uppercase.

function convertNamesToUppercase(students) {

    const updatedStudents = students.map(student => {
        return {
            ...student,  // Copy all properties of the student
            name: student.name.toUpperCase()  
        };
    });
    
    return updatedStudents;
}

const result4 = convertNamesToUppercase(students);
console.log(result4);


// - Create a function that removes students who are younger than 20 and returns the updated JSON array.


function removeStudentsYoungerThan20(students) {
    const updatedStudents = students.filter(student => student.age >= 20);
    
    return updatedStudents;
}

const result5 = removeStudentsYoungerThan20(students);
console.log(result5);


// - Write a function to transform each student’s country to lowercase and return the updated JSON array.

function convertCountriesToLowercase(students) {
    // Create a new array with each student's country in lowercase
    const updatedStudents = students.map(student => {
        return {
            ...student,  // Copy all properties of the student
            address: {
                ...student.address,  // Copy all properties of the address
                country: student.address.country.toLowerCase()  // Convert the country to lowercase
            }
        };
    });
    
    return updatedStudents;
}

const result6 = convertCountriesToLowercase(students);
console.log(result6);

// 7. Extracting Unique Data


// - Write a function that returns an array of unique countries represented in the JSON data.

function getUniqueCountries(students) {
    // Extract the countries from the students array
    const countries = students.map(student => student.address.country);
    
    // Create a Set to remove duplicates and return as an array
    const uniqueCountries = [...new Set(countries)];
    
    return uniqueCountries;
}

const result7 = getUniqueCountries(students);
console.log(result7);



// - Create a function that returns all unique pincodes from the JSON data.

function getUniquePincodes(students) {
    // Extract the pincodes from the students' address data
    const pincodes = students.map(student => student.address.pincode);
    
    // Create a Set to remove duplicates and return as an array
    const uniquePincodes = [...new Set(pincodes)];
    
    return uniquePincodes;
}

const result8 = getUniquePincodes(students);
console.log(result8);


// - Write a function that returns a list of students who live in cities with duplicate names (e.g., if there were multiple entries for "Paris").

function getStudentsFromCitiesWithDuplicates(students) {
    // Step 1: Count the occurrences of each city
    const cityCount = students.reduce((acc, student) => {
        const city = student.address.city;
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    // Step 2: Filter students who live in cities with duplicate names
    const studentsFromDuplicateCities = students.filter(student => cityCount[student.address.city] > 1);
    
    return studentsFromDuplicateCities;
}

const result9 = getStudentsFromCitiesWithDuplicates(students);
console.log(result9);


// 8. Challenge Questions
// - Write a function that groups students by country into separate arrays. Return an object where each key is a country and the value is an array of students from that country.


function groupStudentsByCountry(students) {
    // Use reduce to group students by country
    const groupedByCountry = students.reduce((acc, student) => {
        const country = student.address.country;

        // If the country is not already a key in the accumulator, initialize an array
        if (!acc[country]) {
            acc[country] = [];
        }

        // Push the student to the corresponding country's array
        acc[country].push(student);

        return acc;
    }, {});

    return groupedByCountry;
}

const result10 = groupStudentsByCountry(students);
console.log(result10);


// - Create a function that finds the most common city among all students.


function findMostCommonCity(students) {
    // Step 1: Count the occurrences of each city
    const cityCount = students.reduce((acc, student) => {
        const city = student.address.city;
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    // Step 2: Find the city with the highest count
    let mostCommonCity = "";
    let maxCount = 0;

    for (const city in cityCount) {
        if (cityCount[city] > maxCount) {
            mostCommonCity = city;
            maxCount = cityCount[city];
        }
    }

    return mostCommonCity;
}

const result11 = findMostCommonCity(students);
console.log(result11);


// - Write a function that returns a list of students sorted first by country and then by city within each country.

function sortStudentsByCountryAndCity(students) {
    return students.sort((a, b) => {
        // First compare by country
        if (a.address.country < b.address.country) {
            return -1; // a comes before b
        }
        if (a.address.country > b.address.country) {
            return 1; // b comes before a
        }

        // If countries are the same, compare by city
        if (a.address.city < b.address.city) {
            return -1; // a comes before b
        }
        if (a.address.city > b.address.city) {
            return 1; // b comes before a
        }

        return 0; // If both country and city are the same, leave the order unchanged
    });
}

const result12 = sortStudentsByCountryAndCity(students);
console.log(result12);
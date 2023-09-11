//@ts-check
'use strict';

/**
 * This is a function that creates a person.
 *
 * @param {string} name The name of the person.
 * @param {number} age The age of the person.
 * @param {boolean} isDeveloper Whether or not the person is a developer.
 * @returns {object} The person object.
 */
const createPerson = (name, age, isDeveloper) => {
    return { name, age, isDeveloper };
};

class Person {
    /**
     * This is a class that creates a person.
     *
     * @param {string} name The name of the person.
     * @param {number} age The age of the person.
     * @param {boolean} isDeveloper Whether or not the person is a developer.
     */
    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
}

/**
 *
 * @param {Person} person The person to print details for.
 * @returns {void}
 */
const printPersonDetails = (person) => {
    console.log(String(person));
};

/**
 *
 * Give a list of numbers
 *
 * @returns {number[]} An array of numbers.
 */
const getNumbers = () => {
    return [1, 2, 3, 4, 5];
};

createPerson(12, 3, true);

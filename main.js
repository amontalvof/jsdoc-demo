//@ts-check
'use strict';

/**
 * Represents a user profile.
 * @typedef {Object} UserProfile
 * @property {string} name - The user's full name.
 * @property {number} age - The user's age.
 * @property {string[]} hobbies - An array of the user's hobbies.
 */

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
 * @param {Person} person The person to print details for.
 * @returns {void}
 */
const printPersonDetails = (person) => {
    console.log(String(person));
};

/**
 * Give a list of numbers
 *
 * @returns {number[]} An array of numbers.
 */
const getNumbers = () => {
    return [1, 2, 3, 4, 5];
};

createPerson(12, 3, true);

/**
 * @returns {UserProfile}
 */
const getProfile = () => {
    let currentUserProfile = {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "gaming"],
    };
    return currentUserProfile;
};

/**
 * @param {UserProfile} profile
 * @returns {void}
 */
const printProfile = (profile) => {
    console.log(profile);
};

const myProfile = getProfile();
printProfile();

// Assignment 9
// Create a user object with name, age, gender, skills as properties and add the below methods to it
// i.addSkill method => user.addSkill(‘react’) => react should be added to user.skills property which is an array of strings
// ii. getSkills method => user.getSkills() => It should return all the skills of the user
 
// 	Note: user this keyword

let user = {
    name: "Varun", 
    age: 28,
    gender: "M",
    skills: ["Javascript", "HTML", "CSS"],
    addSkill: function (skill) {
        return this.skills.push(skill)
    },
    getSkills: function () {
        return this.skills
    }
}

user.addSkill("Python")

console.log(user.getSkills())
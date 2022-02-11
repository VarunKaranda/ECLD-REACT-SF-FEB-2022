// Assignment 6
// Given an employees database query the employees who are from hyderabad and having experience more than 3 years
// Sample Input: var database = [ { name: 'vicky', age: 24, married: false, address: { city: 'hyderabad', state: 'andhra', pincode: '516003' }, skills: ['react', 'html', 'nodejs'], experience: 2 }, { name: 'nirmal', age: 20, married: true, address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, skills: ['css', 'figma'], experience: 4 }, { name: 'neeraj', age: 26, married: false, address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, skills: ['aws', 'angular', 'nodejs'], experience: 5 } ]
// Sample Output: nirmal

let database = [
  {
    name: "vicky",
    age: 24,
    married: false,
    address: { city: "hyderabad", state: "andhra", pincode: "516003" },
    skills: ["react", "html", "nodejs"],
    experience: 2,
  },
  {
    name: "nirmal",
    age: 20,
    married: true,
    address: { city: "hyderabad", state: "telengana", pincode: "500004" },
    skills: ["css", "figma"],
    experience: 4,
  },
  {
    name: "neeraj",
    age: 26,
    married: false,
    address: { city: "bengaluru", state: "karnataka", pincode: "510006" },
    skills: ["aws", "angular", "nodejs"],
    experience: 5,
  },
];

for (let i = 0; i < database.length; i++) {
    if (database[i].address.city === "hyderabad" && database[i].experience > 3) {
        console.log(database[i].name)
    }
}

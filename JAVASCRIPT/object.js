//object
const person = {
    name : "srushti",
    age : 18,
    hobbie : ["cooking","gardening","eating"]
}

console.log(typeof person);
//acessing data from obj (dot notation)

console.log(person.name);
console.log(person.age);
console.log(person);
console.log(person.hobbie);

//acessing data from obj (bracket notation)
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbie"]);

//add element with brackey notation 
person["city"]="nashik";
console.log(person);


// computed properties

const key1 = "abc";
const key2 = "bcd";

const abc="item1";
const bcd="item2";

const obj1 = {
  "abc" : "item1",
     "bcd" : "item2",
 }

 //iterate object

 for(let key in person){
    console.log(key," : " ,person[key]);
}

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

console.log(Object.keys(person));

console.log(Object.values(person));



console.log(typeof Object.values(person));

const val = Array.isArray( Object.values(person));
console.log(val);

//-------------------------------------------------------------

for(let key of Object.keys(person)){
    console.log(key);
}


for(let value of Object.values(person)){
    console.log(value);
}

//object destructing

const users = [
    {
    userid : 1,
    user_name: "srushti",
    gender : "female"},
    {
    userid : 2,
    user_name: "piyush",
    gender : "male"},
    {
    userid : 3,
    user_name: "akshara",
    gender : "female"},

]

const[{user_name : user1_username,userid},,{gender:user3_gender}] = users;
console.log(user1_username);
console.log(user3_gender);
console.log(userid);




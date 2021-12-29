
// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

const usersJSON = {"users":[{"id":"1","username":"User1"},{"id":"2","username":"User2"}]};
//const usersJSONObj = JSON.parse(usersJSON);
//for

for (var i = 0; i < usersJSON.users.length; i++) {
   var user = usersJSON.users[i];
   console.log("ID: "+user.id+"   Username: "+user.username);
} 
// forEach

usersJSON.users.forEach(function(user) {
 console.log(user);
});

// for in First Example

let text = "";

for (let y in usersJSON)
{
   var userTemp = usersJSON[y];
   text += JSON.stringify(userTemp);;
}
console.log(text);

// for in Second Example

const person = {name:"Peter", age:15}; 

let word = "";
for (let x in person) {
 word += x+" "+ person[x] + " ";
}
console.log(word);

// for of

const users = ["John", "Peter", "Grack"];

let text2 = "";
for (let x of users) {
 text2 += x + " ";
}
console.log(text2);

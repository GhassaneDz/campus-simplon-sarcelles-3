console.log("hello from node");
console.log(12 + 23);
var key = "choubidou";
var user = {};
user.name = "toto";
user.age = 23;
user.isLoggedIn = false;
user.hobbies = ["musik", "cinoche", "sneakers", "manga", "séries"];
user["astro"] = "gémeau";
user["choubidou"] = null;
// console.log(user[key]);
console.log(user.hobbies.length);

var $ = {};

function getUserLastHobby(user) {
    return user.hobbies[user.hobbies.length - 1];
}

function printAllUserHobbies(user) {
    var hobbies = "";
    for (let i = 0; i < user.hobbies.length; i ++) {
        hobbies += user.hobbies[i] + " ";
    }
    // return hobbies;
    // return undefined === return
}

var res2 = printAllUserHobbies(user);
console.log(res2);

// console.log(typeof {});
// console.log(typeof user);
console.log(typeof (123 < 300));
// var res = Boolean([]);










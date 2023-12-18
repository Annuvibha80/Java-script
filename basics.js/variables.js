// KEYPOINTS

// Once the const is declared now you can't change the value
// Use always let to declare variable, don't use var ever
// We can also save memory for variable, without declare it like: accountCity="Jaipur", But ever never use it
//If client have not value but want to declare variable, we can do so: let accountState; it is undefined
//console.table([ accountId, accountEmail, accountPassword, accountCity]) can also declare variables like this



const accountId = 188421
let accountEmail= "annuvibha80@gmail.com"
var accountPassword="12842"
accountCity = "Jaipur"

// accountId=2 //not Allowed
accountEmail= "annuvibha100@gmail.com"
accountpassword="12842"
// console.log(accountpassword);
// console.log(accountEmail);
console.table([ accountId, accountEmail, accountPassword, accountCity]);
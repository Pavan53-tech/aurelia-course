// function SubmitFunction() {

//     by using ID
//     var uname = document.getElementById("uname").value;
//     var pass = document.getElementById("pwd").value;


//     by using classname
//     var uname = document.getElementsByClassName("user1")[0].value;
//     var pass = document.getElementsByClassName("password")[0].value;

//     by using a tag 
//     var uname = document.getElementsByTagName("input")[0].value;
//     var pass = document.getElementsByTagName("input")[1].value; 

//     by using attribute
//     var uname = document.getElementsByName("user")[0].value;
//     var pass = document.getElementsByName("password")[0].value;

//     var uname = "pavankumar";
//     var pass = "1234";

// }



// if condition for valid & invalid User
// function SubmitFunction() {
//     var uname = document.getElementsByClassName("user1")[0].value;
//     var pass = document.getElementsByClassName("password")[0].value;

//     var user1 = "pavankumar";
//     var password = "1234";

//     var errorDiv = document.getElementsByClassName("error")[0];

//     if (uname === user1 && pass === password) {
//         errorDiv.innerHTML = "Valid user";
//         errorDiv.style.color = "rgb(10, 201, 77)";
//         console.log("valid user");
//     } else {
//         errorDiv.innerHTML = "Invalid user";
//         errorDiv.style.color = "red";
//         console.log("invalid user");
//     }
// }


// Nested If condition for user validation
// function SubmitFunction() {
//     var uname = document.getElementsByName("user")[0].value;
//     var pass = document.getElementsByClassName("password")[0].value;
//     var errorDiv = document.getElementsByClassName("error")[0];

//     var user1 = "pavankumar";
//     var user2 = "pavan";
//     var user3 = "praveen";
//     var password = "1234";

//     if (uname === user1) {
//         if (pass === password) {
//             errorDiv.innerHTML = "Valid user";
//             errorDiv.style.color = "rgb(10, 201, 77)";
//             console.log("user1 - valid user");
//         } else {
//             errorDiv.innerHTML = "Invalid password";
//             errorDiv.style.color = "red";
//             console.log("user1 - invalid password");
//         }
//     } else if (uname === user2) {
//         if (pass === password) {
//             errorDiv.innerHTML = "Valid user";
//             errorDiv.style.color = "rgb(10, 201, 77)";
//             console.log("user2 - valid user");
//         } else {
//             errorDiv.innerHTML = "Invalid password";
//             errorDiv.style.color = "red";
//             console.log("user2 - invalid password");
//         }
//     } else if (uname === user3) {
//         if (pass === password) {
//             errorDiv.innerHTML = "Valid user";
//             errorDiv.style.color = "rgb(10, 201, 77)";
//             console.log("user3 - valid user");
//         } else {
//             errorDiv.innerHTML = "Invalid password";
//             errorDiv.style.color = "red";
//             console.log("user3 - invalid password");
//         }
//     } else {
//         errorDiv.innerHTML = "Invalid user";
//         errorDiv.style.color = "red";
//         console.log("invalid user");
//     }
// }

// if else condition with or operator
// function SubmitFunction() {
//     var uname = document.getElementsByName("user")[0].value;
//     var pass = document.getElementsByClassName("password")[0].value;
//     var errorDiv = document.getElementsByClassName("error")[0];

//     var user1 = "pavankumar";
//     var user2 = "pavan";
//     var user3 = "praveen";
//     var password = "1234";

//     if ((uname === user1 || uname === user2 || uname === user3) && pass === password) {
//         errorDiv.innerHTML = "Valid user";
//         errorDiv.style.color = "rgb(10, 201, 77)";
//         console.log("valid user");
//     } else {
//         errorDiv.innerHTML = "Invalid user";
//         errorDiv.style.color = "red";
//         console.log("invalid user");
//     }
// }

// In java script we can declare the variables using three types they are
// 1. var
// 2. Let
// 3. const 
//  where "Let" & "const" are the block scope variables 
// sample code

function SubmitFunction() {
    // Using const because these values won't change
    const user1 = "pavankumar";
    const user2 = "pavan";
    const user3 = "praveen";
    const password = "1234";

    // Using let because these values come from user input and can change
    let uname = document.getElementsByName("user")[0].value;
    let pass = document.getElementsByClassName("password")[0].value;

    // This is where we output the result
    let errorDiv = document.getElementsByClassName("error")[0];

    // Validate username
    if (uname === user1) {
        if (pass === password) {
            errorDiv.innerHTML = "Valid user1";
            errorDiv.style.color = "green";
        } else {
            errorDiv.innerHTML = "Incorrect password for user1";
            errorDiv.style.color = "red";
        }
    } else if (uname === user2) {
        if (pass === password) {
            errorDiv.innerHTML = "Valid user2";
            errorDiv.style.color = "green";
        } else {
            errorDiv.innerHTML = "Incorrect password for user2";
            errorDiv.style.color = "red";
        }
    } else if (uname === user3) {
        if (pass === password) {
            errorDiv.innerHTML = "Valid user3";
            errorDiv.style.color = "green";
        } else {
            errorDiv.innerHTML = "Incorrect password for user3";
            errorDiv.style.color = "red";
        }
    } else {
        errorDiv.innerHTML = "Invalid user";
        errorDiv.style.color = "red";
    }
}




function submitFunction() {
  event.preventDefault(); 

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("Username:", username);
  console.log("Password:", password);

  alert("Logged Successfully");
}

// console.log("login");
document.addEventListener("DOMContentLoaded", function() {
  // Use the History API to navigate to another page without a full reload
    window.history.pushState({}, "", "./index.html");
    // Trigger the popstate event to ensure the browser updates the page
    window.dispatchEvent(new PopStateEvent("popstate"));
});
  document.getElementById("email").value = "jr.dev101@gmail.com";
  document.getElementById("password").value = "123456#";
const logInValidation = () => {
  const validEmail = "jr.dev101@gmail.com";
  const validPass = "123456#";
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === validEmail && password === validPass) {
    // alert("login successful");

    //navigate ISSUE!! See you later
    // Use the History API to navigate to another page without a full reload
    window.history.pushState({}, "", "./wallet.html");
    // Trigger the popstate event to ensure the browser updates the page
    window.dispatchEvent(new PopStateEvent("popstate"));
  } else {
    alert("login failed");
  }
};
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", logInValidation);

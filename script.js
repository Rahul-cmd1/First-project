<script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js"></script>

document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill all fields");
      return;
    }
    if (username === "admin" && password === "123456") {
      alert("Login Successful ✅");
    } else {
      alert("Invalid Username or Password ❌");
    }
  });

  VanillaTilt.init(document.querySelector(".signin"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
  });

});
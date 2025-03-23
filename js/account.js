window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signinForm");

  form.addEventListener("submit", (value) => {
    value.preventDefault();
    const username = form.user.value.trim(); // filter out whitespace for smoother regex execution
    const password = form.password.value;

    const userRegex = /^[a-zA-Z0-9]{4,16}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{7,10}$/

    const validUser = userRegex.test(username)
    const validPassword = passwordRegex.test(password)
    const delay = 2000 // time in ms

    if (!validPassword) {
      alert("Password must within 7 to 10 characters long, including upper and lowercase, special and numerical characters.")
    }
    if (!validUser) {
      alert("Username must be alphanumeric and within 4 to 16 characters long")
    }

    if (username === "DevTest1" && password === "Test101!") {
      alert(`Welcome ${username}\r\n
      Sign in was successful, press the button to return to the homepage.`);
      setTimeout(() => {
        window.location.replace("http://localhost:5501/index.html")
      }, delay)
    } else {
      alert("Error occurred, please try again.");
    }
  });
});

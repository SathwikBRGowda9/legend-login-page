const loginBtn = document.getElementById("loginBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
let hoverAttempts = 0;

function isValid() {
  return username.value.trim() !== "" && password.value.trim() !== "";
}


loginBtn.addEventListener("mouseenter", () => {
  if (!isValid()) {
    hoverAttempts++;
    const maxMove = 80;
    const offsetX = (Math.random() * maxMove * 2) - maxMove;
    const offsetY = (Math.random() * maxMove * 2) - maxMove;
    loginBtn.classList.add("move");
    loginBtn.style.left = `${offsetX}px`;
    loginBtn.style.top = `${offsetY}px`;
  } else {
    loginBtn.classList.remove("move");
    loginBtn.style.left = "0px";
    loginBtn.style.top = "0px";
  }
});

loginBtn.addEventListener("click", () => {
  if (isValid()) {
    alert("Login successful!");
  } else {
    alert("Please enter both username and password.");
  }
});
const eyeEmoji = document.getElementById("eye-emoji");

password.addEventListener("focus", () => {
  eyeEmoji.textContent = "🙈";
});

password.addEventListener("blur", () => {
  eyeEmoji.textContent = "👀";
});

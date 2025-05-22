const submitBtn = document.getElementById("submitBtn");
const resultArea = document.getElementById("resultArea");

submitBtn.addEventListener("click", function () {
  const power = document.getElementById("powerInput").value.trim().toLowerCase();
  const speed = document.getElementById("speedInput").value.trim().toLowerCase();

  let result = "";

  if (power === "intelligence" && speed === "fast") {
    result = "🧠⚡ You are The Tech Genius (Iron Man, Spider-Man)!";
  } else if (power === "strength" && speed === "slow") {
    result = "💪🛡️ You are The Leader (Wonder Woman, Captain America)!";
  } else if (power === "intelligence" && speed === "slow") {
    result = "🧠🕶️ You are The Vigilante (Batman, Daredevil)!";
  } else if (power === "strength" && speed === "fast") {
    result = "⚡💥 You are The Speedster (Flash, Quicksilver)!";
  } else {
    result = "❓ Please enter valid answers: Intelligence or Strength / Fast or Slow";
  }

  resultArea.textContent = result;
});

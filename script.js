const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".site-nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // IMPORTANT: Replace this with Tyler's real business email before publishing.
  const recipient = "YOUR_EMAIL@example.com";
  if (recipient.startsWith("YOUR_EMAIL")) {
    alert("Add your business email address in script.js before using the contact form.");
    return;
  }

  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Website inquiry from ${data.get("name")}`);
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Interest: ${data.get("interest")}

Message:
${data.get("message")}`
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

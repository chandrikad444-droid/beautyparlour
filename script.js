// Replace this demo number with the real parlour WhatsApp number.
// India example: 919876543210 (country code + number, digits only)
const PARLOUR_WHATSAPP = "919876543210";
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
const dateInput = document.getElementById("date");
const now = new Date();
dateInput.min = new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const error = document.getElementById("error");
  if (PARLOUR_WHATSAPP === "919876543210") {
    error.textContent = "Demo number is still set. Edit script.js and add the real parlour WhatsApp number before testing.";
    return;
  }
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("serviceSelect").value;
  const date = dateInput.value;
  const details = document.getElementById("details").value.trim() || "None";
  const msg = `Hello, I would like to enquire about an appointment.\\nName: ${name}\\nPhone: ${phone}\\nService: ${service}\\nPreferred date: ${date}\\nDetails: ${details}`;
  window.open(`https://wa.me/${PARLOUR_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
});

const labels = document.querySelectorAll(".form_group input + label");

labels.forEach(label => {
    label.innerHTML = label.textContent
    .split("")
    .map((later, index) => `<span style="transition-delay: ${index * 50}ms">${later}</span>`)
    .join("");
});
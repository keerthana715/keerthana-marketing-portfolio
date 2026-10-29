/*
  PERSONALISE THESE VALUES BEFORE YOU PUBLISH.
  Use full profile URLs, including https://
*/
const portfolioLinks = {
  email: "pamisettykeerthana@gmail.com",
  linkedin: " https://www.linkedin.com/in/keerthana-pamisetty-8171ba321/",   // Example: https://www.linkedin.com/in/your-profile/
  instagram: "https://www.instagram.com/ai_comedy_adda_12"   // Example: https://www.instagram.com/your_username/
};

const emailLink = document.getElementById("emailLink");
const linkedinLink = document.getElementById("linkedinLink");
const instagramLink = document.getElementById("instagramLink");

emailLink.href = `mailto:${portfolioLinks.email}`;

function setProfileLink(element, url, fallback, label) {
  if (url.trim()) {
    element.href = url;
  } else {
    element.href = fallback;
    element.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
}
setProfileLink(linkedinLink, portfolioLinks.linkedin, "https://www.linkedin.com/", "LinkedIn");
setProfileLink(instagramLink, portfolioLinks.instagram, "https://www.instagram.com/", "Instagram");

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Copy the sample outreach message for easy editing.
const pitch = "Hi , I’m exploring a local collaboration concept for a hospitality brand in Hyderabad. Your café/community could be a good fit for a co-created local guide or short video. Would you be open to a brief conversation about audience fit and possible mutual promotion?";
const copyButton = document.getElementById("copyPitch");
const copyStatus = document.getElementById("copyStatus");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pitch);
    copyStatus.textContent = "Sample message copied.";
  } catch {
    copyStatus.textContent = "Copy is unavailable in this browser. Select and copy the sample message from the source file.";
  }
});

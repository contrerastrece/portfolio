export const handleNavClick = (sectionId) => {
  const navbarHeight = document.querySelector("nav").offsetHeight;
  const section = document.getElementById(sectionId);
  const sectionPosition = section.offsetTop - navbarHeight;
  window.scrollTo({ top: sectionPosition, behavior: "smooth" });
};



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDescription(button) {
  const projectCard = button.closest('.details-container');
  const description = projectCard.querySelector('.project-description');
  const icon = button.querySelector('.btn-icon');
  
  description.classList.toggle('show');

  if (description.classList.contains('show')) {
    if (icon) icon.style.transform = 'rotate(180deg)'; 
  } else {
    if (icon) icon.style.transform = 'rotate(0deg)'; 
  }
}
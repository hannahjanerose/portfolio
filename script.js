function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDescription(button) {
  const projectCard = button.closest('.details-container');
  const description = projectCard.querySelector('.project-description');
  description.classList.toggle('show');
  if (description.classList.contains('show')) {
    button.textContent = 'Show Less';
  } else {
    button.textContent = 'Learn More';
  }
}
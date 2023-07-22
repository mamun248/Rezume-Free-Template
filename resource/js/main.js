function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Add a scroll event listener to handle the sticky behavior
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.sticky-nav');
    const threshold = 800;

    if (window.scrollY >= threshold) {
      nav.classList.add('sticky');
      nav.classList.remove('hide-nav');
    } else {
      nav.classList.remove('sticky');
      nav.classList.add('hide-nav');
    }
  });

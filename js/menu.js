document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const fullMenu = document.querySelector('.full-menu');
  
    // Toggle menu open/close when clicking the menu button
    menuButton.addEventListener('click', function () {
      menuButton.classList.toggle('open');
      fullMenu.classList.toggle('open');
    });
  
    // When a menu item is clicked, navigate to the corresponding page
    const menuItems = document.querySelectorAll('.menu-item, .menu-center .home-icon');
    menuItems.forEach((item) => {
      item.addEventListener('click', function () {
        // Get the page name from the data-page attribute
        const page = this.getAttribute('data-page');
        if (page !== null) {
          router.navigateTo(page);
        }
        // Close the menu
        menuButton.classList.remove('open');
        fullMenu.classList.remove('open');
      });
    });
  });
  
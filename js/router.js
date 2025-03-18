// Simple router for handling page navigation
const router = {
    routes: {
      '': 'home',
      'home': 'home',
      'about': 'about',
      'experience': 'experience',
      'projects': 'projects',
      'contact': 'contact'
    },
  
    init: function () {
      // Initial page load
      this.loadPage(this.getCurrentRoute());
  
      // Handle popstate events (back/forward browser buttons)
      window.addEventListener('popstate', () => {
        this.loadPage(this.getCurrentRoute());
      });
    },
  
    getCurrentRoute: function () {
      // Get the current route from the URL hash
      let route = window.location.hash.substring(1);
      return route in this.routes ? route : '';
    },
  
    navigateTo: function (route) {
      // Update URL and load page
      window.location.hash = route;
      this.loadPage(route);
    },
  
    loadPage: function (route) {
      const contentArea = document.getElementById('content');
  
      // Show loading indicator if needed
      contentArea.innerHTML = '<div class="loading">Loading...</div>';
  
      // Remove any previously loaded page-specific scripts
      const oldPageScripts = document.querySelectorAll(
        'script[src^="js/"][src$=".js"]:not([src="js/three-animation.js"]):not([src="js/menu.js"]):not([src="js/router.js"]):not([src="js/main.js"])'
      );
      oldPageScripts.forEach((script) => {
        script.remove();
      });
  
      // If route is empty or "home", load the homepage content
      if (route === '' || route === 'home') {
        contentArea.innerHTML = `
          <div class="welcome-text">
            <h1 class="hover-effect">Dheeraj N</h1>
            <h2 class="hover-effect">AI/ML Engineer | Full Stack Developer</h2>
            <p class="hover-effect">
              Building intelligent systems, exploring AI, and crafting impactful solutions.
            </p>
            <a href="/assets/Dheeraj Resume.pdf" class="resume-link hover-effect" target="_blank">Download Resume</a>
          </div>
        `;
        return;
      }
  
      // Load page content from separate HTML file
      fetch(`pages/${route}.html`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Page not found');
          }
          return response.text();
        })
        .then((html) => {
          contentArea.innerHTML = html;
  
          // Reset scroll position
          contentArea.scrollTop = 0;
  
          // Dynamically load page-specific JS if it exists
          const script = document.createElement('script');
          script.src = `js/${route}.js`;
          script.setAttribute('data-page', route);
          document.body.appendChild(script);
  
          // Dynamically load page-specific CSS if not already loaded
          if (!document.querySelector(`link[href="css/${route}.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `css/${route}.css`;
            document.head.appendChild(link);
          }
        })
        .catch((error) => {
          contentArea.innerHTML = `
            <div class="error">
              <h2>Error</h2>
              <p>${error.message}</p>
            </div>
          `;
        });
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    router.init();
  });
  
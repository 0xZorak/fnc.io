document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentUrl || (currentUrl === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
document.querySelectorAll(".footer a").forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Navigating to: ${link.innerText}`);
    });
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const menuButton = document.querySelector('.menu-button');
    menuButton.textContent = navLinks.classList.contains('active') ? '×' : '☰';
    
}
function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", function () {
    const dogPark = document.querySelectorAll(".puppy-park");

    function checkVisibility() {
        dogPark.forEach((park) => {
            const cats = park.querySelectorAll(".kitty-box");

            cats.forEach((cat, index) => {
                const rect = cat.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight - 100) { // Trigger 100px before entering
                    setTimeout(() => {
                        cat.classList.add("meow");
                    }, index * 300); // Delay each cat by 300ms
                }
            });
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on load in case elements are already visible
});


// Function to animate the cards when in viewport
function revealCards() {
    let cards = document.querySelectorAll(".service-card");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "perspective(600px) rotateY(0deg)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
}

// Call the function
revealCards();

document.addEventListener("DOMContentLoaded", function () {
    const fadeItems = document.querySelectorAll(".appear-effect");

    const watchScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("showing");
            }
        });
    }, { threshold: 0.2 });

    fadeItems.forEach(item => watchScroll.observe(item));
});




// Function to enable swipe functionality on smaller screens
function enableSwipeable() {
    const missionImages = document.querySelector('.mission-images');
    const screenWidth = window.innerWidth;
  
    // Check if screen width is smaller than 768px
    if (screenWidth <= 768) {
      missionImages.style.overflowX = 'auto';
      missionImages.style.display = 'flex';
      missionImages.style.flexDirection = 'row';
      missionImages.style.gap = '10px';
      
      // Allow for horizontal swipe (touch events)
      let startX = 0;
      let scrollLeft = 0;
  
      // Event listeners for touch or mouse drag
      missionImages.addEventListener('mousedown', (e) => {
        startX = e.pageX - missionImages.offsetLeft;
        scrollLeft = missionImages.scrollLeft;
        missionImages.addEventListener('mousemove', handleDrag);
      });
  
      missionImages.addEventListener('mouseup', () => {
        missionImages.removeEventListener('mousemove', handleDrag);
      });
  
      missionImages.addEventListener('mouseleave', () => {
        missionImages.removeEventListener('mousemove', handleDrag);
      });
  
      missionImages.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - missionImages.offsetLeft;
        scrollLeft = missionImages.scrollLeft;
        missionImages.addEventListener('touchmove', handleTouchMove);
      });
  
      missionImages.addEventListener('touchend', () => {
        missionImages.removeEventListener('touchmove', handleTouchMove);
      });
  
      // Function to handle mouse drag
      function handleDrag(e) {
        const x = e.pageX - missionImages.offsetLeft;
        const scroll = x - startX;
        missionImages.scrollLeft = scrollLeft - scroll;
      }
  
      // Function to handle touch move
      function handleTouchMove(e) {
        const x = e.touches[0].pageX - missionImages.offsetLeft;
        const scroll = x - startX;
        missionImages.scrollLeft = scrollLeft - scroll;
      }
    } else {
      // Remove swipe functionality on larger screens
      missionImages.style.overflowX = 'hidden';
      missionImages.style.flexDirection = 'row'; // Optional: reset to row layout
      missionImages.removeEventListener('mousedown', () => {});
      missionImages.removeEventListener('mouseup', () => {});
      missionImages.removeEventListener('mouseleave', () => {});
      missionImages.removeEventListener('touchstart', () => {});
      missionImages.removeEventListener('touchend', () => {});
    }
  }
  
  // Initial check on load
  enableSwipeable();
  
  // Re-check on window resize
  window.addEventListener('resize', enableSwipeable);
  
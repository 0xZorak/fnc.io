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

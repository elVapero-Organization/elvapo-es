document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('side-menu');
    const closeMenu = document.getElementById('close-menu');

    // Toggle Mobile Menu
    if (hamburger && sideMenu) {
        hamburger.addEventListener('click', () => {
            sideMenu.classList.add('active');
            // Add overlay if needed
            const overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '999';
            overlay.id = 'menu-overlay';
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            overlay.addEventListener('click', () => {
                sideMenu.classList.remove('active');
                overlay.remove();
                document.body.style.overflow = '';
            });
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            const overlay = document.getElementById('menu-overlay');
            if (overlay) overlay.remove();
            document.body.style.overflow = '';
        });
    }

    // Add sticky header behavior
    const stickyHeaders = document.querySelectorAll('.mobile-header, .nav-main');
    window.addEventListener('scroll', () => {
        stickyHeaders.forEach(header => {
            if (header) {
                if (window.scrollY > 100) {
                    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
                } else {
                    header.style.boxShadow = 'none';
                }
            }
        });
    });

    // Simple countdown logic for deals
    function updateCountdowns() {
        const countdowns = document.querySelectorAll('.countdown span');
        countdowns.forEach(span => {
            // Simulate a countdown
            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);

            const diff = endOfDay - now;

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            span.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${now.getMilliseconds().toString().substring(0, 2)}`;
        });
    }

    // Product Slider Logic
    const sliderControls = document.querySelectorAll('.slider-controls');
    sliderControls.forEach(control => {
        const leftBtn = control.querySelector('.icon-left');
        const rightBtn = control.querySelector('.icon-right');
        const section = control.closest('.products-section');
        const slider = section.querySelector('.flex-slider');

        if (leftBtn && rightBtn && slider) {
            leftBtn.addEventListener('click', () => {
                const scrollAmount = slider.offsetWidth + 20;
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            rightBtn.addEventListener('click', () => {
                const scrollAmount = slider.offsetWidth + 20;
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    });

    updateCountdowns();
    setInterval(updateCountdowns, 100);
});

// footer
const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");
if (city && cont.length > 0) {
    city.addEventListener("click", toggleCont);
    function toggleCont() {
        city.classList.toggle("active");
        Array.from(cont).forEach((el) => {
            el.style.display = el.style.display === "block" ? "none" : "block";
        });
    }
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}


// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (ageModal && yesBtn && noBtn) {
    window.addEventListener("load", () => {
        if (localStorage.getItem("ageConfirmed") != "true") {
            ageModal.style.display = "flex";
        } else {
            ageModal.style.display = "none";
        }
    });

    yesBtn.addEventListener("click", () => {
        localStorage.setItem("ageConfirmed", "true");
        ageModal.style.display = "none";
    });

    noBtn.addEventListener("click", () => {
        alert("Acceso denegado. El sitio es solo para mayores de 18 años.");
        window.close();
        window.location.href = "https://www.google.es";
    });
}

// Description Toggle Logic
const showMoreBtn = document.getElementById('showMoreBtn');

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        const extraContent = document.querySelectorAll('.desc-item.extra-content');
        const isExpanded = showMoreBtn.classList.contains('active');

        extraContent.forEach(item => {
            if (isExpanded) {
                item.classList.add('hidden');
            } else {
                item.classList.remove('hidden');
            }
        });

        showMoreBtn.classList.toggle('active');

        if (showMoreBtn.classList.contains('active')) {
            showMoreBtn.innerHTML = 'Ver menos <i class="icon-down"></i>';
        } else {
            showMoreBtn.innerHTML = 'Ver más <i class="icon-down"></i>';
        }
    });
}

// Hide the top warning when the page is scrolled
const warn = document.querySelector(".warn");
if (warn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            warn.style.display = "none";
        } else {
            warn.style.display = "";
        }
    });
}
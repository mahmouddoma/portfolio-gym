// counter Hero
function animateCounter(id, target, duration) {
  let count = 0;
  let step = Math.ceil(target / (duration / 10));
  let interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    document.getElementById(id).textContent = count.toLocaleString();
  }, 10);
}

// Start counting animation
animateCounter("members", 5, 2000);
animateCounter("trainers", 200, 1500);
animateCounter("tools", 20, 2500);

//arrivals logic
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".arrivals-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

// red heard
document.querySelectorAll(".heart").forEach((heart) => {
  heart.addEventListener("click", function () {
    if (this.classList.contains("liked")) {
      this.classList.remove("liked");
      this.src = "./images/heart.png";
    } else {
      this.classList.add("liked");
      this.src = "./images/red-heard.png";
    }
  });
});

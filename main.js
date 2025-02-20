// counter Hero
function animateCounter(id, target, duration, formatK = false) {
  let count = 0;
  let step = Math.ceil(target / (duration / 10));

  let interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }

    let formattedCount = formatK
      ? `+${(count / 1000).toFixed(1)}k`
      : `+${count.toLocaleString()}`;
    document.getElementById(id).textContent = formattedCount;
  }, 10);
}

// Start counter animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  animateCounter("members", 5000, 1000, true);
  animateCounter("trainers", 200, 1000);
  animateCounter("tools", 20000, 1000, true);
});

//arrivals logic
window.onload = function () {
  var swiper = new Swiper(".arrivals-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
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
};

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

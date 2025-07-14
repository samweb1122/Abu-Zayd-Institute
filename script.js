// ============ ON LOAD ============
window.onload = function () {
  initCountdown();
  initSlider();
};

// ============ COUNTDOWN ============
function initCountdown() {
  const countdownEl = document.getElementById("countdown");
  const deadline = new Date("2025-08-01T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const remaining = deadline - now;

    if (remaining <= 0) {
      countdownEl.innerHTML = "Enrollment is now closed.";
      return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s left to enroll`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ============ SLIDER ============
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 4000);
  }
}

// ============ REGISTER FORM TO WHATSAPP ============
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const popup = document.getElementById("registerPopup");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const course = document.getElementById("course").value;

      if (!name || !email || !phone || !course) {
        alert("Please fill in all fields.");
        return;
      }

      const message = `*New Registration*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}`;
      const whatsappLink = `https://wa.me/2349073528916?text=${encodeURIComponent(message)}`;

      window.open(whatsappLink, "_blank");
      form.reset();
      popup.style.display = "none";
    });
  }
});

// ============ REGISTER TOGGLE ============
function toggleRegister() {
  const popup = document.getElementById("registerPopup");
  if (popup) {
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  }
}

// ============ LOGIN PLACEHOLDER ============
function openLoginForm() {
  alert("Login form coming soon...");
}

// ============ LANGUAGE SWITCH ============
let isArabic = false;

function switchLanguage() {
  isArabic = !isArabic;

  const welcomeText = document.getElementById("welcome-text");
  const descText = document.getElementById("desc-text");
  const body = document.body;

  if (!welcomeText || !descText) return;

  if (isArabic) {
    welcomeText.innerText = "مرحبًا بكم في معهد أبو زيد";
    descText.innerText = "تعلم القرآن، الدراسات الإسلامية، والتنمية الشخصية في أي وقت وفي أي مكان.";
    body.classList.add("arabic-mode");
    body.classList.remove("english-mode");
  } else {
    welcomeText.innerText = "Welcome to Abu Zayd Institute";
    descText.innerText = "Learn Qur'an, Islamic Studies, and Personal Development — Anywhere, Anytime.";
    body.classList.add("english-mode");
    body.classList.remove("arabic-mode");
  }
}


        document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    school: document.getElementById("school").value,
    closing_time: document.getElementById("closing_time").value,
    free_days: Array.from(document.querySelectorAll("input[name='free_days']:checked")).map(el => el.value),
    preferred_time: document.getElementById("preferred_time").value,
    guardian: document.getElementById("guardian").value,
    comments: document.getElementById("comments").value
  };

  console.log("Submitted Data:", formData);

  alert("Registration submitted successfully!");

  this.reset(); // Clear form after submission
});


          document.addEventListener("DOMContentLoaded", function () {
  const detailedForm = document.getElementById("detailedRegisterForm");

  if (detailedForm) {
    detailedForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        school: document.getElementById("school").value,
        closing_time: document.getElementById("closing_time").value,
        free_days: Array.from(document.querySelectorAll("input[name='free_days']:checked")).map(el => el.value),
        preferred_time: document.getElementById("preferred_time").value,
        guardian: document.getElementById("guardian").value,
        comments: document.getElementById("comments").value
      };

      console.log("Submitted Data:", formData);

      // Optional: You can also send this data to WhatsApp/Google Sheets/API here.

      alert("Registration submitted successfully!");
      this.reset(); // Clear the form
    });
  }
});

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

// ============ QUICK FORM TO WHATSAPP ============
document.addEventListener("DOMContentLoaded", function () {
  const quickForm = document.getElementById("registerForm");
  if (quickForm) {
    quickForm.addEventListener("submit", function (e) {
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
      quickForm.reset();
    });
  }

  // ============ DETAILED FORM TO WHATSAPP + GMAIL ============
  const detailedForm = document.getElementById("detailedRegisterForm");
  if (detailedForm) {
    detailedForm.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent actual form submit until WhatsApp opens

      const fullName = document.getElementById("fullName").value;
      const age = document.getElementById("age").value;
      const email = document.getElementById("email2").value;
      const phone = document.getElementById("phone2").value;
      const school = document.getElementById("school").value;
      const closingTime = document.getElementById("closing_time").value;
      const guardian = document.getElementById("guardian").value;
      const comments = document.getElementById("comments").value;
      const preferredTime = document.getElementById("preferred_time").value;

      const freeDays = Array.from(document.querySelectorAll("input[name='free_days[]']:checked"))
        .map(cb => cb.value).join(', ');
      const subjects = Array.from(document.querySelectorAll("input[name='subjects[]']:checked"))
        .map(cb => cb.value).join(', ');

      const message = `📝 Full Student Registration:\n
Name: ${fullName}
Age: ${age}
Email: ${email}
Phone: ${phone}
School: ${school}
Closing Time: ${closingTime}
Free Days: ${freeDays}
Subjects: ${subjects}
Preferred Time: ${preferredTime}
Parent/Guardian: ${guardian}
Comments: ${comments}`;

      // Send to WhatsApp
      const whatsappLink = `https://wa.me/2349073528916?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");

      // Submit the form to FormSubmit (Gmail)
      setTimeout(() => {
        detailedForm.submit(); // submit after WhatsApp opens
      }, 500);
    });
  }
});


    function submitQuickForm(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const course = document.getElementById("course").value;

      const message = `Assalamu Alaikum, my name is ${name}. I want to register for *${course}*.\nEmail: ${email}\nWhatsApp: ${phone}`;
      const url = `https://wa.me/2349073528916?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }

    function submitDetailedForm(event) {
      const fullName = document.getElementById("fullName").value;
      const age = document.getElementById("age").value;
      const email = document.getElementById("email2").value;
      const phone = document.getElementById("phone2").value;
      const school = document.getElementById("school").value;
      const time = document.getElementById("closing_time").value;
      const preferred = document.getElementById("preferred_time").value;

      const message = `New Student Registration:\nName: ${fullName}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}\nSchool: ${school}\nClosing Time: ${time}\nPreferred Time: ${preferred}`;
      const url = `https://wa.me/2349073528916?text=${encodeURIComponent(message)}`;
      setTimeout(() => window.open(url, "_blank"), 1000); // Open WhatsApp after form submits
    };
  

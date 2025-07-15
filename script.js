// ============ ON LOAD ============
window.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initSlider();
  setupQuickForm();
  setupDetailedForm();
  setupLanguageSwitch();
});

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
    slides[index].classList.add("active");
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 4000);
  }
}

// ============ TOGGLE SECTION (for Free Days / Subjects) ============
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.style.display = (section.style.display === "block") ? "none" : "block";
  }
}

// ============ LANGUAGE SWITCH ============
let isArabic = false;
function setupLanguageSwitch() {
  const switchBtn = document.getElementById("langSwitch");
  if (!switchBtn) return;

  switchBtn.addEventListener("click", () => {
    isArabic = !isArabic;

    const welcomeText = document.getElementById("welcome-text");
    const descText = document.getElementById("desc-text");
    const body = document.body;

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
  });
}

// ============ QUICK FORM HANDLER ============
function setupQuickForm() {
  const form = document.getElementById("registerForm");
  if (!form) return;

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
  });
}

// ============ DETAILED FORM HANDLER ============
function setupDetailedForm() {
  const form = document.getElementById("detailedRegisterForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email2").value;
    const phone = document.getElementById("phone2").value;
    const school = document.getElementById("school").value;
    const closingTime = document.getElementById("closing_time").value;
    const guardian = document.getElementById("guardian").value;
    const comments = document.getElementById("comments").value;
    const preferredTime = document.getElementById("preferred_time").value;

    const freeDays = Array.from(document.querySelectorAll("input[name='Free Days']:checked"))
      .map(cb => cb.value).join(', ');

    const subjects = Array.from(document.querySelectorAll("input[name='Subjects']:checked"))
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

    const whatsappLink = `https://wa.me/2349073528916?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    setTimeout(() => {
      form.submit();
    }, 1000);
  });
}

// ON LOAD
window.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initSlider();
  setupQuickForm();
  setupDetailedForm();
  setupLanguageSwitch();
});

// COUNTDOWN
function initCountdown() {
  const countdownEl = document.getElementById("countdown");
  const deadline = new Date("2025-08-01T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = deadline - now;

    if (diff <= 0) {
      countdownEl.textContent = "Enrollment is now closed.";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${d}d ${h}h ${m}m ${s}s left to enroll`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// SLIDER
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

// TOGGLE SECTION
function toggleSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === "block" ? "none" : "block";
  }
}

// LANGUAGE SWITCH
function setupLanguageSwitch() {
  const switchBtn = document.getElementById("langSwitch");
  if (!switchBtn) return;

  switchBtn.addEventListener("click", () => {
    const welcome = document.getElementById("welcome-text");
    const desc = document.getElementById("desc-text");
    const body = document.body;

    if (body.classList.contains("arabic-mode")) {
      welcome.textContent = "Welcome to Abu Zayd Institute";
      desc.textContent = "Learn Qur'an, Islamic Studies, and Personal Development — Anywhere, Anytime.";
      body.classList.remove("arabic-mode");
      body.classList.add("english-mode");
    } else {
      welcome.textContent = "مرحبًا بكم في معهد أبو زيد";
      desc.textContent = "تعلم القرآن، الدراسات الإسلامية، والتنمية الشخصية في أي وقت وفي أي مكان.";
      body.classList.remove("english-mode");
      body.classList.add("arabic-mode");
    }
  });
}

// QUICK FORM
function setupQuickForm() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const course = form.course.value;

    if (!name || !email || !phone || !course) {
      alert("Please fill in all fields.");
      return;
    }

    const message = `*Quick Registration*\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}`;
    window.open(`https://wa.me/2349073528916?text=${encodeURIComponent(message)}`, "_blank");
    form.reset();
  });
}

// DETAILED FORM
function setupDetailedForm() {
  const form = document.getElementById("detailedRegisterForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = form["Full Name"].value;
    const age = form.Age.value;
    const email = form.Email.value;
    const phone = form.Phone.value;
    const school = form.School.value;
    const closingTime = form["Closing Time"].value;
    const guardian = form["Guardian Name"]?.value || "";
    const comments = form.Comments?.value || "";
    const preferred = form["Preferred Time"].value;

    const freeDays = Array.from(form.querySelectorAll("input[name='Free Days']:checked")).map(cb => cb.value).join(', ');
    const subjects = Array.from(form.querySelectorAll("input[name='Subjects']:checked")).map(cb => cb.value).join(', ');

    const msg = `📝 Full Student Registration:\n
Name: ${fullName}
Age: ${age}
Email: ${email}
Phone: ${phone}
School: ${school}
Closing Time: ${closingTime}
Free Days: ${freeDays}
Subjects: ${subjects}
Preferred Time: ${preferred}
Guardian: ${guardian}
Comments: ${comments}`;

    window.open(`https://wa.me/2349073528916?text=${encodeURIComponent(msg)}`, "_blank");

    setTimeout(() => {
      form.submit();
    }, 1000);
  });
}

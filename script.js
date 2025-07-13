// === COURSE SEARCH FUNCTIONALITY ===
const searchInput = document.getElementById("searchInput");
const courseCards = document.querySelectorAll(".course-card");

if (searchInput && courseCards.length > 0) {
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    courseCards.forEach(card => {
      const title = card.getAttribute("data-title").toLowerCase();
      card.style.display = title.includes(searchTerm) ? "block" : "none";
    });
  });
}

// === SIMPLE FORM VALIDATION (LOGIN, REGISTER, CONTACT) ===
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input, select, textarea");
    let allFilled = true;

    inputs.forEach(input => {
      if (input.hasAttribute("required") && input.value.trim() === "") {
        allFilled = false;
        input.style.border = "1px solid red";
      } else {
        input.style.border = "";
      }
    });

    if (!allFilled) {
      e.preventDefault();
      alert("Please fill all required fields.");
    }
  });
});

// === OPTIONAL: LANGUAGE MODE SWITCH ===
const arabicModeBtn = document.querySelector(".btn.switch.arabic");
const englishModeBtn = document.querySelector(".btn.switch.english");

if (arabicModeBtn && englishModeBtn) {
  arabicModeBtn.addEventListener("click", () => {
    document.body.classList.add("arabic-mode");
    document.body.classList.remove("english-mode");
  });

  englishModeBtn.addEventListener("click", () => {
    document.body.classList.remove("arabic-mode");
    document.body.classList.add("english-mode");
  });
}

// === WHATSAPP CHAT FLOAT (SCROLL TO HIDE/SHOW) ===
const whatsappFloat = document.querySelector(".whatsapp-float");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (whatsappFloat) {
    if (currentScroll > lastScrollTop) {
      whatsappFloat.style.opacity = "0";
    } else {
      whatsappFloat.style.opacity = "1";
    }
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

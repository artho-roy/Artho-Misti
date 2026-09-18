// =====================================
// DYNAMIC HEADER RENDERER
// =====================================
document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header>
                <div class="logo">
                    <span>♥</span> Artho&Oishe
                </div>

                <nav class="nav-links">
    <a href="#hero">Home</a>
    <a href="#counter">Counter</a>
    <a href="#special-dates">Special Dates</a>
    <a href="#story">Our Story</a>
    <a href="#memories">Memories</a>
    <a href="#letter">Letter</a>
</nav>

                <button id="musicBtn" class="music-btn">
                    ♫ Music
                </button>
            </header>
        `;
        
        initMusicButton();
    }
});




// =====================================
// MUSIC PLAYER LOGIC (Play / Pause toggle)
// =====================================
function initMusicButton() {
    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("music");
    let isPlaying = false;

    if (musicBtn && music) {
        musicBtn.addEventListener("click", () => {
            if (!isPlaying) {
                music.play().then(() => {
                    musicBtn.innerHTML = "❚❚ Pause";
                    musicBtn.style.borderColor = "var(--pink)";
                    musicBtn.style.color = "var(--pink)";
                    isPlaying = true;
                }).catch(err => {
                    console.log("Audio playback error: ", err);
                    alert("গান প্লে করতে আপনার ব্রাউজারে অনুমতি দিন অথবা ফাইল পাথ চেক করুন।");
                });
            } else {
                music.pause();
                musicBtn.innerHTML = "♫ Music";
                musicBtn.style.borderColor = "var(--border)";
                musicBtn.style.color = "white";
                isPlaying = false;
            }
        });
    }
}

// =====================================
// FLOATING HEARTS ANIMATION
// =====================================
const heartsContainer = document.querySelector(".floating-hearts");

function createFloatingHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement("span");
    const hearts = ["❤️", "💕", "💗", "💖", "💘", "💓"];

    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 12 + Math.random() * 25 + "px";
    heart.style.animationDuration = 5 + Math.random() * 6 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createFloatingHeart, 500);

// =====================================
// LOVE COUNTER
// =====================================
const startDate = new Date("2025-08-17T00:00:00");

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    if (difference < 0) return;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    if (document.getElementById("days")) {
        document.getElementById("days").textContent = String(days).padStart(3, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }
}

updateCounter();
setInterval(updateCounter, 1000);

// =====================================
// HERO BUTTON ACTIONS
// =====================================
const loveBtn = document.getElementById("loveBtn");
if (loveBtn) {
    loveBtn.addEventListener("click", () => {
        for (let i = 0; i < 20; i++) {
            setTimeout(createFloatingHeart, i * 100);
        }
    });
}

// =====================================
// YES / NO BUTTON INTERACTIONS
// =====================================
const yesBtn = document.getElementById("yesBtn");
const answer = document.getElementById("answer");

if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        answer.innerHTML = "<h3 style='color: #ff4b72; margin-top: 15px;'>Yaaay! ❤️ I knew it! Forever starts here. 💕</h3>";
        
        for (let i = 0; i < 40; i++) {
            setTimeout(createFloatingHeart, i * 50);
        }
    });
}

const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

if (noBtn) {
    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveNoButton();
    });
}
// =====================================
// PHOTO GALLERY PIN SECURITY
// =====================================
const SECRET_PIN = "2580"; // 👈 আপনার সিক্রেট পাসওয়ার্ডটি এখানে সেট করুন

const unlockBtn = document.getElementById("unlockBtn");
const pinInput = document.getElementById("pinInput");
const lockScreen = document.getElementById("lockScreen");
const galleryContent = document.getElementById("galleryContent");
const lockError = document.getElementById("lockError");

if (unlockBtn) {
    unlockBtn.addEventListener("click", checkPin);
    pinInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") checkPin();
    });
}

function checkPin() {
    if (pinInput.value === SECRET_PIN) {
        lockScreen.style.display = "none";
        galleryContent.style.display = "grid"; // লক খুলে ছবি দৃশ্যমান করবে
    } else {
        lockError.textContent = "Wrong PIN! Try again ❤️";
        pinInput.value = "";
    }
}

// =====================================
// SPECIAL DATES — add more items here
// =====================================
const specialDates = [
    {
        icon: "💞",
        title: "Our Beginning",
        date: "17 August 2025",
        description: "The day our beautiful love story began."
    },
    {
        icon: "🗓️",
        title: "Every Month",
        date: "The 17th",
        description: "A little reminder of our beautiful beginning."
    },
{
    icon: "🎂",
    title: "Oishe's Birthday",
    date: "21 November 2006",
    description: "The day my favorite person came into this world."
},
{
    icon: "🎂",
    title: "My Birthday",
    date: "05 October 2006",
    description: "The day I came into this world."
},
{
    icon: "🌹",
    title: "Our First Date",
    date: "3 April 2026",
    description: "A beautiful moment I will always remember."
},
{
    icon: "🫂",
    title: "Going to see him with the family",
    date: "04 September 2026",
    description: "A beautiful moment I will always remember."
},


    // নিচের মতো আরও item যোগ করুন।
    // আগের item-এর closing } এর পরে comma দিতে হবে।
];

function renderSpecialDates() {
    const grid = document.getElementById("specialDatesGrid");
    if (!grid) return;

    grid.replaceChildren();

    specialDates.forEach((item) => {
        const card = document.createElement("article");
        card.className = "date-card";

        const icon = document.createElement("div");
        icon.className = "date-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = item.icon;

        const label = document.createElement("span");
        label.className = "date-label";
        label.textContent = item.title;

        const date = document.createElement("h3");
        date.textContent = item.date;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.append(icon, label, date, description);
        grid.appendChild(card);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderSpecialDates);
} else {
    renderSpecialDates();
}

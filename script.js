const selector = document.querySelector(".navbar__language-selector");
const currentLang = selector.querySelector(".navbar__language-current");
const options = selector.querySelectorAll(".navbar__language-dropdown li");

selector.addEventListener("click", () => {
  selector.classList.toggle("open");
  selector.setAttribute("aria-expanded", selector.classList.contains("open"));
});

options.forEach((item) => {
  item.addEventListener("click", (e) => {
    currentLang.textContent = e.target.dataset.lang;
    selector.classList.remove("open");
    selector.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!selector.contains(e.target)) {
    selector.classList.remove("open");
    selector.setAttribute("aria-expanded", "false");
  }
});

const darkModeToggle = document.querySelector(".navbar__theme-toggle");
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });

  const heroImage = document.querySelector(".hero__image");
  const heroCards = document.querySelectorAll(".hero__card img");

  heroCards.forEach((cardImg) => {
    cardImg.addEventListener("click", () => {
      heroImage.style.backgroundImage = `url('${cardImg.src}')`;
    });
  });

  const translations = {
    EN: {
      "gen-label": "hololive Generation 0",
      name: "Hoshimachi Suisei",
      tagline:
        "A shooting star that appeared from diamonds in the rough; I'm the virtual idol Hoshimachi Suisei!",
      desc: "A virtual idol with an exceptional love for songs and idols. She works tirelessly towards her dreams of performing in Tokyo Dome one day.",
      "bio-title": "Biography",
      "bio-1":
        "Hoshimachi Suisei began her career as an independent VTuber on March 22, 2018. She designed and created her virtual character entirely by herself, including the illustrations and Live2D model.",
      "bio-2":
        "In May 2019, Suisei joined INNK Music, a music label founded by Hololive, and later became an official member of Hololive in December 2019.",
    },
    JP: {
      "gen-label": "ホロライブ0期生",
      name: "星街すいせい",
      tagline: "原石から現れた流れ星、バーチャルアイドル星街すいせいです！",
      desc: "歌とアイドルへの強い愛を持つバーチャルアイドル。いつか東京ドームでのライブを目指して日々努力している。",
      "bio-title": "バイオグラフィー",
      "bio-1":
        "星街すいせいは2018年3月22日に個人勢VTuberとして活動を開始。キャラクターのイラストやLive2Dモデルも自身で制作した。",
      "bio-2":
        "2019年5月にホロライブ傘下のINNK Musicに加入し、同年12月にはホロライブの正式メンバーとなった。",
    },
  };

  function changeLanguage(lang) {
    const strings = translations[lang];
    for (const key in strings) {
      const el = document.getElementById(key);
      if (el) el.textContent = strings[key];
    }
    document.querySelector(".navbar__language-current").textContent = lang;
  }

  const langItems = document.querySelectorAll(".navbar__language-dropdown li");
  langItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const lang = e.target.dataset.lang;
      changeLanguage(lang);
      localStorage.setItem("lang", lang);
    });
  });

  const savedLang = localStorage.getItem("lang") || "EN";
  changeLanguage(savedLang);
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = function () {
  navbar.classList.toggle("active");
};
document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenProjects = document.querySelectorAll(".hidden-project");

seeMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach((project) => {
    project.style.display = "block";
  });
  seeMoreBtn.style.display = "none";
});
const btn = document.getElementById("lang-btn");

const homee = document.getElementById("homee");
const services = document.getElementById("services");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const introo = document.getElementById("introo");
const asmaa = document.getElementById("asmaa");
const titlee = document.getElementById("titlee");
const aboutt = document.getElementById("aboutt");
const abouttt = document.getElementById("abouttt");
const aboutgreeting = document.getElementById("aboutgreeting");
const aboutasmaa = document.getElementById("aboutasmaa");
const aboutdesc = document.getElementById("aboutdesc");
const servicestitle = document.getElementById("servicestitle");
const uiux = document.getElementById("uiux");
const uiuxdesc = document.getElementById("uiuxdesc");
const webdev = document.getElementById("webdev");
const webdevdesc = document.getElementById("webdevdesc");
const mobileapp = document.getElementById("mobileapp");

let currentLang = "en";
const translations = {
  en: {
    homee: "Homee",
    services: "Services",
    skills: "Skills",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    about: "About Me",

    introo: "Hi, It's ",
    asmaa: "Asmaa",
    titlee: "I'm a ",
    aboutt:
      "Hello! I'm Asmaa, a Business Administration student and a Frontend Developer from Lebanon. I'm passionate about creating interactive web designs, content management, and sharing my experience in technology through my YouTube channel. Let’s create something amazing together!",

    abouttt: "About ",
    aboutgreeting: "Hi, I'm ",
    aboutasmaa: "Asmaa Adass",
    aboutdesc:
      "a passionate frontend developer and business student who builds websites with purpose and values. I’m committed to working only with ethical organizations and do not collaborate with any entity that supports or is connected to Israel. Respecting privacy and principles, I also avoid using images of women in my projects or portfolios. I believe in clean code, meaningful design, and professional integrity. If you share these values, feel free to get in touch I’d love to collaborate!",

    servicestitle: "My Services",
    uiux: "UI/UX Design",
    "uiux-desc":
      "Designing user-friendly and visually appealing interfaces focused on user experience.",
    webdev: "Web Development",
    webdevdesc:
      "Building fast and responsive websites using modern web technologies.",
    mobileapp: "Mobile App Design",
    mobileappdesc:
      "Creating sleek and intuitive mobile app designs for all screen sizes.",
    button: "AR",
    dir: "ltr",
  },
  ar: {
    homee: "الرئيسية",
    services: "الخدمات",
    skills: "المهارات",
    education: "التعليم",
    experience: "الخبرة",
    projects: "المشاريع",
    about: "عني",

    introo: "مرحباً، أنا ",
    asmaa: "أسماء",
    titlee: "أنا ",
    aboutt:
      "مرحباً! أنا أسماء، طالبة إدارة أعمال ومطورة واجهات أمامية من لبنان. أهوى إنشاء تصاميم تفاعلية للمواقع، وإدارة المحتوى، ومشاركة خبرتي في التكنولوجيا من خلال قناتي على يوتيوب. لنبنِ شيئاً مميزاً معاً!",

    abouttt: "عني",
    aboutgreeting: "مرحباً، أنا ",
    aboutasmaa: "أسماء عدس",
    aboutdesc:
      "مطورّة واجهات أمامية شغوفة وطالبة إدارة أعمال تبني مواقع إلكترونية تحمل أهداف وقيم. ألتزم بالعمل مع منظمات أخلاقية فقط ولا أتعاون مع أي جهة تدعم أو ترتبط بإسرائيل. احتراما للخصوصية والمبادئ، أتجنب استخدام صور النساء في مشاريعي أو محافظ أعمالي. أؤمن بالكود النظيف، التصميم الهادف، والنزاهة المهنية. إذا كنت تشارك هذه القيم، لا تتردد بالتواصل، أحب التعاون!",

    servicestitle: "خدماتي",
    uiux: "تصميم واجهات وتجربة المستخدم",
    uiuxdesc:
      "تصميم واجهات سهلة الاستخدام وجذابة بصرياً مع التركيز على تجربة المستخدم.",
    webdev: "تطوير المواقع",
    webdevdesc: "بناء مواقع سريعة ومتجاوبة باستخدام تقنيات الويب الحديثة.",
    mobileapp: "تصميم تطبيقات الهاتف",
    mobileappdesc:
      "إنشاء تصميمات أنيقة وسهلة الاستخدام لتطبيقات الهاتف لجميع أحجام الشاشات.",

    button: "EN",
    dir: "rtl",
  },
};

btn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";

  document.body.dir = translations[currentLang].dir;

  homee.textContent = translations[currentLang].homee;
  services.textContent = translations[currentLang].services;
  skills.textContent = translations[currentLang].skills;
  education.textContent = translations[currentLang].education;
  experience.textContent = translations[currentLang].experience;
  projects.textContent = translations[currentLang].projects;
  about.textContent = translations[currentLang].about;

  introo.textContent = translations[currentLang].introo;
  asmaa.textContent = translations[currentLang].asmaa;
  titlee.textContent = translations[currentLang].titlee;
  aboutt.textContent = translations[currentLang].aboutt;
  abouttt.textContent = translations[currentLang].abouttt;
  aboutgreeting.textContent = translations[currentLang].aboutgreeting;
  aboutasmaa.textContent = translations[currentLang].aboutasmaa;
  aboutdesc.textContent = translations[currentLang].aboutdesc;
  servicestitle.textContent = translations[currentLang].servicestitle;
  uiux.textContent = translations[currentLang].uiux;
  uiuxdesc.textContent = translations[currentLang].uiuxdesc;
  webdev.textContent = translations[currentLang].webdev;
  mobileapp.textContent = translations[currentLang].mobileapp;

  webdevdesc.textContent = translations[currentLang].webdevdesc;
  btn.textContent = translations[currentLang].button;
});

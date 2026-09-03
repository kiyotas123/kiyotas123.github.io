/* Briara Broussard — portfolio interactions & content data */

/* ---------- Content data (edit here to update the site) ---------- */

const interests = [
  ["Mechanical Design", "Turning requirements into parts that can actually be made."],
  ["Manufacturing", "Understanding how a design behaves on the shop floor."],
  ["CAD", "Building clean, editable models with clear design intent."],
  ["Hands-On Engineering", "Learning by building, measuring, and iterating."],
  ["Problem Solving", "Breaking complex problems into testable steps."],
  ["Technical Growth", "Constantly adding new software and shop skills."],
];

const projects = [
  {
    index: "01",
    title: "SolidWorks Project",
    category: "CAD / Part Design",
    image: "images/project-solidworks.jpg",
    summary:
      "Placeholder for a parametric part modeled in SolidWorks with attention to design intent and manufacturability.",
    tags: ["SOLIDWORKS", "3D MODELING", "PART DESIGN"],
  },
  {
    index: "02",
    title: "Technical Drawing",
    category: "Engineering Graphics",
    image: "images/project-drawing.jpg",
    summary:
      "Placeholder for a fully dimensioned multi-view engineering drawing produced to standard drafting practice.",
    tags: ["AUTOCAD", "ENGINEERING GRAPHICS", "TECHNICAL DRAWING"],
  },
  {
    index: "03",
    title: "Robotics / Hands-On Project",
    category: "Build / Mechatronics",
    image: "images/project-robotics.jpg",
    summary:
      "Placeholder for a hands-on build combining mechanical assembly, troubleshooting, and iterative testing.",
    tags: ["ROBOTICS", "HANDS-ON", "PROBLEM SOLVING"],
  },
];

const software = [
  { name: "SolidWorks", level: "Proficient", bars: 4 },
  { name: "AutoCAD", level: "Proficient", bars: 4 },
  { name: "SolidProfessor", level: "Working knowledge", bars: 3 },
  { name: "Microsoft Office", level: "Advanced", bars: 5 },
];

const skills = [
  "3D Modeling", "Technical Drawing", "Problem Solving", "Team Collaboration",
  "Time Management", "Organization", "Technical Communication", "Design", "Manufacturing",
];

const roles = [
  {
    org: "University of Houston Recreation Center",
    title: "ID Check Attendant / Administrative Assistant",
    period: "09/2025 — Present",
    description:
      "Verify credentials, provide customer service, enforce facility policies, organize records, and support daily administrative operations.",
    skills: ["Attention to Detail", "Record Keeping", "Policy Compliance"],
  },
  {
    org: "Charley's Cheesesteaks",
    title: "Cashier / Crew Member",
    period: "Summer 2026",
    description:
      "Processed orders and payments, provided customer service, maintained an organized workspace, and collaborated in a fast-paced environment.",
    skills: ["Time Management", "Team Collaboration", "Process Consistency"],
  },
  {
    org: "Hibbett Sports",
    title: "Sales Associate",
    period: "05/2024 — 06/2025",
    description:
      "Assisted customers, maintained store organization and displays, managed inventory, and supported daily operations.",
    skills: ["Inventory Management", "Organization", "Communication"],
  },
  {
    org: "Family Daycare",
    title: "Childcare Assistant",
    period: "2017 — Present",
    description:
      "Assisted with supervision and activities while maintaining a safe environment and communicating with children and parents.",
    skills: ["Responsibility", "Safety Awareness", "Communication"],
  },
];

/* ---------- Rendering ---------- */

const el = (html) => {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

document.getElementById("interests").append(
  ...interests.map(([title, detail]) =>
    el(`<div class="cell"><div class="tick"></div><h4>${title}</h4><p>${detail}</p></div>`)
  )
);

document.getElementById("projects-grid").append(
  ...projects.map((p) =>
    el(`
      <article class="project reveal">
        <div class="project-img"><img src="${p.image}" alt="${p.title} — ${p.category}" loading="lazy" /></div>
        <div class="project-body">
          <p class="label accent">${p.index} — ${p.category}</p>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
      </article>`)
  )
);

document.getElementById("software").append(
  ...software.map((s) =>
    el(`
      <div>
        <div class="sw-head"><h4>${s.name}</h4><span class="label muted">${s.level}</span></div>
        <div class="bars" aria-hidden="true">
          ${Array.from({ length: 5 }, (_, i) => `<span class="${i < s.bars ? "on" : ""}"></span>`).join("")}
        </div>
      </div>`)
  )
);

document.getElementById("chips").append(
  ...skills.map((s) => el(`<span class="chip">${s}</span>`))
);

document.getElementById("timeline").append(
  ...roles.map((r) =>
    el(`
      <li class="reveal">
        <p class="label muted">${r.period}</p>
        <h3>${r.title}</h3>
        <p class="org">${r.org}</p>
        <p class="desc">${r.description}</p>
        <div class="tags">${r.skills.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
      </li>`)
  )
);

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Mobile menu ---------- */

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Scroll reveal ---------- */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((n) => observer.observe(n));

/* ---------- Active nav link on scroll ---------- */

const sections = [...document.querySelectorAll("section[id]")];
const navAnchors = [...document.querySelectorAll(".nav-links a, .mobile-nav a")];

const setActive = () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;
  sections.forEach((s) => {
    if (s.offsetTop <= y) current = s.id;
  });
  navAnchors.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`)
  );
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();

/* ---------- Contact form ---------- */

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.className = "form-status";
    status.textContent = "Please fill in every field.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.className = "form-status";
    status.textContent = "Please enter a valid email address.";
    return;
  }

  // No backend on a static site — open the visitor's email client instead.
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:Broussardbriara@gmail.com?subject=${subject}&body=${body}`;

  status.className = "form-status ok";
  status.textContent = "Opening your email app to send the message.";
  form.reset();
});

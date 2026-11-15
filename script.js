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
  link: "projects/cad.html",
  image: "images/solidworks.png.jpg",
    summary:
      "Placeholder for a parametric part modeled in SolidWorks with attention to design intent and manufacturability.",
    tags: ["SOLIDWORKS", "3D MODELING", "PART DESIGN"],
  },
  {
    index: "02",
    title: "Technical Drawing",
    category: "Engineering Graphics",
    link: "projects/drawings.html",
    image:"images/technical-drawing.png.jpg",
    summary:
      "Placeholder for a fully dimensioned multi-view engineering drawing produced to standard drafting practice.",
    tags: ["AUTOCAD", "ENGINEERING GRAPHICS", "TECHNICAL DRAWING"],
  },
  {
    index: "03",
    title: "Robotics / Hands-On Project",
    category: "Build / Mechatronics",
    link: "projects/robotics.html",
    image: "images/robotics.png.jpg",
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
    title: "Red Mankin Drill Team Member",
    period: "11/2026 — Present",
    description:
      "Selected for a paid position originally limited to non-work-study students. Advocated for eligibility and gained management approval. Assist with emergency drills and teach CPR to new hires.",
    skills: ["Emergency Preparedness", "CPR Training", "Teamwork"],
  },
  {
    org: "University of Houston Recreation Center",
    title: "Desk Attendant",
    period: "09/2026 — Present",
    description:
      "Assist members and visitors with check-ins, answer questions, maintain accurate records, and help resolve member concerns.",
    skills: ["Customer Service", "Record Keeping", "Communication"],
  },
  {
    org: "University of Houston Recreation Center",
    title: "ID Check Attendant / Administrative Assistant",
    period: "09/2025 — 08/2026",
    description:
      "Verified credentials, provided customer service, enforced facility policies, organized records, and supported daily administrative operations.",
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
   <article class="project reveal" data-link="${p.link || ""}">
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
document.querySelectorAll(".project[data-link]").forEach((project) => {
  project.style.cursor = "pointer";

  project.addEventListener("click", () => {
    window.location.href = project.dataset.link;
  });
});

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

// ---------- CERTIFICATION GALLERY ----------

const certCategories = [
  {
    title: "SOLIDWORKS",
    detail: "CAD & 3D Design",
    image: "images/Solidwork.jpg",
    certificateImage: "images/SolidworksCert.png",
    issuer: "Dassault Systèmes",
    date: "November 13, 2026",
    credential: "Certified SOLIDWORKS Associate (CSWA)",
  },
  {
    title: "AutoCAD",
    detail: "Technical Drafting",
    image: "images/autocad.png",
    certificateImage: "images/Autodesk.png",
    issuer: "Autodesk",
    date: "May 9, 2025",
    credential: "AutoCAD Certification",
  },
{
  title: "CPR / First Aid",
  detail: "First Aid, CPR & AED Training",
  image: "images/CPR.jpg",
  certificates: [
    {
      image: "images/CPRCert.png",
      credential: "Adult and Pediatric First Aid/CPR/AED",
      date: "October 9, 2026",
      expiration: "October 9, 2028",
    },
    {
      image: "images/InstructorCert.png",
      credential: "First Aid/CPR/AED Instructor r.25",
      date: "October 9, 2026",
      expiration: "October 9, 2028",
    },
  ],
},
  {
    title: "SolidProfessor",
    detail: "Engineering Software Training",
    image: "images/Solidprofessor.jpg",
    link: "certifications/solidprofessor.html",
  },
  {
    title: "TEEX",
    detail: "Workforce & Safety Training",
    image: "images/teex.jpg",
    link: "certifications/teex.html",
  },
  {
    title: "MSI",
    detail: "Management & Strategy Training",
    image: "images/MSI.jpg",
    link: "certifications/msi.html",
  },
  {
    title: "EVERFI",
    detail: "Professional Development",
    image: "images/everfi.png",
    link: "certifications/everfi.html",
  },
];

const certTrack = document.getElementById("certTrack");
const certDots = document.getElementById("certDots");
const certPrev = document.getElementById("certPrev");
const certNext = document.getElementById("certNext");

let certIndex = 0;

function renderCertGallery() {
  if (!certTrack || !certDots) return;

  certTrack.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const category =
      certCategories[(certIndex + i) % certCategories.length];

    const imageContent = category.image
      ? `<img class="cert-logo" src="${category.image}" alt="${category.title} logo">`
      : `<span class="cert-card-icon">${category.icon}</span>`;

    certTrack.innerHTML += `
      <article class="cert-card">
        <div class="cert-card-top">
          ${imageContent}
        </div>

        <div class="cert-card-body">
          <h3>${category.title}</h3>
          <p>${category.detail}</p>
        <button class="cert-view" type="button" data-cert-index="${certCategories.indexOf(category)}">
  VIEW CREDENTIALS &rarr;
</button>
        </div>
      </article>
    `;
  }

  certDots.innerHTML = certCategories
    .map((category, index) => `
      <button
        class="cert-dot ${index === certIndex ? "active" : ""}"
        aria-label="Show ${category.title}"
        data-index="${index}">
      </button>
    `)
    .join("");

  certDots.querySelectorAll(".cert-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      certIndex = Number(dot.dataset.index);
      renderCertGallery();
    });
  });
}
if (certPrev && certNext) {
  certPrev.addEventListener("click", () => {
    certIndex =
      (certIndex - 1 + certCategories.length) % certCategories.length;
    renderCertGallery();
  });

  certNext.addEventListener("click", () => {
    certIndex = (certIndex + 1) % certCategories.length;
    renderCertGallery();
  });
}

renderCertGallery();
// ---------- CERTIFICATION POPUP ----------

const certModal = document.getElementById("certModal");
const certModalClose = document.getElementById("certModalClose");
const certModalTitle = document.getElementById("certModalTitle");
const certModalGallery = document.getElementById("certModalGallery");

function transitionCertView(newContent) {
  certModalGallery.classList.add("is-transitioning");

  setTimeout(() => {
    certModalGallery.innerHTML = newContent;
    certModalGallery.classList.remove("is-transitioning");
  }, 250);
}

function renderCredentialCards(category, certificates) {
  certModalGallery.innerHTML = `
    <div class="cert-credential-grid">
      ${certificates.map((cert, i) => `
        <article class="cert-credential-card">
          <div class="cert-credential-icon">
            <span>${certificates.length > 1 ? "0" + (i + 1) : "★"}</span>
          </div>

          <h3>${cert.credential}</h3>

          <p class="cert-earned">
            Earned: ${cert.date || "Date not provided"}
          </p>

          <button class="cert-view" type="button" data-view-cert="${i}">
            VIEW CREDENTIAL →
          </button>
        </article>
      `).join("")}
    </div>

    <div class="cert-gallery-footer">
      <p>ISSUED BY ${category.issuer || "UNIVERSITY OF HOUSTON CAMPUS RECREATION"}</p>
      ${certificates.some(cert => cert.expiration)
        ? `<p>VALID UNTIL ${certificates.find(cert => cert.expiration).expiration}</p>`
        : ""}
    </div>
  `;
}

function renderSingleCertificate(cert) {
  return `
    <button class="cert-back" type="button">
      ← BACK TO CREDENTIALS
    </button>

    <div class="cert-single-view">
      <img src="${cert.image}" alt="${cert.credential}">
    </div>

    <div class="cert-single-info">
      <h3>${cert.credential}</h3>
      <p>Earned: ${cert.date || "Date not provided"}</p>
      ${cert.expiration ? `<p>Valid until: ${cert.expiration}</p>` : ""}
    </div>
  `;
}

// Open popup
if (certTrack && certModal && certModalGallery) {
  certTrack.addEventListener("click", (e) => {
    const button = e.target.closest(".cert-view");
    if (!button) return;

    const index = Number(button.dataset.certIndex);
    const category = certCategories[index];

    if (!category) return;

    const certificates = category.certificates || (
      category.certificateImage
        ? [{
            image: category.certificateImage,
            credential: category.credential,
            date: category.date,
            issuer: category.issuer,
          }]
        : []
    );

    if (!certificates.length) return;

    certModalTitle.textContent = category.title;
    renderCredentialCards(category, certificates);

    certModal.classList.add("open");
    certModal.setAttribute("aria-hidden", "false");
  });

  // Handle credential buttons and back button
  certModalGallery.addEventListener("click", (e) => {
    const viewButton = e.target.closest("[data-view-cert]");

    if (viewButton) {
      const index = Number(viewButton.dataset.viewCert);
      const category = certCategories.find(
        item => item.title === certModalTitle.textContent
      );

      if (!category) return;

      const certificates = category.certificates || [{
        image: category.certificateImage,
        credential: category.credential,
        date: category.date,
        issuer: category.issuer,
      }];

      const cert = certificates[index];
      if (!cert) return;

      transitionCertView(renderSingleCertificate(cert));
      return;
    }

    if (e.target.closest(".cert-back")) {
      const category = certCategories.find(
        item => item.title === certModalTitle.textContent
      );

      if (!category) return;

      const certificates = category.certificates || [{
        image: category.certificateImage,
        credential: category.credential,
        date: category.date,
        issuer: category.issuer,
      }];

      transitionCertView("");

      setTimeout(() => {
        renderCredentialCards(category, certificates);
      }, 250);
    }
  });
}

// Close popup
function closeCertModal() {
  if (!certModal) return;

  certModal.classList.remove("open");
  certModal.setAttribute("aria-hidden", "true");
}

if (certModalClose) {
  certModalClose.addEventListener("click", closeCertModal);
}

if (certModal) {
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) closeCertModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certModal?.classList.contains("open")) {
    closeCertModal();
  }
});


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
// Close the latest update popup
const closeUpdate = document.getElementById("closeUpdate");
const siteUpdate = document.getElementById("siteUpdate");

if (closeUpdate && siteUpdate) {
  closeUpdate.addEventListener("click", () => {
    siteUpdate.style.display = "none";
  });
}

const DATA = window.PORTFOLIO_DATA || {};
const tabs = DATA.tabs || [];
const about = DATA.about || {};
const projectFilterConfig = DATA.projectFilterConfig || {};
const experience = DATA.experience || {};
const projects = DATA.projects || [];
const contact = DATA.contact || {};

const app = document.getElementById("app");
const desktopTabs = document.getElementById("desktop-tabs");
const mobileTabs = document.getElementById("mobile-tabs");
let currentPage = "about";
let selectedProjectFilters = new Set();
let showMoreProjectFilters = false;

function renderTabs() {
  [desktopTabs, mobileTabs].forEach((root) => {
    root.innerHTML = tabs
      .map((tab) => {
        const isActive = currentPage === tab.key;
        const bg = isActive ? tab.active : tab.color;
        return `<button type="button" class="tab-btn btn-float ${isActive ? "active" : ""}" data-page="${tab.key}" style="background:${bg}"><span>${tab.label}</span></button>`;
      })
      .join("");
  });

  document.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage = btn.getAttribute("data-page") || "about";
      renderRoute();
    });
  });
}

function renderAbout() {
  const name = about.name || "Sophie Whyte";
  const role = about.role || "Student / EUC Intern @ Met Police";
  const location = about.location || "London";
  const experience = about.experience || "1 year Work Experience";
  const heading = about.heading || "About Me";
  const paragraph1 = about.paragraph1 || "";
  const paragraph2 = about.paragraph2 || "";
  const note = about.note || "";
  app.innerHTML = `
    <section>
      <div class="about-header">
        <div class="avatar avatar-flower" aria-hidden="true">
          <span class="petal p1"></span>
          <span class="petal p2"></span>
          <span class="petal p3"></span>
          <span class="petal p4"></span>
          <span class="petal p5"></span>
          <span class="flower-core"></span>
        </div>
        <div>
          <h1>${name}</h1>
          <p class="fs-4 fw-bold" style="color:#1db695;">${role}</p>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <div class="meta-pill pill-a px-3 py-1">${location}</div>
            <div class="meta-pill pill-b px-3 py-1">${experience}</div>
          </div>
        </div>
      </div>
      <h2 class="mb-3">${heading}</h2>
      <p class="mb-3">${paragraph1}</p>
      <p>${paragraph2}</p>
      <div class="heart-note">${note}</div>
    </section>
  `;
}

function renderProjects() {
  const allTechFilters = [...new Set(projects.flatMap((project) => project.tech || []))];
  const primaryFilters = (projectFilterConfig.primaryFilters || []).filter((filter) =>
    allTechFilters.includes(filter)
  );
  const extraFilters = allTechFilters.filter((filter) => !primaryFilters.includes(filter));
  const hasMoreFilters = extraFilters.length > 0;

  selectedProjectFilters = new Set(
    [...selectedProjectFilters].filter((filter) => allTechFilters.includes(filter))
  );

  const forceExpanded = [...selectedProjectFilters].some(
    (filter) => !primaryFilters.includes(filter) && extraFilters.includes(filter)
  );
  const isExpanded = showMoreProjectFilters || forceExpanded;
  const allActive =
    allTechFilters.length > 0 && selectedProjectFilters.size === allTechFilters.length;

  const visibleFilters = [
    "All",
    ...primaryFilters,
    ...(isExpanded ? extraFilters : []),
  ];

  const visibleProjects =
    selectedProjectFilters.size === 0
      ? projects
      : projects.filter((project) =>
          (project.tech || []).some((tech) => selectedProjectFilters.has(tech))
        );

  const filterButtons = visibleFilters
    .map((filter) => {
      const activeClass =
        filter === "All"
          ? allActive
            ? "active"
            : ""
          : selectedProjectFilters.has(filter)
            ? "active"
            : "";
      return `<button type="button" class="project-filter-btn btn-float ${activeClass}" data-project-filter="${filter}">${filter}</button>`;
    })
    .join("");

  const moreFiltersButton = hasMoreFilters
    ? `<button type="button" class="project-filter-toggle btn-float" data-project-filter-toggle="true">${
        isExpanded ? "Fewer Filters" : "More Filters"
      }</button>`
    : "";

  const cards = visibleProjects
    .map((project, i) => {
      const chips = project.tech.map((tech) => `<span class="chip">${tech}</span>`).join("");
      return `
        <article class="col-12 col-lg-6">
          <div class="card-wrap h-100">
            <div class="card-layer layer-1"></div>
            <div class="card-layer layer-2"></div>
            <div class="card-layer layer-3"></div>
            <div class="card p-3 h-100">
              <div class="project-hero" style="background:${project.gradient}">${i + 1}</div>
              <h2 class="fs-4 mb-2">${project.title}</h2>
              <p>${project.description}</p>
              <div class="d-flex flex-wrap gap-2 my-3">${chips}</div>
              <div class="d-flex gap-2 border-top pt-3 mt-auto">
                <button class="link-btn btn-float" type="button">Code</button>
                <button class="link-btn btn-float" type="button">Live Demo</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  app.innerHTML = `
    <section>
      <h1>My Projects</h1>
      <p>A selection of my recent work and side projects</p>
      <div class="filter-bar">${filterButtons}${moreFiltersButton}</div>
      <div class="row g-4 mt-1">${cards}</div>
    </section>
  `;

  document.querySelectorAll("[data-project-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-project-filter") || "All";

      if (filter === "All") {
        if (allActive) {
          selectedProjectFilters.clear();
        } else {
          selectedProjectFilters = new Set(allTechFilters);
        }
        renderProjects();
        return;
      }

      if (allActive) {
        selectedProjectFilters = new Set([filter]);
        renderProjects();
        return;
      }

      if (selectedProjectFilters.has(filter)) {
        selectedProjectFilters.delete(filter);
      } else {
        selectedProjectFilters.add(filter);
      }
      renderProjects();
    });
  });

  const filterToggle = document.querySelector("[data-project-filter-toggle]");
  if (filterToggle) {
    filterToggle.addEventListener("click", () => {
      showMoreProjectFilters = !isExpanded;
      renderProjects();
    });
  }
}

function renderContact() {
  const email = contact.email || "whytesophiemai@gmail.com";
  const linkedinUrl = contact.linkedinUrl || "#";
  const linkedinText = contact.linkedinText || "Sophie Whyte";
  const githubUrl = contact.githubUrl || "#";
  const githubText = contact.githubText || "SophieWhyte";

  app.innerHTML = `
    <section class="contact-centered-section">
      <h1 class="text-center">Get In Touch</h1>
      <div class="contact-links-row mt-3">
        <a class="contact-item contact-item-centered btn-float" href="mailto:${email}"><span class="icon" style="background:#ff96d3">@</span><span><strong>Email</strong><br><small>${email}</small></span></a>
        <a class="contact-item contact-item-centered btn-float" href="${linkedinUrl}" target="_blank" rel="noreferrer noopener"><span class="icon" style="background:#70cfff">in</span><span><strong>LinkedIn</strong><br><small>${linkedinText}</small></span></a>
        <a class="contact-item contact-item-centered btn-float" href="${githubUrl}" target="_blank" rel="noreferrer noopener"><span class="icon" style="background:#1db695">gh</span><span><strong>GitHub</strong><br><small>${githubText}</small></span></a>
      </div>
    </section>
  `;
}

function renderExperience() {
  const title = experience.title || "Experience";
  const subtitle = experience.subtitle || "";
  const items = experience.items || [];

  const timelineItems = items
    .map((item) => {
      const points = (item.points || [])
        .map((point) => `<li>${point}</li>`)
        .join("");

      return `
        <article class="timeline-item">
          <div class="timeline-year">${item.year || ""}</div>
          <div class="timeline-card card-wrap">
            <div class="card-layer layer-1"></div>
            <div class="card-layer layer-2"></div>
            <div class="card-layer layer-3"></div>
            <div class="card p-3">
              <h2 class="fs-4 mb-1">${item.role || ""}</h2>
              <p class="timeline-company mb-2">${item.company || ""}</p>
              <p class="mb-2">${item.summary || ""}</p>
              <ul class="timeline-points mb-0">${points}</ul>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  app.innerHTML = `
    <section>
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <div class="timeline mt-4">${timelineItems}</div>
    </section>
  `;
}

function renderRoute() {
  renderTabs();
  if (currentPage === "projects") return renderProjects();
  if (currentPage === "experience") return renderExperience();
  if (currentPage === "contact") return renderContact();
  return renderAbout();
}

window.addEventListener("DOMContentLoaded", () => {
  renderRoute();
});

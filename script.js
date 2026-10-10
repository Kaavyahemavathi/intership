
"use strict";

/*
 * Launchpad internship board
 * Supports local records or a JSON API endpoint.
 * Private API credentials belong on the backend, not in this file.
 */

const API_ENDPOINT = ""; // Configure your backend endpoint when available.

const internshipRecords = [
  {
    id: "INT-101",
    title: "Frontend Development Intern",
    publisher: "Engineering Talent Team",
    domain: "Full Stack Development",
    mode: "Remote",
    location: "India",
    stipend: "₹15,000–₹25,000/month",
    duration: "3 months",
    deadline: "2026-11-15",
    openings: 3,
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    description:
      "Develop responsive web interfaces, improve accessibility, and collaborate with engineers to deliver maintainable user experiences."
  },
  {
    id: "INT-102",
    title: "Backend Engineering Intern",
    publisher: "Platform Engineering Team",
    domain: "Full Stack Development",
    mode: "Hybrid",
    location: "Pune",
    stipend: "₹20,000–₹30,000/month",
    duration: "6 months",
    deadline: "2026-11-20",
    openings: 2,
    skills: ["Node.js", "REST APIs", "SQL", "Testing"],
    description:
      "Contribute to API development, database queries, server-side validation, and automated testing while learning backend engineering practices."
  },
  {
    id: "INT-103",
    title: "UI/UX Design Intern",
    publisher: "Product Design Team",
    domain: "UI/UX Design",
    mode: "Remote",
    location: "India",
    stipend: "₹12,000–₹20,000/month",
    duration: "3 months",
    deadline: "2026-11-30",
    openings: 1,
    skills: ["Figma", "Wireframing", "User Research"],
    description:
      "Support user research, create wireframes, explore interface concepts, and help deliver accessible and consistent digital experiences."
  },
  {
    id: "INT-104",
    title: "Data Analyst Intern",
    publisher: "Analytics Team",
    domain: "Data Analytics",
    mode: "On-site",
    location: "Bengaluru",
    stipend: "₹18,000–₹28,000/month",
    duration: "6 months",
    deadline: "2026-11-25",
    openings: 2,
    skills: ["Excel", "SQL", "Python", "Visualisation"],
    description:
      "Assist with data preparation, SQL analysis, reporting, and communicating insights through clear dashboards and visualisations."
  },
  {
    id: "INT-105",
    title: "Cybersecurity Intern",
    publisher: "Security Operations Team",
    domain: "Cyber Security",
    mode: "Hybrid",
    location: "Chennai",
    stipend: "₹18,000–₹25,000/month",
    duration: "4 months",
    deadline: "2026-12-05",
    openings: 2,
    skills: ["Linux", "Networking", "Security Fundamentals"],
    description:
      "Learn security monitoring, network fundamentals, log analysis, and incident triage under the guidance of security professionals."
  },
  {
    id: "INT-106",
    title: "Digital Marketing Intern",
    publisher: "Growth and Marketing Team",
    domain: "Digital Marketing",
    mode: "Remote",
    location: "India",
    stipend: "₹10,000–₹18,000/month",
    duration: "3 months",
    deadline: "2026-11-18",
    openings: 2,
    skills: ["SEO", "Content Strategy", "Analytics"],
    description:
      "Assist with content planning, search optimisation, campaign reporting, and performance analysis across digital channels."
  },
  {
    id: "INT-107",
    title: "Python Developer Intern",
    publisher: "Software Development Team",
    domain: "Software Development",
    mode: "On-site",
    location: "Hyderabad",
    stipend: "₹20,000–₹30,000/month",
    duration: "6 months",
    deadline: "2026-12-10",
    openings: 3,
    skills: ["Python", "Git", "APIs", "Problem Solving"],
    description:
      "Contribute to Python applications, write reusable modules, troubleshoot defects, and participate in code reviews."
  },
  {
    id: "INT-108",
    title: "Cloud Engineering Intern",
    publisher: "Infrastructure Team",
    domain: "Cloud Computing",
    mode: "Hybrid",
    location: "Bengaluru",
    stipend: "₹22,000–₹35,000/month",
    duration: "6 months",
    deadline: "2026-12-15",
    openings: 2,
    skills: ["Linux", "Cloud Fundamentals", "Networking"],
    description:
      "Assist with cloud infrastructure, deployment workflows, monitoring, and documentation while learning modern infrastructure practices."
  },
  {
    id: "INT-109",
    title: "Business Analyst Intern",
    publisher: "Business Strategy Team",
    domain: "Business Analytics",
    mode: "On-site",
    location: "Mumbai",
    stipend: "₹15,000–₹24,000/month",
    duration: "4 months",
    deadline: "2026-11-28",
    openings: 1,
    skills: ["Excel", "Research", "Communication"],
    description:
      "Support business research, document requirements, analyse performance data, and prepare reports for stakeholders."
  }
];

/*
 * Publisher profile information is kept separate from internship records.
 * Replace these descriptions with verified information for each publisher.
 * Add an official website only after verifying its ownership.
 */

const publisherProfiles = {
  "Engineering Talent Team": {
    industry: "Software Engineering",
    overview:
      "The engineering organisation focuses on developing accessible digital products, maintaining code quality, and delivering reliable user experiences.",
    website: ""
  },
  "Platform Engineering Team": {
    industry: "Backend & Platform Engineering",
    overview:
      "The platform organisation works across server-side services, APIs, data access, reliability, and the infrastructure supporting digital applications.",
    website: ""
  },
  "Product Design Team": {
    industry: "Product Design & User Experience",
    overview:
      "The design organisation focuses on user research, interface design, usability, accessibility, and consistent product experiences.",
    website: ""
  },
  "Analytics Team": {
    industry: "Data & Analytics",
    overview:
      "The analytics organisation works with structured data, reporting, dashboards, and insights to support evidence-based decisions.",
    website: ""
  },
  "Security Operations Team": {
    industry: "Cybersecurity",
    overview:
      "The security organisation focuses on monitoring, threat analysis, incident response, and strengthening the security of digital systems.",
    website: ""
  },
  "Growth and Marketing Team": {
    industry: "Digital Marketing",
    overview:
      "The marketing organisation works across content strategy, search visibility, campaign analysis, and digital audience engagement.",
    website: ""
  },
  "Software Development Team": {
    industry: "Software Development",
    overview:
      "The software organisation develops applications, improves code quality, resolves technical issues, and maintains development workflows.",
    website: ""
  },
  "Infrastructure Team": {
    industry: "Cloud & Infrastructure",
    overview:
      "The infrastructure organisation focuses on cloud environments, deployment processes, system monitoring, and platform reliability.",
    website: ""
  },
  "Business Strategy Team": {
    industry: "Business & Strategy",
    overview:
      "The business organisation supports research, requirements analysis, performance reporting, and strategic decision-making.",
    website: ""
  }
};

const elements = {
  form: document.querySelector("#filter-form"),
  search: document.querySelector("#search-input"),
  domain: document.querySelector("#domain-filter"),
  mode: document.querySelector("#mode-filter"),
  sort: document.querySelector("#sort-filter"),
  grid: document.querySelector("#listing-grid"),
  count: document.querySelector("#results-count"),
  summary: document.querySelector("#filter-summary-text"),
  empty: document.querySelector("#empty-state"),
  error: document.querySelector("#error-state"),
  errorMessage: document.querySelector("#error-message"),
  loading: document.querySelector("#loading-state"),
  emptyReset: document.querySelector("#empty-reset"),
  retry: document.querySelector("#retry-button"),
  dialog: document.querySelector("#details-dialog"),
  dialogContent: document.querySelector("#dialog-content"),
  dialogClose: document.querySelector("#dialog-close"),
  toast: document.querySelector("#toast")
};

const state = {
  internships: [],
  isLoading: false,
  hasError: false
};

const publisherTones = ["purple", "green", "orange", "blue", "pink"];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function getInitials(name) {
  return String(name || "P")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word.charAt(0))
    .join("")
    .toUpperCase();
}

function getPublisherTone(index) {
  return publisherTones[index % publisherTones.length];
}

function getPublisherProfile(name) {
  return publisherProfiles[name] || {
    industry: "Professional Services",
    overview:
      "Contact this publisher through its verified official channels to learn more about its organisation and opportunities.",
    website: ""
  };
}

function normalizeInternship(record, index) {
  if (
    !record ||
    typeof record.title !== "string" ||
    typeof record.domain !== "string"
  ) {
    throw new Error("An internship record is missing required fields.");
  }

  return {
    id: String(record.id || `INT-${index + 1}`),
    title: record.title.trim(),
    publisher: String(record.publisher || "Publisher not specified"),
    domain: record.domain.trim(),
    mode: String(record.mode || "Not specified"),
    location: String(record.location || "Location not specified"),
    stipend: String(record.stipend || "Not specified"),
    duration: String(record.duration || "Not specified"),
    deadline: String(record.deadline || ""),
    openings: Number.isFinite(Number(record.openings))
      ? Math.max(0, Number(record.openings))
      : 0,
    skills: Array.isArray(record.skills)
      ? record.skills.filter(skill => typeof skill === "string")
      : [],
    description: String(
      record.description || "Contact the publisher for further details."
    ),
    applyUrl: typeof record.applyUrl === "string" ? record.applyUrl : ""
  };
}

async function loadInternships() {
  setLoading(true);
  state.hasError = false;
  elements.error.hidden = true;

  try {
    let records;

    if (API_ENDPOINT.trim()) {
      const response = await fetch(API_ENDPOINT, {
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      const payload = await response.json();
      records = Array.isArray(payload) ? payload : payload.internships;
    } else {
      records = internshipRecords;
    }

    if (!Array.isArray(records)) {
      throw new Error("The API response must contain an internship array.");
    }

    state.internships = records.map(normalizeInternship);
    populateDomainFilter();
    renderListings();
  } catch (error) {
    state.hasError = true;
    elements.grid.replaceChildren();
    elements.count.textContent = "Opportunities unavailable";
    elements.errorMessage.textContent =
      "Check your connection and try again. If the issue continues, contact support.";
    elements.error.hidden = false;
    elements.empty.hidden = true;

    console.error("Unable to load internships:", error);
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  state.isLoading = isLoading;
  elements.loading.hidden = !isLoading;
  elements.grid.setAttribute("aria-busy", String(isLoading));

  if (isLoading) {
    elements.empty.hidden = true;
    elements.error.hidden = true;
  }
}

function populateDomainFilter() {
  const previousValue = elements.domain.value;
  const domains = [...new Set(
    state.internships.map(item => item.domain).filter(Boolean)
  )].sort((a, b) => a.localeCompare(b));

  elements.domain.replaceChildren();

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All domains";
  elements.domain.append(allOption);

  for (const domain of domains) {
    const option = document.createElement("option");
    option.value = domain;
    option.textContent = domain;
    elements.domain.append(option);
  }

  elements.domain.value = domains.includes(previousValue)
    ? previousValue
    : "all";
}

function getFilteredInternships() {
  const query = elements.search.value.trim().toLowerCase();
  const selectedDomain = elements.domain.value;
  const selectedMode = elements.mode.value;
  const selectedSort = elements.sort.value;

  const filtered = state.internships.filter(item => {
    const searchable = [
      item.title,
      item.publisher,
      item.domain,
      item.mode,
      item.location,
      item.stipend,
      item.description,
      ...item.skills
    ].join(" ").toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (selectedDomain === "all" || item.domain === selectedDomain) &&
      (selectedMode === "all" || item.mode === selectedMode)
    );
  });

  filtered.sort((a, b) => {
    if (selectedSort === "openings") {
      return b.openings - a.openings || a.title.localeCompare(b.title);
    }

    if (selectedSort === "publisher") {
      return a.publisher.localeCompare(b.publisher);
    }

    return a.title.localeCompare(b.title);
  });

  return filtered;
}

function createInternshipCard(item, index) {
  const article = document.createElement("article");
  article.className = "internship-card";

  const skills = item.skills.length
    ? item.skills.slice(0, 4).map(skill =>
        `<span class="skill-chip">${escapeHTML(skill)}</span>`
      ).join("")
    : '<span class="skill-chip">Not specified</span>';

  article.innerHTML = `
    <div class="card-topline">
      <div class="publisher-avatar"
           data-tone="${getPublisherTone(index)}"
           aria-hidden="true">
        ${escapeHTML(getInitials(item.publisher))}
      </div>
      <span class="domain-tag">${escapeHTML(item.domain)}</span>
    </div>

    <h3 class="card-title">${escapeHTML(item.title)}</h3>
    <p class="publisher-name">${escapeHTML(item.publisher)}</p>

    <div class="card-metadata">
      <span class="metadata-item">
        <span class="metadata-icon" aria-hidden="true">⌖</span>
        ${escapeHTML(item.location)}
      </span>
      <span class="metadata-item">
        <span class="metadata-icon" aria-hidden="true">◷</span>
        ${escapeHTML(item.mode)}
      </span>
    </div>

    <div class="skills-list" aria-label="Relevant skills">
      ${skills}
    </div>

    <div class="card-footer">
      <span class="openings-label">
        <strong>${item.openings}</strong>
        ${item.openings === 1 ? "opening" : "openings"}
      </span>
      <button class="details-button" type="button"
              data-internship-id="${escapeHTML(item.id)}">
        View details <span aria-hidden="true">↗</span>
      </button>
    </div>
  `;

  return article;
}

function renderListings() {
  if (state.isLoading || state.hasError) return;

  const filtered = getFilteredInternships();
  const fragment = document.createDocumentFragment();

  filtered.forEach((item, index) => {
    fragment.append(createInternshipCard(item, index));
  });

  elements.grid.replaceChildren(fragment);

  elements.count.replaceChildren();
  const countStrong = document.createElement("strong");
  countStrong.textContent = String(filtered.length);
  elements.count.append(
    countStrong,
    document.createTextNode(
      ` ${filtered.length === 1 ? "opportunity" : "opportunities"} found`
    )
  );

  const hasFilters =
    elements.search.value.trim() ||
    elements.domain.value !== "all" ||
    elements.mode.value !== "all";

  elements.summary.textContent = hasFilters
    ? "Showing opportunities that match your filters."
    : "Browse available opportunities.";

  elements.empty.hidden = filtered.length !== 0;
  elements.error.hidden = true;
}

function isSafeExternalUrl(value) {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function formatDate(value) {
  if (!value) return "Not specified";

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) return "Not specified";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function showInternshipDetails(id) {
  const item = state.internships.find(record => record.id === id);

  if (!item) {
    showToast("This opportunity is no longer available.");
    return;
  }

  const publisher = getPublisherProfile(item.publisher);
  const validApplyUrl = isSafeExternalUrl(item.applyUrl);
  const validPublisherUrl = isSafeExternalUrl(publisher.website);

  const skills = item.skills.length
    ? item.skills.map(skill =>
        `<span class="skill-chip">${escapeHTML(skill)}</span>`
      ).join("")
    : '<span class="skill-chip">Not specified</span>';

  const publisherWebsite = validPublisherUrl
    ? `<a class="publisher-website"
          href="${escapeHTML(publisher.website)}"
          target="_blank" rel="noopener noreferrer">
          Visit official website ↗
       </a>`
    : "";

  elements.dialogContent.innerHTML = `
    <h2 class="dialog-role" id="dialog-title">
      ${escapeHTML(item.title)}
    </h2>
    <p class="dialog-publisher">
      Published by ${escapeHTML(item.publisher)}
    </p>

    <div class="dialog-meta-grid">
      <div class="dialog-meta">
        <span>Domain</span>
        <strong>${escapeHTML(item.domain)}</strong>
      </div>
      <div class="dialog-meta">
        <span>Work mode</span>
        <strong>${escapeHTML(item.mode)}</strong>
      </div>
      <div class="dialog-meta">
        <span>Location</span>
        <strong>${escapeHTML(item.location)}</strong>
      </div>
      <div class="dialog-meta">
        <span>Stipend</span>
        <strong>${escapeHTML(item.stipend)}</strong>
      </div>
      <div class="dialog-meta">
        <span>Duration</span>
        <strong>${escapeHTML(item.duration)}</strong>
      </div>
      <div class="dialog-meta">
        <span>Application deadline</span>
        <strong>${escapeHTML(formatDate(item.deadline))}</strong>
      </div>
      <div class="dialog-meta">
        <span>Openings</span>
        <strong>${item.openings}</strong>
      </div>
    </div>

    <h3 class="dialog-section-title">About this opportunity</h3>
    <p class="dialog-description">${escapeHTML(item.description)}</p>

    <h3 class="dialog-section-title">Skills and qualifications</h3>
    <div class="dialog-skills">${skills}</div>

    <h3 class="dialog-section-title">About the publisher</h3>
    <section class="publisher-profile" aria-label="Publisher information">
      <div class="publisher-avatar" data-tone="purple" aria-hidden="true">
        ${escapeHTML(getInitials(item.publisher))}
      </div>
      <div class="publisher-profile-content">
        <h3>${escapeHTML(item.publisher)}</h3>
        <span class="publisher-industry">
          ${escapeHTML(publisher.industry)}
        </span>
        <p>${escapeHTML(publisher.overview)}</p>
        ${publisherWebsite}
      </div>
    </section>

    ${
      validApplyUrl
        ? `<a class="primary-button dialog-apply"
             href="${escapeHTML(item.applyUrl)}"
             target="_blank" rel="noopener noreferrer">
             Apply for this internship ↗
           </a>`
        : `<p class="dialog-description">
             Application instructions are not currently available.
             Contact the publisher through its verified official channels.
           </p>`
    }
  `;

  if (!elements.dialog.open) {
    elements.dialog.showModal();
  }
}

function clearFilters() {
  elements.search.value = "";
  elements.domain.value = "all";
  elements.mode.value = "all";
  elements.sort.value = "title";
  renderListings();
  elements.search.focus();
}

let toastTimeout;

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.hidden = false;

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    elements.toast.hidden = true;
  }, 3200);
}

/* Live search and filtering */

elements.search.addEventListener("input", renderListings);
elements.domain.addEventListener("change", renderListings);
elements.mode.addEventListener("change", renderListings);
elements.sort.addEventListener("change", renderListings);

elements.form.addEventListener("submit", event => {
  event.preventDefault();
  renderListings();
});

elements.form.addEventListener("reset", () => {
  window.requestAnimationFrame(() => {
    renderListings();
  });
});

elements.emptyReset.addEventListener("click", clearFilters);
elements.retry.addEventListener("click", loadInternships);

/* Event delegation for listing details */

elements.grid.addEventListener("click", event => {
  const button = event.target.closest("[data-internship-id]");
  if (!button) return;

  showInternshipDetails(button.dataset.internshipId);
});

elements.dialogClose.addEventListener("click", () => {
  elements.dialog.close();
});

elements.dialog.addEventListener("click", event => {
  if (event.target === elements.dialog) {
    elements.dialog.close();
  }
});

/* Keyboard shortcut: / focuses the search field. */

document.addEventListener("keydown", event => {
  const target = event.target;
  const isTyping = target instanceof HTMLElement && (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );

  if (
    event.key === "/" &&
    !isTyping &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey
  ) {
    event.preventDefault();
    elements.search.focus();
  }
});

/* Initialize */

loadInternships();

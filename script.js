/* =========================================================
   AURA'26 WEBSITE — EDITABLE CONTENT
   =========================================================
   1) Replace GOOGLE_FORM_URL with your published Google Form URL.
   2) Edit event descriptions/rules below whenever needed.
   3) Edit GENERAL_RULES / PARTICIPATION_RULES when your final
      official rules are ready.
   ========================================================= */

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdAFv1JA7kPzM8hoWFm8qoCtGYBGGSaMhi81Zt0oecHAKtRlg/viewform?usp=publish-editor";

/* WhatsApp group links — paste the separate group link for each event. */
const WHATSAPP_GROUP_LINKS = {
  "CIRCUIT DEBUGGING": "https://chat.whatsapp.com/CAeg6KjZWMh6AFv0Aw1vEo?s=cl&p=a&ilr=1",
  "PAPER PRESENTATION": "https://chat.whatsapp.com/LsBvZV1v8bH9J8jE9GgrZk?s=cl&p=a&ilr=1",
  "QUIZ": "https://chat.whatsapp.com/C7cot5rXmKm8VVSghhBIH8?s=cl&p=a&ilr=1",
  "TECHQUEST": "https://chat.whatsapp.com/Cruhwaf2sdYK9LcW9G1FLH?s=cl&p=a&ilr=1",
  "POWER PLAY": "https://chat.whatsapp.com/HrqQTsOixH8DrxNOyNBquU?s=cl&p=a&ilr=1",
  "SQUID GAME": "https://chat.whatsapp.com/GhbLwzHj3nR9lBI7PcTrW7?s=cl&p=a&ilr=1",
  "TEAM FUSION": "https://chat.whatsapp.com/LOnxl5OPhIsG5AFcqifbWD?s=cl&p=a&ilr=1",
  "THE DETECTIVE CHRONICLES": "https://chat.whatsapp.com/B6oFA8V305gG8TtbN9DUcX?s=cl&p=a&ilr=1"
};

/* Optional social links — replace # with your official pages. */
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/techvox_.clique.__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  email: "mailto:aura26ece@gmail.com"
};

const EVENTS = {
  technical: [
    {
      title: "CIRCUIT DEBUGGING",
      team: "1 individual",
      about: "A hands-on troubleshooting challenge where participants identify faults, analyse circuit behaviour and arrive at the correct solution with precision",
      rounds: [
        {
          heading: "ROUND 1",
          items: [
            "The first round should like <strong>MCQ and fill in the blanks</strong>",
            "Total <strong>25 question</strong> each consists of <strong>2 marks</strong>",
            "The <strong>top 7 players</strong> should be entered to the final round"
          ]
        },
        {
          heading: "FINAL ROUND",
          items: [
            "A <strong>physical circuit</strong> with some errors should be given to each player's",
            "The player who find the error and fix it and make the <strong>circuit working</strong> is considered to be the winner.",
          ]
        },
        {
          heading: "GENERAL RULES",
          items: [
            "It is a individual event. Teams should not be allowed",
            "Mobile phone should not be permitted, but they can bring <strong>calculator</strong>.",
            "Player should not discuss their answers with other players.",
            "If any malpractice happened the player should be <strong>disqualified immediately</strong>."
          ]
        }
      ]
    },
    {
      title: "PAPER PRESENTATION",
      team: "1–3 Members",
      about: "A three-round paper presentation journey — from abstract submission to PPT evaluation to a final showdown before the judges.",
      rounds: [
        {
          heading: "ROUND 1 — ABSTRACT SUBMISSION",
          items: [
            "Submit a <strong>1–2 page abstract</strong> including Title, Participant Name(s), Team Name, Department, Year, Contact Number & E-mail ID.",
            "Team size: <strong>1–3 members</strong>.",
            "Include the Objective, Methodology & Expected Outcome.",
            "<strong>Hard copy preferred</strong>; PDF soft copy is accepted if hard copy is not feasible.",
            "Abstracts will be evaluated by the judges. Only shortlisted teams proceed to Round 2."
          ]
        },
        {
          heading: "ROUND 2 — PPT SUBMISSION",
          items: [
            "Shortlisted teams must submit their <strong>PPT before the deadline</strong>.",
            "PPT must contain <strong>10–12 slides</strong>.",
            "Presentations will be evaluated by the judges, who will select the finalists."
          ]
        },
        {
          heading: "ROUND 3 — FINAL PRESENTATION",
          items: [
            "<strong>Presentation:</strong> 5 minutes",
            "<strong>Q&A:</strong> 2 minutes",
            "Evaluation based on Technical Content, Innovation, Clarity, Presentation Skills & Q&A.",
            "Judges' decision is final."
          ]
        },
        {
          heading: "GENERAL",
          items: [
            "Follow the submission deadlines and prescribed format.",
            "Late or non-compliant submissions may not be considered."
          ]
        }
      ]
    },
    {
      title: "QUIZ",
      team: "1 individual",
      about: "A challenging technical quiz designed to test participants' knowledge, problem-solving ability and technical understanding across multiple rounds",
      rounds: [
        {
          heading: "ROUND 1",
          items: [
            "The first round consists of <strong>MCQ-based questions</strong>.",
            "Participants will be shortlisted based on their performance.",
            "Only the <strong>shortlisted participants</strong> will proceed to Round 2."
          ]
        },

        {
          heading: "ROUND 2",
          items: [
            "Shortlisted participants will face a <strong>new technical challenge</strong>.",
            "The challenge will test their <strong>technical knowledge and problem-solving skills</strong>.",
            "Top-performing participants will advance to the final round."
          ]
        },

        {
          heading: "ROUND 3",
          items: [
            "The <strong>top 8 participants</strong> will compete in the final round.",
            "The final round will be the <strong>most challenging</strong> stage of the event.",
            "The participant who performs the best will be declared the <strong>winner</strong>."
          ]
        },

        {
          heading: "GENERAL RULES",
          items: [
            "It is an <strong>individual event</strong>. Team participation is not allowed.",
            "The <strong>difficulty level increases</strong> with each round.",
            "Participants must follow the instructions given by the event coordinators.",
            "The <strong>judges' decision is final</strong>."
          ]
        }
      ]
    },
    {
      title: "TECHQUEST",
      team: "2 members",
      about: "Techquest is a technical detective event where participants use engineering knowledge, observation, logical thinking, and problem-solving skills to crack technical challenges through multiple rounds.",
      rounds: [
        {
          heading: "ROUND 1",
          items: [
            "<strong>Session 1 – Connection:</strong> Connect a series of images shown to identify the <strong>technical term</strong>."
          ]
        },

        {
          heading: "ROUND 2",
          items: [
            "<strong>Session 1 – Symbol Finder:</strong> One member draws a <strong>symbol</strong>, while the other identifies the term.",
            "<strong>Session 2 – Clue Finder:</strong> One member gives <strong>clues</strong> without saying the word, while the other guesses it."
          ]
        },

        {
          heading: "ROUND 3",
          items: [
            "<strong>Session 1 – Crossword Puzzle:</strong> Solve a crossword based on <strong>engineering technical terms</strong>.",
            "<strong>Session 2 – Engineering Market:</strong> Given a <strong>problem, budget and components catalog</strong>, select suitable components within the budget to solve the problem."
          ]
        },

        {
          heading: "GENERAL RULES",
          items: [
            "Each team should have <strong>2 members</strong>.",
            "Co-operate with the <strong>organizers</strong> throughout the event.",
            "Participants should bring their <strong>own pen</strong>.",
            "If found involved in <strong>malpractice</strong>, the team will be removed immediately.",
            "The <strong>judges' decision is final</strong>.",
            "The above rounds may be <strong>changed based on the number of participants and available time</strong>."
          ]
        }
      ]
    },
  ],
  nonTechnical: [
    {
      title: "POWER PLAY",
      team: "3 Members",
      about: "Build your dream franchise, read the room and make the smartest calls in a high-energy auction strategy battle.",
      rules: [
        "Each team consists of 3 members.",
        "Teams must follow the game procedure and budget rules announced by coordinators.",
        "All bidding decisions must be made within the permitted format.",
        "The decision of the event coordinators will be final."
      ]
    },
    {
      title: "SQUID GAME",
      team: "1 Individual",
      about: "A competitive survival-style challenge combining observation, strategy, decision-making and the ability to adapt under pressure.",
      rules: [
        "Participation is individual.",
        "Participants must follow every challenge instruction carefully.",
        "Any unsafe, disruptive or unfair conduct may lead to disqualification.",
        "The decision of the event coordinators will be final."
      ]
    },
    {
      title: "TEAM FUSION",
      team: "3 Members",
      about: "Team Fusion is a fun-filled, action-packed non-technical event featuring a variety of exciting team-based and coordination activities. Participants compete in different challenges involving balloons, cups, sticky notes, balls, paper, dumb charades, Chinese talk, memory games and more. Each activity is designed to encourage team coordination, communication, creativity, memory, quick thinking and friendly competition. Teams must work together, plan their moves and support each other to complete challenges and earn points. With a mix of fun, teamwork and exciting activities, Team Titans promises an entertaining experience for both participants and spectators. 🎈🤝🧠🏆",
      rules: [
        "Each team consists of 3 members.",
        "Rounds and question formats will be announced by the coordinators.",
        "Use of external assistance is not permitted.",
        "The decision of the event coordinators will be final."
      ]
    },
    {
      title: "THE DETECTIVE CHRONICLES",
      team: "3 Members",
      about: "Step into a mystery where clues, observation, logic and teamwork matter. Connect the evidence and crack the case.",
      rules: [
        "Each team consists of 3 members.",
        "Teams must work only with the clues and resources permitted by the coordinators.",
        "Tampering with clues or interfering with other teams is not allowed.",
        "The decision of the event coordinators will be final."
      ]
    }
  ]
};

const GENERAL_RULES = [
  "Participants must carry a valid college ID card and produce it whenever requested.",
  "Participants are expected to report to the venue and event desk as instructed by the organisers.",
  "Participants must maintain discipline and follow instructions given by event coordinators.",
  "Any form of malpractice, cheating, misconduct or deliberate disruption may lead to disqualification.",
  "Participants are responsible for their personal belongings; the organisers are not responsible for loss or damage.",
  "The organisers reserve the right to modify event procedures when required and will communicate any changes.",
  "The decision of the respective event coordinators/judges will be final."
];

const PARTICIPATION_RULES = [
  "Participants must register through the official AURA'26 registration form.",
  "Enter participant names, college details, contact information and team-member details accurately.",
  "Team events must be registered with the required number of members.",
  "Participants must follow the team size specified for each event.",
  "Participants must be present at the venue for verification before their event.",
  "Any participant found using unfair means may be disqualified from the concerned event.",
  "Certificates/prizes will be awarded according to the final eligibility and results announced by the organisers."
];

const $ = (selector) => document.querySelector(selector);

function renderEvents() {
  const tech = $("#technicalEvents");
  const nonTech = $("#nonTechnicalEvents");

  const makeCard = (event, index, category) => `
    <article class="event-card" tabindex="0" role="button"
      data-category="${category}" data-index="${index}" aria-label="Open details for ${event.title}">
      <div class="event-card-inner">
        <div class="event-card-face event-front">
          <div class="event-number">${String(index + 1).padStart(2, "0")} / ${category === "technical" ? "TECH" : "NON-TECH"}</div>
          <div class="event-icon">${category === "technical" ? "⌁" : "✦"}</div>
          <h3>${event.title}</h3>
          <div class="event-team">${event.team}</div>
          <a class="event-whatsapp"
             href="${WHATSAPP_GROUP_LINKS[event.title] || "#"}"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Join ${event.title} WhatsApp group"
             title="Join ${event.title} WhatsApp group"
             onclick="event.stopPropagation();">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <div class="event-arrow">↗</div>
          <span class="tap-hint">VIEW DETAILS <i>→</i></span>
        </div>
        <div class="event-card-face event-back">
          <div class="back-label">EVENT SNAPSHOT</div>
          <h3>${event.title}</h3>
          <p>${event.about}</p>
          <div class="back-meta"><span>TEAM SIZE</span><strong>${event.team}</strong></div>
          <span class="back-cta">CLICK FOR FULL DETAILS ↗</span>
        </div>
      </div>
    </article>
  `;

  tech.innerHTML = EVENTS.technical.map((e, i) => makeCard(e, i, "technical")).join("");
  nonTech.innerHTML = EVENTS.nonTechnical.map((e, i) => makeCard(e, i, "nonTechnical")).join("");

  document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => openEvent(card.dataset.category, Number(card.dataset.index)));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openEvent(card.dataset.category, Number(card.dataset.index));
      }
    });
  });
}

function openEvent(category, index) {
  const event = EVENTS[category][index];
  $("#modalCategory").textContent = category === "technical" ? "TECHNICAL EVENT" : "NON-TECHNICAL EVENT";
  $("#modalTitle").textContent = event.title;
  $("#modalTeam").textContent = event.team;
  $("#modalAbout").textContent = event.about;

  const whatsappBtn = $("#modalWhatsApp");
  const whatsappLink = WHATSAPP_GROUP_LINKS[event.title] || "";
  whatsappBtn.href = whatsappLink || "#";
  whatsappBtn.classList.toggle("is-disabled", !whatsappLink);
  whatsappBtn.onclick = (e) => {
    if (!whatsappLink) {
      e.preventDefault();
      alert("WhatsApp group link for this event is not configured yet.");
    }
  };

  const rulesHeading = $("#modalRulesHeading");
  const rulesList = $("#modalRules");
  const roundsWrap = $("#modalRounds");

  if (event.rounds) {
    /* Round-based structured content (e.g. Paper Presentation) */
    rulesHeading.textContent = event.title;
    rulesList.hidden = true;
    rulesList.innerHTML = "";
    roundsWrap.hidden = false;
    roundsWrap.innerHTML = event.rounds.map(round => `
      <div class="modal-round">
        <h4>${round.heading}</h4>
        <ul>${round.items.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    `).join("");
  } else {
    /* Default flat rules list */
    rulesHeading.textContent = "RULES";
    rulesList.hidden = false;
    rulesList.innerHTML = event.rules.map(rule => `<li>${rule}</li>`).join("");
    roundsWrap.hidden = true;
    roundsWrap.innerHTML = "";
  }

  openModal("eventModal");
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.dispatchEvent(new CustomEvent("aura:modaltoggle"));
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal.open")) document.body.classList.remove("modal-open");
  document.dispatchEvent(new CustomEvent("aura:modaltoggle"));
}

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", () => closeModal(el.dataset.close));
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") document.querySelectorAll(".modal.open").forEach(m => closeModal(m.id));
});

$("#openRegistration").addEventListener("click", () => window.open(GOOGLE_FORM_URL, "_blank", "noopener"));

$("#goToGoogleForm").addEventListener("click", () => {
  if (!GOOGLE_FORM_URL || GOOGLE_FORM_URL.includes("PASTE_YOUR")) {
    alert("Google Form link is not configured yet. Open script.js and replace GOOGLE_FORM_URL with your official Google Form link.");
    return;
  }
  window.open(GOOGLE_FORM_URL, "_blank", "noopener");
});

function countdown() {
  const target = new Date("2026-09-09T00:00:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  $("#days").textContent = String(days).padStart(2, "0");
  $("#hours").textContent = String(hours).padStart(2, "0");
  $("#minutes").textContent = String(minutes).padStart(2, "0");
  $("#seconds").textContent = String(seconds).padStart(2, "0");
}
countdown();
setInterval(countdown, 1000);

$("#generalRules").innerHTML = GENERAL_RULES.map(x => `<li>${x}</li>`).join("");
$("#participationRules").innerHTML = PARTICIPATION_RULES.map(x => `<li>${x}</li>`).join("");
renderEvents();

const menuBtn = $("#menuBtn");
const nav = $("#nav");
const navBackdrop = $("#navBackdrop");

function setNavOpen(open) {
  nav.classList.toggle("open", open);
  navBackdrop.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
  document.dispatchEvent(new CustomEvent("aura:modaltoggle"));
}

menuBtn.addEventListener("click", () => setNavOpen(!nav.classList.contains("open")));
navBackdrop.addEventListener("click", () => setNavOpen(false));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setNavOpen(false)));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && nav.classList.contains("open")) setNavOpen(false);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: .12 });

document.querySelectorAll(".section").forEach(s => observer.observe(s));

/* Apply social links from the editable config above. */
const socialMap = [
  ["instagram", SOCIAL_LINKS.instagram],
  ["email", SOCIAL_LINKS.email]
];
document.querySelectorAll(".social-link").forEach((el, i) => {
  if (socialMap[i]) el.href = socialMap[i][1];
});

/* =========================================================
   MOBILE-ONLY BEHAVIOUR
   All of the below only visibly change anything under the
   mobile CSS breakpoint (max-width:760px). On desktop the
   relevant elements are display:none or the toggled classes
   have no matching desktop CSS, so nothing here alters the
   desktop experience.
   ========================================================= */

/* --- Technical / Non-technical tabs (mobile event browsing) --- */
const eventTabs = $("#mobileEventTabs");
if (eventTabs) {
  const techPanel = $("#tech-panel");
  const nonTechPanel = $("#nontech-panel");
  const tabButtons = eventTabs.querySelectorAll(".tab-btn");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const showTech = btn.dataset.target === "tech-panel";
      techPanel.classList.toggle("tab-hidden", !showTech);
      nonTechPanel.classList.toggle("tab-hidden", showTech);
    });
  });
}

/* --- Rules accordion (mobile) --- */
document.querySelectorAll(".rules-block").forEach((block, i) => {
  const heading = block.querySelector("h3");
  if (!heading) return;
  heading.setAttribute("role", "button");
  heading.setAttribute("tabindex", "0");
  heading.setAttribute("aria-expanded", i === 0 ? "true" : "false");
  if (i !== 0) block.classList.add("collapsed");

  const toggle = () => {
    const collapsed = block.classList.toggle("collapsed");
    heading.setAttribute("aria-expanded", String(!collapsed));
  };
  heading.addEventListener("click", toggle);
  heading.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
});

/* --- Sticky mobile "REGISTER NOW" bar --- */
const stickyCta = $("#mobileStickyCta");
if (stickyCta) {
  const heroEl = $("#home");
  const registerEl = $("#register");
  const footerEl = document.querySelector("footer");
  let heroPast = false;
  let overSensitive = false;

  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { heroPast = !entry.isIntersecting; });
    updateSticky();
  }, { threshold: 0 });
  heroObserver.observe(heroEl);

  const sensitiveObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) overSensitive = true; });
    overSensitive = [registerEl, footerEl].some(el => el && isMostlyInView(el));
    updateSticky();
  }, { threshold: 0.15 });
  if (registerEl) sensitiveObserver.observe(registerEl);
  if (footerEl) sensitiveObserver.observe(footerEl);

  function isMostlyInView(el) {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.75 && r.bottom > 0;
  }

  function updateSticky() {
    const modalOpen = document.body.classList.contains("modal-open");
    const navOpen = document.body.classList.contains("nav-open");
    stickyCta.classList.toggle("visible", heroPast && !overSensitive && !modalOpen && !navOpen);
  }

  window.addEventListener("scroll", updateSticky, { passive: true });
  document.addEventListener("aura:modaltoggle", updateSticky);
  updateSticky();
}

/* --- Bottom-sheet swipe-to-dismiss (mobile) --- */
document.querySelectorAll(".modal-card").forEach(card => {
  const handle = card.querySelector(".sheet-handle");
  if (!handle) return;
  let startY = 0;
  let currentY = 0;
  let dragging = false;

  const isMobile = () => window.matchMedia("(max-width:760px)").matches;

  const onStart = e => {
    if (!isMobile() || card.scrollTop > 4) return;
    dragging = true;
    startY = (e.touches ? e.touches[0].clientY : e.clientY);
    card.style.transition = "none";
  };
  const onMove = e => {
    if (!dragging) return;
    currentY = (e.touches ? e.touches[0].clientY : e.clientY) - startY;
    if (currentY > 0) card.style.transform = `translateY(${currentY}px)`;
  };
  const onEnd = () => {
    if (!dragging) return;
    dragging = false;
    card.style.transition = "";
    if (currentY > 110) {
      const modal = card.closest(".modal");
      if (modal) closeModal(modal.id);
    }
    card.style.transform = "";
    currentY = 0;
  };

  handle.addEventListener("touchstart", onStart, { passive: true });
  handle.addEventListener("touchmove", onMove, { passive: true });
  handle.addEventListener("touchend", onEnd);
  handle.addEventListener("mousedown", onStart);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onEnd);
});

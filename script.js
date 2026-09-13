document.getElementById("year").textContent = new Date().getFullYear();

// Keep the hero portrait on a stable filename tied to the original image blob.
const heroPortrait = document.querySelector(".hero-image-card img");
if (heroPortrait) {
  heroPortrait.src = "assets/martell-original.png?v=15";
  heroPortrait.alt = "Martell Collins";
  heroPortrait.decoding = "async";
  heroPortrait.fetchPriority = "high";
  heroPortrait.onerror = function () {
    this.onerror = null;
    this.src = "https://raw.githubusercontent.com/martellgreatness-glitch/biosite/main/assets/7c474f91-594a-48af-9d3e-9494931720ce.png";
  };
}

// Add the self-paced Own Your Block Starter Kit to the existing services grid.
const serviceGrid = document.querySelector("#services .service-grid");
if (serviceGrid) {
  const starterKit = document.createElement("article");
  starterKit.className = "service-card";
  starterKit.innerHTML = `
    <div class="service-top">
      <span class="pill">Residents · Self-Paced Digital Course</span>
      <span class="price">$50</span>
    </div>
    <h3>Own Your Block Starter Kit</h3>
    <p>A beginner-friendly, self-paced Build Where You Live course for residents ready to understand the first steps of turning vacant land into a responsible community asset.</p>
    <ul>
      <li>3 foundational vacant-land modules</li>
      <li>Project Vision Worksheet</li>
      <li>Lot Research Checklist</li>
      <li>Chicago-specific research resources and action steps</li>
    </ul>
    <div class="service-meta"><span>Self-paced</span><span>Instant access after payment</span></div>
    <a class="text-link" href="https://buy.stripe.com/28E9AT79o77z3vBgwlasg04" target="_blank" rel="noopener">Purchase Starter Kit →</a>
  `;

  const oneToOneCard = Array.from(serviceGrid.children).find(card =>
    card.textContent.includes("Own Your Block — 1:1")
  );
  if (oneToOneCard) serviceGrid.insertBefore(starterKit, oneToOneCard);
  else serviceGrid.appendChild(starterKit);
}

// Speaking engagements now begin with intake, then move to the planning call.
const speakingRequestUrl = "speaking-engagement.html";
const speakingCard = Array.from(document.querySelectorAll("#services .service-card")).find(card =>
  card.textContent.includes("Keynotes & Interactive Workshops")
);
if (speakingCard) {
  const links = speakingCard.querySelectorAll("a.text-link");
  if (links[0]) {
    links[0].href = speakingRequestUrl;
    links[0].target = "_self";
    links[0].removeAttribute("rel");
    links[0].textContent = "Request a Speaking Engagement →";
  }
  if (links[1]) {
    links[1].href = speakingRequestUrl;
    links[1].target = "_self";
    links[1].removeAttribute("rel");
    links[1].textContent = "Start with the intake →";
  }
}

// Replace public speaking-planning-call links with the intake-first request flow.
document.querySelectorAll('a[href="https://calendly.com/martellgreatness/speaking-workshop-planning-call"]').forEach(link => {
  link.href = speakingRequestUrl;
  link.target = "_self";
  link.removeAttribute("rel");
  if (link.textContent.includes("Schedule")) link.textContent = "Request a Speaking Engagement";
});

// GitHub Pages is static. Connect the general contact form in index.html to a hosted form endpoint before launch.
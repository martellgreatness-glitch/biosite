document.getElementById("year").textContent = new Date().getFullYear();

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

  // Place it directly before the personalized Own Your Block 1:1 offer.
  const oneToOneCard = Array.from(serviceGrid.children).find(card =>
    card.textContent.includes("Own Your Block — 1:1")
  );
  if (oneToOneCard) serviceGrid.insertBefore(starterKit, oneToOneCard);
  else serviceGrid.appendChild(starterKit);
}

// GitHub Pages is static. Connect the general contact form in index.html to a hosted form endpoint before launch.
// js/app.js

// GSAP initialization

// DOM Elements
const smoothieCup = document.getElementById("smoothie-cup");
const flavorLabel = document.getElementById("flavor-label");
const flavorButtons = document.querySelectorAll(".flavor-icon-btn");
const resetButton = document.getElementById("reset-btn");
const body = document.body;
const smoothiePrice = document.getElementById("smoothie-price");
const addToCartBtn = document.getElementById("add-to-cart-btn");

// Image Paths (relative to index.html)
const imagePaths = {
  empty: "public/images/empty_cup.png",
  strawberry: "public/images/strawberry_cup.png",
  blueberry: "public/images/blueberry_cup.png",
  mango: "public/images/mango_cup.png",
  banana: "public/images/banana_cup.png",
};

// Smoothie Prices
const smoothiePrices = {
  strawberry: 5.99,
  blueberry: 6.49,
  mango: 6.99,
  banana: 5.49,
  empty: 0.0, // For the initial empty cup state
};

// Flavor specific accent colors/gradients
const flavorAccents = {
  neutral: {
    gradientStart: "var(--color-neutral-gradient-start)",
    gradientEnd: "var(--color-neutral-gradient-end)",
  },
  strawberry: {
    gradientStart: "var(--color-strawberry-gradient-start)",
    gradientEnd: "var(--color-strawberry-gradient-end)",
  },
  blueberry: {
    gradientStart: "var(--color-blueberry-gradient-start)",
    gradientEnd: "var(--color-blueberry-gradient-end)",
  },
  mango: {
    gradientStart: "var(--color-mango-gradient-start)",
    gradientEnd: "var(--color-mango-gradient-end)",
  },
  banana: {
    gradientStart: "var(--color-banana-gradient-start)",
    gradientEnd: "var(--color-banana-gradient-end)",
  },
};

let isAnimating = false; // Debounce flag

// Function to update smoothie based on flavor
function updateSmoothie(flavor) {
  if (isAnimating) return; // Prevent rapid clicks
  isAnimating = true;

  const currentAccent = flavorAccents[flavor];

  // GSAP Timeline for flavor change
  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    },
  });

  // 1. Theme transition (background gradient)
  tl.to(
    body,
    {
      background: `linear-gradient(135deg, ${currentAccent.gradientStart}, ${currentAccent.gradientEnd})`,
      duration: 0.8,
      ease: "power2.inOut",
    },
    0,
  ); // Start at the beginning of the timeline

  // 2. Cup fill & swap with cross-fade and shake
  tl.to(smoothieCup, { opacity: 0, duration: 0.2, ease: "power1.out" }, 0) // Fade out current cup
    .set(smoothieCup, {
      attr: { src: imagePaths[flavor], alt: `${flavor} Smoothie Cup` },
    }) // Swap src instantly
    .to(smoothieCup, { opacity: 1, duration: 0.3, ease: "power1.in" }, 0.2); // Fade in new cup

  // Cup shake animation
  tl.to(
    smoothieCup,
    {
      x: -5,
      rotation: -2,
      duration: 0.1,
      ease: "power1.out",
    },
    0.2,
  ) // Start shake after fade out begins
    .to(smoothieCup, {
      x: 5,
      rotation: 2,
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(smoothieCup, {
      x: -5,
      rotation: -2,
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(smoothieCup, {
      x: 0,
      rotation: 0,
      duration: 0.1,
      ease: "power1.out",
    });

  // 3. Vertical flavor text reveal
  flavorLabel.textContent = flavor.toUpperCase();
  smoothiePrice.textContent = `$${smoothiePrices[flavor].toFixed(2)}`;
  tl.fromTo(
    flavorLabel,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.45,
      ease: "power2.out",
    },
    0.3,
  ); // Start text animation slightly after cup swap
}

// Function to reset smoothie builder
function resetSmoothie() {
  if (isAnimating) return; // Prevent rapid clicks
  isAnimating = true;

  // GSAP Timeline for reset
  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    },
  });

  // Reset theme to neutral
  tl.to(
    body,
    {
      background: `linear-gradient(135deg, ${flavorAccents.neutral.gradientStart}, ${flavorAccents.neutral.gradientEnd})`,
      duration: 0.8,
      ease: "power2.inOut",
    },
    0,
  );

  // Fade out flavor text
  tl.to(flavorLabel, { opacity: 0, duration: 0.3, ease: "power1.out" }, 0);

  // Change cup back to empty with cross-fade
  tl.to(smoothieCup, { opacity: 0, duration: 0.2, ease: "power1.out" }, 0.2) // Fade out current cup
    .set(smoothieCup, {
      attr: { src: imagePaths.empty, alt: "Empty Smoothie Cup" },
    }) // Swap src instantly
    .to(smoothieCup, { opacity: 1, duration: 0.3, ease: "power1.in" }, 0.4); // Fade in empty cup

  // Ensure cup is not shaking after reset
  gsap.to(smoothieCup, { x: 0, rotation: 0, duration: 0.1 });
  smoothiePrice.textContent = `$${smoothiePrices.empty.toFixed(2)}`;
}

// Event Listeners
flavorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateSmoothie(button.dataset.flavor);
  });
  // Accessibility: keyboard support
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      updateSmoothie(button.dataset.flavor);
    }
  });
});

resetButton.addEventListener("click", resetSmoothie);
// Accessibility: keyboard support
resetButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    resetSmoothie();
  }
});

addToCartBtn.addEventListener("click", () => {
  const currentFlavor = smoothieCup.alt.split(" ")[0].toLowerCase();
  if (currentFlavor !== "empty") {
    alert(
      `Added ${currentFlavor} smoothie to cart for $${smoothiePrices[currentFlavor].toFixed(2)}!`,
    );
  } else {
    alert("Please select a smoothie flavor first!");
  }
});

// Initial state: ensure flavor label is hidden
gsap.set(flavorLabel, { opacity: 0 });

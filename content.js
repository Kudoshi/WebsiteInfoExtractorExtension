// Store globally
window.priceDescHistory = window.priceDescHistory || [];

(() => {
  const priceElement = document.querySelector(".IZPeQz.B67UQ0");
  const price = priceElement?.innerText || "❌ Price not found";

  const descParent = document.querySelector(".e8lZp3");
  let descriptions = "❌ No descriptions found";

  if (descParent) {
    const nestedDivs = descParent.querySelectorAll("p");

    descriptions = Array.from(nestedDivs)
      .map((el) => el.innerText.trim())
      .filter((text) => text.length > 0)
      .join("\n• ");
  }

  // Add to global array
  window.priceDescHistory.push({
    price,
    description: descriptions
  });

  console.log("📦 Stored:", window.priceDescHistory);

  alert(`📝 Price:\n${price}\n\n🧩 Description:\n• ${descriptions}`);
  navigator.clipboard.writeText(`📝 Price:\n${price}\n\n🧩 Description:\n• ${descriptions}`);
})();

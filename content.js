// Store globally
window.priceDescHistory = window.priceDescHistory || [];

(() => {
  ////////////////////////////
  // Change this priceElement and descParent here to the html class that you want to copy
  // Currently code is used to copy for Shopee website price and description

  const priceElement = document.querySelector(".IZPeQz.B67UQ0");
  const descParent = document.querySelector(".e8lZp3");
  ///////////////////////////
  
  const price = priceElement?.innerText || "❌ Price not found";
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

  const textToCopy = `📝 Price:\n${price}\n\n🧩 Description:\n• ${descriptions}`;
  alert(textToCopy);


  // Try modern API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).catch(err => {
      console.warn("Clipboard API failed, using fallback:", err);

      // Fallback for older/blocked environments
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      textarea.style.position = "fixed"; // avoid scrolling to bottom
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    });
  } else {
    // Directly fallback if API isn’t available
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
})();

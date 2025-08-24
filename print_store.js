(() => {
    const history = window.priceDescHistory;
  
    if (!history || history.length === 0) {
      alert("🫥 No price-description history found.");
      console.log("❌ No history stored.");
      return;
    }
  
    // Format output
    const formatted = history.map((item, index) => {
      return `#${index + 1}\n💰 Price: ${item.price}\n📄 Description:\n• ${item.description}`;
    }).join("\n\n-----------------------------\n\n");
  
    // Show in alert + console
    alert(`🗂️ Price/Description History (${history.length} items):\n\n${formatted}`);
    console.log("📦 Full priceDescHistory:\n", history);

    const textToCopy = `Items: ${history}`;

  // Try modern Clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).catch(err => {
      console.warn("Clipboard API failed, using fallback:", err);

      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      textarea.style.position = "fixed"; // prevent scrolling
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    });
  } else {
    // Direct fallback if Clipboard API isn’t available
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
  
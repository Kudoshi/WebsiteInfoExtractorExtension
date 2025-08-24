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

    navigator.clipboard.writeText(`Items: ${history}`);

  })();
  
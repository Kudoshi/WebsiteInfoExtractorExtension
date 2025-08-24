chrome.commands.onCommand.addListener((command) => {
    if (command === "grab-info") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (tab?.id) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
          });
        }
      });
    }

    if (command === "print-info")
    {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["print_store.js"]
          });
    }
  });
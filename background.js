chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "extract-component",
    title: "Extract Storybook Component",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "extract-component") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});

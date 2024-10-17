// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'add-dev-cookie' || request.action === 'add-stg-cookie') {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];

      // Check if the URL of the active tab is a valid HTTP/HTTPS URL
      if (activeTab && activeTab.url.startsWith('http')) {
        // Use if-else to decide which function to execute
        if (request.action === 'add-dev-cookie') {
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: addDevCookie
          });
        } else if (request.action === 'add-stg-cookie') {
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: addStgCookie
          });
        }
      } else {
        console.warn('Cannot execute script on this URL:', activeTab.url);
      }
    });
  }
});


function addDevCookie() {
  const cookies = [

  ];

  cookies.forEach(cookie => {
    document.cookie = `${cookie.name}=${cookie.value}; path=${cookie.path}`;
    console.log(`Cookie added: ${cookie.name}=${cookie.value}`);
  });

  // Trigger a page reload
  window.location.reload();

}

function addStgCookie() {
  const cookies = [

  ];

  cookies.forEach(cookie => {
    document.cookie = `${cookie.name}=${cookie.value}; path=${cookie.path}`;
    console.log(`Cookie added: ${cookie.name}=${cookie.value}`);
  });

  // Trigger a page reload
  window.location.reload();

}

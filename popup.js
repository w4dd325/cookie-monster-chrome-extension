document.addEventListener('DOMContentLoaded', () => {
  const addDevCookieButton = document.getElementById('add-dev-cookie');
  const addStgCookieButton = document.getElementById('add-stg-cookie');

  // Add event listener for the "Add Dev Cookie" button
  addDevCookieButton.addEventListener('click', () => {
    // Send a message to background script to add the development cookie
    chrome.runtime.sendMessage({ action: 'add-dev-cookie' });
  });

  // Add event listener for the "Add Stg Cookie" button
  addStgCookieButton.addEventListener('click', () => {
    // Send a message to background script to add the staging cookie
    chrome.runtime.sendMessage({ action: 'add-stg-cookie' });
  });
});

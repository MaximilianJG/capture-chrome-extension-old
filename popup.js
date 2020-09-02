const listenClick = () => {
  const button = document.getElementById('capture-this-btn');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/find-selected-text.js'
    });
    window.close()
  })
}

listenClick()

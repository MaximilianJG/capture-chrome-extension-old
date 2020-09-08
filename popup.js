const listenClick = () => {
  const button = document.getElementById('capture-this-btn');
  button.addEventListener('click', () => {

    chrome.tabs.executeScript({
      file: 'scripts/find-send-data.js'
    })
    chrome.tabs.executeScript({
      file: 'scripts/highlight-text.js'
    });
    window.close();
  })
}

listenClick()

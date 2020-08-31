console.log("Chrome Extension go!")

window.addEventListener('mouseup', selectText)

function selectText() {
  selectedText = window.getSelection().toString();
  console.log(selectedText)
}

// chrome.browserAction.onClicked.addListener((tab) => {
//   chrome.tabs.executeScript({
//     code:`
//   function selectText() {
//     const selectedText = window.getSelection().toString();
//     console.log(selectedText)
//   }

//   selectText()`
//   });
// });




// const hello = () => {
//   console.log("hello")
// }

const cookie = chrome.cookies.getAll({"domain": "localhost"}, function (cookies) { console.log(cookies[0]) })


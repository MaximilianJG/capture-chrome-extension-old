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

// chrome.browserAction.onClicked.addListener(getCookie)

// function getCookie() {
//   console.log("hello")
//   const cookie = chrome.cookies.getAll({"domain": "localhost", "name": "_capture_session"}, function (cookies) { console.log(cookies[0]) })
// }


// function getCookie() {
//   const cookie = chrome.cookies.getAll({"domain": "localhost", "name": "_capture_session"}, function (cookies) { chrome.runtime.sendMessage(cookies[0]) })

// }

// function getCookie() {
//   const cookie = chrome.cookies.getAll({"domain": "capture-maximilianjg.herokuapp.com", "name": "_capture_session"}, function (cookies) { chrome.runtime.sendMessage(cookies[0]) })
// }

function getCookie() {
  const cookie = chrome.cookies.getAll({"domain": "localhost", "name": "capture_user_id"}, function (cookies) { chrome.runtime.sendMessage(cookies[0]) })
}

// function getCookie() {
//   const cookie = chrome.cookies.getAll({"domain": "capture-maximilianjg.herokuapp.com", "name": "capture_user_id"}, function (cookies) { chrome.runtime.sendMessage(cookies[0]) })
// }

// chrome.runtime.onMessage.addListener((message, sender, reply) => {
//   const cookie = chrome.cookies.getAll({"domain": "localhost", "name": "_capture_session"}, function (cookies) { console.log(cookies[0]) })
// });

// export { cookie }


// chrome.runtime.sendMessage({cookie: cookie})
//
// const current_tab = chrome.tabs.getCurrent()
// console.log(current_tab)
// chrome.tabs.sendMessage(Tab.id, cookie)

  // const url_of_quote = window.location.href


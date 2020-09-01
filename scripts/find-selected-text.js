function fetchData() {
  const selectedText = window.getSelection().toString();
  const url_of_quote = window.location.href
  const title = document.querySelector("h1").innerText
  const website = window.location.hostname
  const url_of_website = url_of_quote

  return {
    content: selectedText,
    url_of_quote: url_of_quote,
    title: title,
    website: website,
    url_of_website: url_of_website
  }
}

console.log(fetchData())

function sendData(data) {
  const url = 'http://localhost:3000/api/v1/quotes'

  const params = {
    quote: {
      content: data.content,
      url_of_quote: data.url_of_quote,
    },
    source: {
      title: data.title,
      website: data.website,
      url_of_website: data.url_of_website
    }
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  }

  console.log(params)

  fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
}

sendData(fetchData());

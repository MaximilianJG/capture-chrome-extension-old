function fetchData() {
  const selectedText = window.getSelection().toString();
  const url_of_quote = window.location.href
  const title = document.querySelector("h1").innerText
  const website = window.location.hostname
  const url_of_website = url_of_quote
// Todo: 1. Get the Date, 2. Get the Author, 3. Find a solution for Favicons
  return {
    content: selectedText,
    url_of_quote: url_of_quote,
    title: title,
    website: website,
    url_of_website: url_of_website
  }
}

console.log(fetchData())

function sendData (data) {
  const url = 'https://capture-maximilianjg.herokuapp.com/api/v1/quotes'

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


// Highlight

function makeEditableAndHighlight(colour) {
    var range, sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour);
    }
    document.designMode = "off";
}

function highlight(colour) {
    var range, sel;
    if (window.getSelection) {
        // IE9 and non-IE
        try {
            if (!document.execCommand("BackColor", false, colour)) {
                makeEditableAndHighlight(colour);
            }
        } catch (ex) {
            makeEditableAndHighlight(colour)
        }
    } else if (document.selection && document.selection.createRange) {
        // IE <= 8 case
        range = document.selection.createRange();
        range.execCommand("BackColor", false, colour);
    }
}

highlight('#FEFF05');

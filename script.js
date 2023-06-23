const quotesDiv = document.getElementById("quotes");
const authorDiv = document.querySelector(".author");

async function generateQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    quotesDiv.textContent = `"${data.content}"`;
    authorDiv.textContent = `- ${data.author}`;
  } catch (err) {
    alert(err.message);
  }
}

function handleEvent() {
  const searchTerm = document.getElementById("sBar").value; 
  if (searchTerm === "") {
    alert("Please enter name of the article you would like to access into the search box.");
    return;
  } 
  const api = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${searchTerm}&limit=8`; 
  fetch(api)
    .then(response => response.json())
    .then(data => {
      if (data[1].length === 0) {
        alert("No results found for search item.");
      }
      const title = data[1].slice(0), description = data[2].slice(0), link = data[3].slice(0);
      const list = `<ul>${title.map((item, index) => `<li><a href="${link[index]}" target="_blank">${item}</a><p>${description[index]}</p></li>`).join("")}</ul>`;
      const outputSection = document.getElementById("outputSection");
      outputSection.innerHTML = list;
    }).catch(() => {
      alert("Data failed to load, please try again.");
    });
}

const body = document.querySelector("body");
body.addEventListener("keypress", event => {
  if (event.charCode === 13) {
    handleEvent();
  }
});

const button0 = document.getElementById("button0");
button0.addEventListener("click", handleEvent);

const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
  const randomArticle = "https://en.wikipedia.org/wiki/Special:Random";
  window.open(randomArticle); 
});
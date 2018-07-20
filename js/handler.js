function getResult() {
  var url = 'https://api.github.com/users/' + document.forms["search-form"].elements.name.value;
  var arr = [32];
  fetch(url)
    .then(response => response.json())
    .then(data => result.innerHTML = Object.keys(data).map(k => {
      return `${k}: ${data[k]}<br>`
    }).join(''));
}
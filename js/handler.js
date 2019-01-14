function getResult() {
  let url = 'https://api.github.com/users/' + document.forms["search-form"].elements.name.value;
  let login = "";
  fetch(url)
    .then(response => response.json())
    .then(data => result.innerHTML = Object.keys(data).map(k => {
      if (k == "login") {
      login = data[k];
        return `<b>Login:</b> ${data[k]}<br>`;
      }
      if (k == "avatar_url" && k != "null") {
        return `<br><img src = "${data[k]}" height="200px;"><br><br>`;
      }
      if (k == "repos_url") {
        return `<b>Repositories:</b> <a href="http://github.com/` + login + `/?tab=repositories">open</a><br>`;
      }
      if (k == "name" && data[k] != null) {
        return `<b>Name:</b> ${data[k]}<br>`;
      }
      if(k == "company" &&  data[k] != null) {
        return `<b>Company:</b> ${data[k]}<br>`;
      }
      if(k == "log" &&  data[k] != null) {
        return `<b>Blog:</b> ${data[k]}<br>`;
      }
      if(k == "location" &&  data[k] != null) {
        return `<b>Location:</b> ${data[k]}<br>`;
      }
      if(k == "bio" &&  data[k] != null) {
        return `<b>Info:</b><br> ${data[k]}<br>`;
      }
      if(k == "email" &&  data[k] != null) {
        return `<b>E-mail:</b> ${data[k]}<br>`;
      }
    }).join(''));
}

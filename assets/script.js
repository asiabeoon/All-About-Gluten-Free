var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      // if the response status fails, then a failed message will appear
      else{
        responseText.textContent = "failed (" + response.status + ")";
      }
      return response.json();
  });
}

getApi(requestUrl);

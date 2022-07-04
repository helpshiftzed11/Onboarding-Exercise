var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic emVlc2hhbi1kZW1vX2FwaV8yMDIyMDYwNzA0MTcxMzg0Ny1iZjBjZDhiOWNhZjFlMzM6");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://analytics.helpshift.com/v1/zeeshan-demo/analytics/issue/?app_id=zeeshan-demo_platform_20220607213907919-78205a21a9e5402&from=2022-06-20T13%3A30%3A00&to=2022-06-25T13%3A30%3A00", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
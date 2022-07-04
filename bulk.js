var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic emVlc2hhbi1kZW1vX2FwaV8yMDIyMDYwNzA0MTcxMzg0Ny1iZjBjZDhiOWNhZjFlMzM6");

var formdata = new FormData();
formdata.append("email", "zeeshan.kolhapurwala@helpshift.com");
formdata.append("message-body", "It's time to create bulk issues");
formdata.append['{"bulkissuenew": {"type":"dropdown", "value": "Yes"}}'];
formdata.append("author-name", "Zeeshan Kolhapurwala");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function bulkIssue() {

     for(let i=1;i<=10;i++){
     fetch("https://api.helpshift.com/v1/zeeshan-demo/issues", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));    

       await sleep(2000);
       }
   }
   
 bulkIssue();
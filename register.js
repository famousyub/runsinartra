

function register(){

var t={"@ngrx/store": "^13.0.2",  "@angular/cdk": "^13.2.2",  "@angular/material": "^13.2.2",};
 
/*var data = new FormData();
data.append("server_key", "d1283b82c0fd79aabbe18003dcc51adb");
data.append("username", "admin222");
data.append("password", "12345678");
data.append("email", "fdsfdsffdf@dfsfds.com");
data.append("confirm_password", "12345678");
data.append("ref", "admin");
data.append("device_type", "windows");
*/
var form = new FormData();
  form.append("username", $("#username").val());
form.append("password", $("#password").val());
form.append("email", $("#email").val());
form.append("name", $("#name").val());
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
const URL ="http://localhost:8092/api/auth/signup";
xhr.addEventListener("readystatechange", function() {

  console.log(this.readyState);
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", URL);
//xhr.open("")
xhr.send(form);
}

/*var action = $(this).attr("action"); JSON.stringify(
$(document).ready(function(){
  $("#ajaxForm").submit(function(e){
  e.preventDefault();
  var form = new FormData();
  form.append("username", $("#username").val());
form.append("password", $("#password").val());
form.append("email", $("#email").val());
form.append("name", $("#name").val());
  
  var data = {};
  const URL ="http://localhost:8092/api/auth/signup";
  alert($("#name").val());


   $.ajax({
    type: "POST",
    url: URL,
    data: JSON.stringify({
          username :$("#username").val(),
          name :$("#name").val() ,
          password :$("#password").val(),
          email :$("#email").val()
    }),
    dataType: "json",
     contentType: "application/json; charset=utf-8",
    success: function (json) {
        //Do something with the returned json object.

        console.log(json);
    },
    error: function (xhr, status, errorThrown) {
        //Here the status code can be retrieved like;
        xhr.status;

        //The message added to Response object in Controller can be retrieved as following.
        xhr.responseText;
    }
});
*/

  //$(this).serializeArray().map(function(x){data[x.name] = x.value;}); JSON.stringify(),
  /*$.ajax({
    type: "POST",
    url: "http://localhost:8092/api/auth/signup",
    data: form,
    contentType: "application/json",
    headers: {
      "Accept": "application/json"
    }
  }).done(function(response) {

    console.log(response);

    // $('.success').addClass('is-active');
  }).fail(function(error) {
     alert('An error occurred please try again later.');
     console.log("error");
  });*/
//});

//})


/*

$(document).ready(function(){
$('#login-button').on('click', function() {
alert("jquery works");
      var form = new FormData();
//form.append("server_key", "d1283b82c0fd79aabbe18003dcc51adb");
form.append("username", $("#username").val());
form.append("password", $("#password").val());
form.append("email", $("#email").val());
form.append("name", $("#name").val());
//form.append("ref", "admin");
//form.append("device_type", "windows");
alert($("#name").val());
var settings = {
  "url": "http://localhost:8092/api/auth/signup",
  "method": "POST",
  //"timeout": 0,
  //"processData": false,

  //"mimeType": "multipart/form-data",
  "contentType": "application/json",
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
 });

});

table {
  width: 750px;
  border-collapse: collapse;
  margin:50px auto;
  }

/* Zebra striping */
tr:nth-of-type(odd) {
  background: #eee;
  }

th {
  background: #3498db;
  color: white;
  font-weight: bold;
  }

td, th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
  }

/*
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

  table {
      width: 100%;
  }

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr { border: 1px solid #ccc; }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    /* Label the data */
    content: attr(data-column);

    color: #000;
    font-weight: bold;
  }

}

*/
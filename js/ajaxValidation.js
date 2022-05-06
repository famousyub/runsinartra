function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 
  if (reg.test(emailField.value) == false) 
  {
    $("#message").html("<li>Invalid Email Address</li>");
    return false;
  }
  $("#message").html("");
    return true;
}
 
$(document).ready(function(){

  $("#checkValidation").click(function(){





 var form = new FormData();
//form.append("server_key", "5119e950c9496e9ee5e80bbf2a411160");
var username = $("#userEmail").val().trim();
 var password = $("#userPassword").val().trim();
form.append("username", username);
form.append("password", password);

/*var settings = {
  "url": "http://localhost:8080/login",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});*/

var xhr = new XMLHttpRequest();
if ('withCredentials' in xhr) {
 xhr.withCredentials = true;
}

//xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:8080/login");

xhr.send(form);
  	});
});
    /*
    alert(username);
    alert(password);
     var json_memberInfo = `{ 
              username: "`+username+`",
            password: "`+password+`"
           
            
        }`;

     var parse_memberInfo = JSON.parse(json_memberInfo);
          const data = { username: username , password : password};
          console.table(data);
        alert(data);
    $.ajax({
      url:'http://localhost:8080/login',
      type:'post',
      data:data,
      contentType: "application/json",
      //contentType: "application/json",
      dataType: "json",
      //JSON.parse({"username":username,"password":password}),
      success:function(response){
        $("#message").html(response);
      }
    });
  });
});
*/
	function login(){

		const username = document.getElementById("username");

			const password = document.getElementById("password");




		const data = { username: username , password : password};

//POST request with body equal on data in JSON format


fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
//Then with the data from the response in JSON...
.then((data) => {
  console.log('Success:', data);
})
//Then with the error genereted...
.catch((error) => {
  console.error('Error:', error);
});

	}
	

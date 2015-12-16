function statusChangeCallback(response) {
  console.log('statusChangeCallback: ' + response.status);
  if (response.status === 'connected') {
    console.log("Status: " + response.status);
    // testAPI();
    userLogged();
  } else if (response.status === 'not_authorized') {
    console.log("Status: " + response.status);
    userNotLogged();
  } else {
    console.log("Status: " + response.status);
    userNotLogged();
  }
};


// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }


window.fbAsyncInit = function() {
  FB.init({
    appId      : 428380597359730,
    cookie     : true,
    xfbml      : true,
    version    : 'v2.2'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// function testAPI() {
//   console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function(response) {
//     console.log('Successful login for: ' + response.name);
//   });
// };


function userLogged() {
  FB.api('/me', function(response) {
    document.getElementById('members-only').innerText = 'Hi ' + response.name + "!";
  });
};
function userNotLogged() {
  document.getElementById('members-only').innerText = 'Please log into Kickstand with Facebook.';
};

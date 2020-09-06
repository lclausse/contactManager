


function test() {
  FB.login(function(response) {
  console.log(response);
}, {scope: 'user_birthday'});
}

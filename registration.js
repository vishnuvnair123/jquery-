$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (name == '' || email == '' || password == '' || cpassword == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 8) {
alert("Password should atleast 8 character in length...!!!!!!");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
} else {
$.post("register.php", {
name1: name,
email1: email,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("form")[0].reset();
}
alert(data);
});
}
});
});
$(function() {
  $('.cloud-left').hover(function() {
    $('h1').css('color', 'yellow');
  }, function() {
    $('h1').css('color', '');
  });
});
$(function() {
  $('.cloud-right').hover(function() {
    $('h1').text('or code all night ; )').css('font-size','60px').css('color', 'pink');
  }, function() {
    $('h1').text('welcome!').css('font-size','6em').css('color', 'white');
  });
});
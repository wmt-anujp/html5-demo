$(document).ready(function () {
  // UserName Validate
  $("#unDiv").hide();
  let userError = true;
  $("#userName").keyup(function () {
    UNvalidate();
  });

  function UNvalidate() {
    let usernameValue = $("#userName").val();
    if (usernameValue.length == "") {
      $("#unDiv").show();
      userError = false;
      return false;
    }
    if (usernameValue.length < 3 || usernameValue.length > 15) {
      $("#unDiv").show();
      $("#unDiv").html("Length of username should be between 3 to 15*");
      userError = false;
      return false;
    } else {
      $("#unDiv").hide();
    }
  }

  // Email Validate
  $("#emailDiv").hide();
  $("#emailAddress").keyup(function () {
    emailvalidate();
  });
  function emailvalidate() {
    let emailValue = $("#emailAddress").val();
    let pattern = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    var result = pattern.test(emailValue);
    if (result == false) {
      $("#emailDiv").show();
      $("#emailDiv").html("Please enter valid email format");
    } else {
      $("#emailDiv").hide();
    }
  }

  // Password Validate
  $("#passwordDiv").hide();
  let passwordError = true;
  $("#password").keydown(function () {
    passwordValidate();
  });

  function passwordValidate() {
    let passwordValue = $("#password").val();
    if (passwordValue.length == "") {
      $("#passwordDiv").show();
      passwordError = false;
      return false;
    }
    if (passwordValue.length < 8 || passwordValue.length > 16) {
      $("#passwordDiv").show();
      $("#passwordDIv").text("Length of password must be between 8 and 16*");
      passwordError = false;
      return false;
    } else {
      $("#passwordDiv").hide();
    }
  }

  // Confirm Password Validate
  $("#cpasswordDiv").hide();
  let cpasswordError = true;
  $("#confirmPassword").keyup(function () {
    cpasswordValidate();
  });

  function cpasswordValidate() {
    let cpasswordValue = $("#confirmPassword").val();
    let passwordValue = $("#password").val();
    if (cpasswordValue != passwordValue) {
      $("#cpasswordDiv").show();
      cpasswordError = false;
      return false;
    } else {
      $("#cpasswordDiv").hide();
    }
  }

  // Submit Validate
  $("#submitbtn").click(function () {
    UNvalidate();
    emailvalidate();
    passwordValidate();
    cpasswordValidate();
    if (
      userError == true &&
      result == true &&
      passwordError == true &&
      cpasswordError == true
    ) {
      return true;
    } else {
      alert("Please fullfil all the valid formats");
      return false;
    }
  });
});

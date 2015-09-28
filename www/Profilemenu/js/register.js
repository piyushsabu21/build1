   function TextLimit(){
    var text = document.getElementById('mobile_no');
   if (text.value.length > 10){
        alert('you are allowed to enter 10 characters only');

    }
}


$(document).ready(function () {
    $('#register-btn').click(function () {
 var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
 
 var firstname = document.form.firstname.value,
  lastname = document.form.lastname.value,
  mobile_no = document.form.mobile_no.value,
  other_contact = document.form.other_contact.value,
  password = document.form.password.value,
  confirm_password = document.form.confirm_password.value,
  dob = document.form.dob.value,
  emailid = document.form.emailid.value,
  state = document.form.state.value,
  city = document.form.city.value,
  locality = document.form.locality.value,
  pincode = document.form.pincode.value,
  user_type = document.form.user_type.value;
  
 if( firstname == "" )
   {
     document.form.firstname.focus() ;
	document.getElementById("errorBox").innerHTML = "enter the first name";
     return false;
   }
 if( lastname == "" )
   {
     document.form.lastname.focus() ;
   document.getElementById("errorBox").innerHTML = "enter the last name";
     return false;
   }
   if(mobile_no == "")
  {
   document.form.mobile_no.focus();
   document.getElementById("errorBox").innerHTML = "enter the mobile no";
   return false;
  }
   
   if (other_contact == "") {
        document.form.other_contact.focus();
  document.getElementById("errorBox").innerHTML = "Enter other contact";
        return false;
     }
    
   if (password == "" )
 {
  document.form.password.focus();
  document.getElementById("errorBox").innerHTML = "enter the password";
  return false;
  }
   
   if (confirm_password == "" )
 {
  document.form.confirm_password.focus();
  document.getElementById("errorBox").innerHTML = "Re-enter the password";
  return false;
  }
   
  if(confirm_password !=  password){
   document.form.confirm_password.focus();
   document.getElementById("errorBox").innerHTML = "Passwords are not matching, re-enter again";
   return false;
   }
   
   
 
  if (dob == "") {
        document.form.dob.focus();
  document.getElementById("errorBox").innerHTML = "Enter date of birth";
        return false;
     }
	 
	   if (emailid == "" )
 {
  document.form.emailid.focus();
  document.getElementById("errorBox").innerHTML = "enter the email";
  return false;
  }else if(!emailRegex.test(emailid)){
  document.form.emailid.focus();
  document.getElementById("errorBox").innerHTML = "enter the valid email";
  return false;
  }
  if (state == "") {
        document.form.state.focus();
  document.getElementById("errorBox").innerHTML = "Enter your state";
        return false;
     }
  
  if (city == "") {
        document.form.city.focus();
  document.getElementById("errorBox").innerHTML = "Enter your city";
        return false;
     }
	 if (locality == "") {
        document.form.locality.focus();
  document.getElementById("errorBox").innerHTML = "Enter your locality";
        return false;
     }
	 if (pincode == "") {
        document.form.pincode.focus();
  document.getElementById("errorBox").innerHTML = "Enter your pincode";
        return false;
     }
 
   
/* 	var str1 = '"';
	var fname1 = str1.concat(fname);
    var fname2= fname1.concat(str1);
	
	var lname1 = str1.concat(lname);
    var lname2= lname1.concat(str1);
	
	var femail1 = str1.concat(femail);
    var femail2= femail1.concat(str1);
	
	var freemail1 = str1.concat(freemail);
    var freemail2= freemail1.concat(str1);
	
	var fpassword1 = str1.concat(fpassword);
    var fpassword2= fpassword1.concat(str1);
	
	var fmonth1 = str1.concat(fmonth);
    var fmonth2= fmonth1.concat(str1);
   
   var fday1 = str1.concat(fday);
    var fday2= fday1.concat(str1);
   
   var fyear1 = str1.concat(fyear);
    var fyear2= fyear1.concat(str1); */
   
  if(firstname != '' && lastname != '' && mobile_no != '' && other_contact != '' && password != '' && confirm_password != '' && dob != '' && emailid != '' && state != '' && city != '' && locality != '' && pincode != ''){
  event.preventDefault();
      $.ajax({
        type: "POST",
        url: websiteaddress + 'api/user/register/format/json',
        data: {	'api_key' : 'a2a119aabd70e736569f194056a15860',
				'user_type' 	: user_type,
				'firstname': firstname,
				'lastname' : lastname,
				'mobile_no': mobile_no,
				'emailid': emailid,
				'other_contact' : other_contact,
				'password' : password,
				'dob' : dob,
				'city' : city,
				'state' : state, 
				'locality' : locality,
				'pincode'	: pincode},
        
        success: function(html)
		{
            $("#errorBox").html(html);
        } 
      });
   }
});
});

 

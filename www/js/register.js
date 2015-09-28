   function TextLimit(){
    var text = document.getElementById('mobile_no');
   if (text.value.length > 10){
        alert('you are allowed to enter 10 digits only');

    }
}

  function login(){
	
	window.location="../index.html";
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
   
     var pwd = document.getElementById('password');
  if (pwd.value.length < 6){
    document.form.password.focus();
        alert('Please Enter More than 6 character password');
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
 


  if(firstname != '' && lastname != '' && mobile_no != '' && mobile_no.length==10 && other_contact != '' && password != '' && confirm_password != '' && dob != '' && emailid != '' && state != '' && city != '' && locality != '' && pincode != ''){
  event.preventDefault();
      $.ajax({
        type: "POST",
        url: website + 'api/user/register/format/json',
        data: {	'api_key': 'a2a119aabd70e736569f194056a15860',
				'user_type': user_type,
				'firstname': firstname,
				'lastname': lastname,
				'mobile_no': mobile_no,
				'emailid': emailid,
				'other_contact': other_contact,
				'password': password,
				'dob': dob,
				'city': city,
				'state': state, 
				'locality': locality,
				'pincode': pincode},
        
        success: function(data)
		{
		
            alert("Registered succesfully! Please Login with your mobile number...");
					  window.location="../index.html";
        },
		error: function(response)
		{
		//alert(response.responseJSON.message);
		alert("Error in Registering");
		console.log("error arrived");
		}
		
      });
   }
   else
			{
			alert("Please enter 10 digits mobile number");
			return false;
			}
});
});

 

   function TextLimit(){
    var text = document.getElementById('mobile_no');
   if (text.value.length > 10){
        alert('you are allowed to enter 10 characters only');

    }
}


$(document).ready(function () {

 var localData = JSON.parse(localStorage.getItem('session_control'));
var user_id = localData.data.user_id;
var user_key= localData.data.user_key;
var user_permissions= localData.data.user_permissions;

    $('#edit-btn').click(function () {
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
	alert("enter the first name");
     return false;
   }
 if( lastname == "" )
   {
     document.form.lastname.focus() ;
   alert("enter the last name");
     return false;
   }
   if(mobile_no == "")
  {
   document.form.mobile_no.focus();
   alert("enter the mobile no");
   return false;
  }
   
   if (other_contact == "") {
        document.form.other_contact.focus();
  alert("Enter other contact");
        return false;
     }
    
   if (password == "" )
 {
  document.form.password.focus();
  alert("enter the password");
  return false;
  }
   
   if (confirm_password == "" )
 {
  document.form.confirm_password.focus();
  alert("Re-enter the password");
  return false;
  }
   
  if(confirm_password !=  password){
   document.form.confirm_password.focus();
   alert("Passwords are not matching, re-enter again");
   return false;
   }
   
   
 
  if (dob == "") {
        document.form.dob.focus();
  alert("Enter date of birth");
        return false;
     }
	 
	   if (emailid == "" )
 {
  document.form.emailid.focus();
  alert("enter the email");
  return false;
  }else if(!emailRegex.test(emailid)){
  document.form.emailid.focus();
  alert("enter the valid email");
  return false;
  }
  if (state == "") {
        document.form.state.focus();
  alert("Enter your state");
        return false;
     }
  
  if (city == "") {
        document.form.city.focus();
  alert("Enter your city");
        return false;
     }
	 if (locality == "") {
        document.form.locality.focus();
  alert("Enter your locality");
        return false;
     }
	 if (pincode == "") {
        document.form.pincode.focus();
  alert("Enter your pincode");
        return false;
     }
 
   
  if(firstname != '' && lastname != '' && mobile_no != '' && other_contact != '' && password != '' && confirm_password != '' && dob != '' && emailid != '' && state != '' && city != '' && locality != '' && pincode != ''){
  event.preventDefault();
      $.ajax({
        type: "POST",
        url: website + 'api/user/register/format/json',
        data: {	'user_type':user_key,
				'user_id':user_id,
				'firstname':firstname,
				'lastname':lastname,
				'mobile_no':mobile_no,
				'emailid':emailid,
				'other_contact':other_contact,
				'password':password,
				'dob':dob,
				'city':city,
				'state':state, 
				'locality':locality,
				'pincode':pincode,
				'random':''
				},
        
        success: function(html){
            //alert(response.responseJSON.message);
            alert("Profile successfully edited!");
			window.location="dashboard.html";
        },
		error: function(response)
		{
		//alert(response.responseJSON.message);
		alert("Error in editing profile. Please try again after sometime.");
		console.log("error arrived");
		window.location="dashboard.html";
		}		
      });
   }
});
});

 

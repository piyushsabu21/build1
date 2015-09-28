
$(document).ready(function () {
 var localData = JSON.parse(localStorage.getItem('session_control'));
var user_id = localData.data.user_id;
var user_key= localData.data.user_key;
var user_permissions= localData.data.user_permissions;

    $('#save-btn').click(function () {
	
 var old_password = document.form.old_password.value,
  password = document.form.password.value,
  confirm_password = document.form.confirm_password.value;
  alert("inside");
 if( old_password == "" )
   {
     document.form.old_password.focus() ;
	alert("Enter Current Password");
     return false;
   }
    
   if (password == "" )
 {
  document.form.password.focus();
  alert("Please Enter password");
  return false;
  }
   
   if (confirm_password == "" )
 {
  document.form.confirm_password.focus();
  alert("Re-enter password");
  return false;
  }
   
  if(confirm_password !=  password){
   document.form.confirm_password.focus();
   alert("Passwords are not matching, re-enter again");
   return false;
   }
   
   
   
  if(old_password != '' && password != '' && confirm_password != ''){
  event.preventDefault();
      $.ajax({
        type: "POST",
        url: website + 'api/user/edit_password/format/json',
        data: {	'user_id' 	: user_id,
				'user_key' 	: user_key,
				'old_password': old_password,
				'new_password' : password
				},
        
        success: function(html){
            //$("#errorBox").html(html);
			alert("Changed Password Successfully! Please login with new password.");
			localStorage.removeItem("session_control");
			windowlocation="../index.html";
        },
                error: function (response)
				{
					alert(response.responseJSON.message);
                    console.log("Error arrived");
					return false; 
                } 
      });
   }
});
});

 

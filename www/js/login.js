   function callAnotherPage()
             {
                window.location.href = "test.html";
             }
			 
   function TextLimit(){
    var text = document.getElementById('mobileno');
   if (text.value.length > 10){
        alert('you are allowed to enter 10 characters only');

    }
}

$(document).ready(function () {	

    $('#btn-login').click(function () {
	
	var mobile_no = document.getElementById('mobileno').value;
	var password  = document.getElementById('password').value;
	var filter=/^[0-9]+$/;
	
        if(!filter.test(mobile_no))
        {
          alert("Please enter numeric values");
          document.getElementById('mobileno').value="";
          document.getElementById('mobileno').focus();
          return false;
        }
	    if( password == "" )
        {
          alert("Please enter password");
          document.getElementById('password').value="";
          document.getElementById('password').focus();
          return false;
        }
       else
	   { 
         if(mobile_no.length==10)
		 {
			 /*$('#wait')
             .hide()
             .ajaxStart(function(){
                $(this).show();
             })
             .ajaxStop(function(){
                $(this).hide();
            });*/
			
			//-------------------------------------
			
			  $(document).ajaxStart(function()
			 {
               $("#wait").css("display", "block");
			
             });
			 
             $(document).ajaxComplete(function()
			 {
                 $("#wait").css("display", "none");
             });
			
			
			
			
			//--------------------------------------
			
			
		     $.ajax
		         ({
                      url       : website + 'api/user/login/format/json',
                      type      :    "post",
                      dataType  : 'json',
                
				data: 
				{
                    api_key: 'a2a119aabd70e736569f194056a15860',
                    mobile_no: mobile_no,
                    password:  password
                }, success: function (data) {
                    
					  console.log("successful");
					  var res = JSON.stringify(data);
					  var response = $.parseJSON(res);
					  
					 
					 localStorage.setItem('session_control', res);
					 
					 var localData = JSON.parse(localStorage.getItem('session_control'));
					/* alert( localData.data.user_id );
					 alert( localData.data.user_key );
					 alert( localData.data.user_permissions );
					*/
					 
					alert("Logged in succesfully");
					  window.location="Profilemenu/dashboard.html";
					 //alert( localData.data.user_id );
					 //alert( localData.data.user_key );
					 //alert( localData.data.user_permissions );
										
                },
                error: function (response)
				{
					alert(JSON.stringify(response));
					alert(response);
                    console.log("error arrived");
					//alert(response.responseJSON.message);
					alert("Error Logging in!");
					return false; 
                }
            });
					
							}
		else
			{
			alert("Please enter 10 digits mobile number");
			return false;
			}
	   }

           
         
        });

    }); 
   
 
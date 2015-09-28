
$(document).ready(function () {
    $('#save-btn').click(function () {
 var localData = JSON.parse(localStorage.getItem('session_control'));
var user_id = localData.data.user_id;
var user_key= localData.data.user_key;
var user_permissions= localData.data.user_permissions;

 var service_date = document.form.service_date.value,
  garage_name = document.form.garage_name.value,
  distance_in_km = document.form.distance_in_km.value,
  vehicle_id = document.form.vehicle_id.value,
  amount_paid = document.form.amount_paid.value
  /*files = document.form.files.value*/;
  
  
 if( service_date == "" )
   {
     document.form.service_date.focus() ;
	alert("enter service_date");
     return false;
   }
 if( garage_name == "" )
   {
     document.form.garage_name.focus() ;
   alert("enter garage_name");
     return false;
   }
   if(distance_in_km == "")
  {
   document.form.distance_in_km.focus();
   alert("enter distance_in_km");
   return false;
  }
   
   if (amount_paid == "") {
        document.form.amount_paid.focus();
  alert("Enter amount_paid");
        return false;
     }

	 if(service_date != '' && garage_name != '' && distance_in_km != '' && amount_paid != ''){
  event.preventDefault();
  
      $.ajax({
        type: "POST",
        url: website + '/api/service/serviceHistory/format/json',
        data: {	'user_key':user_key,
				'user_id':user_id,
				'service_date':service_date,
				'type':'add',
				'vehicle_id':vehicle_id,
				'garage_name':garage_name,
				'amount_paid':amount_paid,
				'distance':distance_in_km
				/*'files':files*/
				},
        
        success: function(data){
		alert("Service History Added Succesfully!");
            
			var id = localStorage.getItem('id');
			//alert(id);
			window.location="veh_info.html?id="+id;
        },
error: function (response) {
					alert("Error in adding service history");
                    //$("#errorBox").html("error in adding");
					return false;
                }		
      });
   }
});
});


$(document).ready(function () {
    $('#addmore-btn').click(function () {
 var localData = JSON.parse(localStorage.getItem('session_control'));
var user_id = localData.data.user_id;
var user_key= localData.data.user_key;
var user_permissions= localData.data.user_permissions;

 var service_date = document.form.service_date.value,
  garage_name = document.form.garage_name.value,
  distance_in_km = document.form.distance_in_km.value,
  vehicle_id = document.form.vehicle_id.value,
  amount_paid = document.form.amount_paid.value
  /*files = document.form.files.value*/;
  
  
 if( service_date == "" )
   {
     document.form.service_date.focus() ;
	alert("enter service_date");
     return false;
   }
 if( garage_name == "" )
   {
     document.form.garage_name.focus() ;
   alert("enter garage_name");
     return false;
   }
   if(distance_in_km == "")
  {
   document.form.distance_in_km.focus();
   alert("enter distance_in_km");
   return false;
  }
   
   if (amount_paid == "") {
        document.form.amount_paid.focus();
  alert("Enter amount_paid");
        return false;
     }

	 if(service_date != '' && garage_name != '' && distance_in_km != '' && amount_paid != ''){
  event.preventDefault();
  
      $.ajax({
        type: "POST",
        url: website + '/api/service/serviceHistory/format/json',
        data: {	'user_key':user_key,
				'user_id':user_id,
				'service_date':service_date,
				'type':'add',
				'vehicle_id':vehicle_id,
				'garage_name':garage_name,
				'amount_paid':amount_paid,
				'distance':distance_in_km
				/*'files':files*/
				},
        
        success: function(data){
		alert("Previous Service History Added Succesfully!");
        document.forms['form'].reset();
        },
error: function (response) {
					alert("Error in Adding Service History!");
                    //$("#errorBox").html("error in adding");
					return false;
                }		
      });
   }
});
});
 

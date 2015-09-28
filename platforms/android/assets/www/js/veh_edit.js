$(document).ready(function () {
    $('#save-btn').click(function () {
 var localData = JSON.parse(localStorage.getItem('session_control'));
var user_id = localData.data.user_id;
var user_key= localData.data.user_key;
var user_permissions= localData.data.user_permissions;

if(document.getElementById("checkbox").checked)
	{
    checkbox = 'yes';
	}
	else{
	checkbox = 'no';
	}

 var manufacturer_name = document.form.manufacturer_name.value,
  model_name = document.form.model_name.value,
  variant_name = document.form.variant_name.value,
  color = document.form.color.value,
  vehicle_id = document.form.vehicle_id.value,
  date_of_purchase = document.form.date_of_purchase.value,
  registration_number = document.form.registration_number.value,
  km_reading = document.form.km_reading.value,
  last_date_of_service = document.form.last_date_of_service.value,
  /*files = document.form.files.value*/
  checkbox = document.form.checkbox.value;
   //alert('checkbox'+checkbox);
  
 if( manufacturer_name == "" )
   {
     document.form.manufacturer_name.focus() ;
	alert("enter manufacturer name");
     return false;
   }
 if( model_name == "" )
   {
     document.form.model_name.focus() ;
   alert("enter model name");
     return false;
   }
   if(variant_name == "")
  {
   document.form.variant_name.focus();
   alert("enter variant name");
   return false;
  }
   
   if (color == "") {
        document.form.color.focus();
  alert("Enter color");
        return false;
     }
    
  if (date_of_purchase == "") {
        document.form.date_of_purchase.focus();
  alert("Enter date of purchase");
        return false;
     }
	 if (registration_number == "") {
        document.form.registration_number.focus();
  alert("Enter registration number");
        return false;
     }
	 if (km_reading == "") {
        document.form.km_reading.focus();
 alert("Enter km reading");
        return false;
     }
   
    if (last_date_of_service == "") {
        document.form.last_date_of_service.focus();
  alert("Enter last date of service");
        return false;
     }

   
  if(manufacturer_name != '' && model_name != '' && variant_name != '' && color != '' && date_of_purchase != '' && registration_number != '' && km_reading != '' && last_date_of_service != ''){
  event.preventDefault();
  
      $.ajax({
        type: "POST",
        url: website + 'api/vehicles/addVehicle/format/json',
        data: {	'user_key':user_key,
				'user_id':user_id,
				'vehicle_id':vehicle_id,
				'make':manufacturer_name,
				'model':model_name,
				'ins_renewal':checkbox,
				'type':'update',
				'variant':variant_name,
				'color':color,
				'dop':date_of_purchase,
				'reg_no':registration_number,
				'km_reading':km_reading,
				'last_dos':last_date_of_service,
				'random':''
				},
        
        success: function(data){
			alert("Vehicle Edited Successfully!");
            //$("#errorBox").html("Edited Sucesfully");
			window.location="vehicle_listing.html";
        },
		error: function (response) {
					
                    $("#errorBox").html("Error in editing");
					return false;
                }		
      });
   }
});
});

 

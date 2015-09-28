$(document).ready(function () {
    $('#save-btn').click(function () {
 var localData = JSON.parse(localStorage.getItem('session_control'));
var user_id = localData.data.user_id;
var user_key= localData.data.user_key;
var user_permissions= localData.data.user_permissions;
var checkbox = '';

 var manufacturer_name = document.form.manufacturer_name.value,
  model_name = document.form.model_name.value,
  variant = document.form.variant_name.value,
  color = document.form.color.value,
  date_of_purchase = document.form.date_of_purchase.value,
  registration_number = document.form.registration_number.value,
  type = document.form.type.value,
  km_reading = document.form.km_reading.value,
  last_date_of_service = document.form.last_date_of_service.value;
  /*files = document.form.files.value*/
 
  
  
 if( manufacturer_name == "" )
   {
     document.form.manufacturer_name.focus() ;
	document.getElementById("errorBox").innerHTML = "enter manufacturer_name";
     return false;
   }
 if( model_name == "" )
   {
     document.form.model_name.focus() ;
   document.getElementById("errorBox").innerHTML = "Enter Model Name";
     return false;
   }
   if(variant == "")
  {
   document.form.variant_name.focus();
   document.getElementById("errorBox").innerHTML = "Enter Variant Name";
   return false;
  }
   
   if (color == "") {
        document.form.color.focus();
  document.getElementById("errorBox").innerHTML = "Enter color";
        return false;
     }
    
  if (date_of_purchase == "") {
        document.form.date_of_purchase.focus();
  document.getElementById("errorBox").innerHTML = "Enter date_of_purchase";
        return false;
     }
	 if (registration_number == "") {
        document.form.registration_number.focus();
  document.getElementById("errorBox").innerHTML = "Enter registration_number";
        return false;
     }
	 if (km_reading == "") {
        document.form.km_reading.focus();
  document.getElementById("errorBox").innerHTML = "Enter km_reading";
        return false;
     }
   
    if (last_date_of_service == "") {
        document.form.last_date_of_service.focus();
  document.getElementById("errorBox").innerHTML = "Enter Last Date of Service";
        return false;
     }

   if(document.getElementById("checkbox").checked)
	{
    checkbox = 'yes';
	}
	else{
	checkbox = 'no';
	}
	
	//alert(type);
  if(manufacturer_name != '' && model_name != '' && variant != '' && color != '' && date_of_purchase != '' && registration_number != '' && km_reading != '' && last_date_of_service != ''){
  event.preventDefault();
  
      $.ajax({
        type: "POST",
		url: website + 'api/vehicles/addVehicle/format/json',
        data: {	'user_key':user_key,
				'user_id':user_id,
				'make':manufacturer_name,
				'model':model_name,
				'ins_renewal':checkbox,
				'type':'add',
				'variant':variant,
				'color':color,
				'dop':date_of_purchase,
				'reg_no':registration_number,
				'km_reading':km_reading,
				'last_dos':last_date_of_service,
				'vehicle_id':'',
				'random':''
				},
        
        success: function(data){
			alert("Vehicle Added Successfully!");
            //$("#errorBox").html("Added Sucesfully");
			window.location="vehicle_listing.html";
        },
		error: function (response) {
					alert("Error in Vehicle Adding!");
                    //$("#errorBox").html("error in adding");
					return false;
                }		
      });
   }
});
});

 

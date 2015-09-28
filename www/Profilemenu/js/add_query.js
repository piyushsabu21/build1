 var pictureSource;   
 var destinationType; 
 var mymsg;
 function doit(add_vehicle_id)
 {
	 
	      //----------------newly added
          var localData = JSON.parse(localStorage.getItem('session_control'));
          var user_id = localData.data.user_id;
          var user_key= localData.data.user_key;
          var user_permissions= localData.data.user_permissions;
          //----------------------------
		  alert("add_vehicle_id"+add_vehicle_id);
		  $(document).ready(function(){
	  
	         $(document).ajaxStart(function()
		     {
               $("#wait").css("display", "block");
		     });
		     $(document).ajaxComplete(function()
			 {
               $("#wait").css("display", "none");
             });
	     
		  mymsg = document.getElementById("query").value;
		  alert("mymsg"+mymsg);
		 
		  $.ajax({
			       url      : websiteaddress+"/api/query/addUpdateQuery/format/json",
				   type     : "POST",
				   datatype : "json",
			 	   data     : 
				   {
					   
					  user_id    : user_id,
				      user_key   : user_key,
				      type       : "add",
				      query_id   : "",
				      vehicle_id : add_vehicle_id,
				      message    : mymsg,
				   },
				  success: function(response)
                  {
					  alert("sent successfully");
			      },
                  error: function(err)
                  {	
				      alert("mymsg"+mymsg);
                      alert(JSON.stringify(err));
                  }	
               });
	     });
}


function sendImgewithdata(add_vehicle_id)
 {
	 
	      //----------------newly added
          var localData = JSON.parse(localStorage.getItem('session_control'));
          var user_id = localData.data.user_id;
          var user_key= localData.data.user_key;
          var user_permissions= localData.data.user_permissions;
          //----------------------------
		  alert("add_vehicle_id"+add_vehicle_id);
		  $(document).ready(function(){
	  
	         $(document).ajaxStart(function()
		     {
               $("#wait").css("display", "block");
		     });
		     $(document).ajaxComplete(function()
			 {
               $("#wait").css("display", "none");
             });
	     
		  mymsg = document.getElementById("query").value;
		  alert("mymsg"+mymsg);
		 
		  $.ajax({
			       url      : websiteaddress+"/api/query/addUpdateQuery/format/json",
				   type     : "POST",
				   datatype : "json",
			 	   data     : 
				   {
					   
					  user_id    : '31',
				      user_key   : '03e3f5442f5eb5734c94ba5b8cc2e7eb',
				      type       : "add",
				      query_id   : "",
				      vehicle_id : add_vehicle_id,
				      message    : mymsg,
				   },
				  success: function(response)
                  {
					  alert("sent successfully");
			      },
                  error: function(err)
                  {	
				      alert("mymsg"+mymsg);
                      alert(JSON.stringify(err));
                  }	
               });
	     });
}

function getphoto(source)
{
	    //pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
	   
	    navigator.camera.getPicture(onPhotoURISuccess, onFail,{ quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
	   
	   function onPhotoURISuccess(imageURI) 
	   {
		 var smallImage = document.getElementById('smallImage');
         smallImage.style.display = 'block';
		 smallImage.src = imageURI;
		 alert(smallImage.src);
		 var options = new FileUploadOptions();
         options.fileKey="file";
         options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
		 alert(options.fileName);
		 options.mimeType="image/jpeg";
		 document.getElementById("images").value=options.fileName;
		 
		 var params = new Object();
         options.params = params;
         var ft = new FileTransfer();
         ft.upload(imageURI, encodeURI("http://technople.in/temp/garage_works2/query/addUpdateQuery/format/json"), win, fail, options);
	   }
	   
	   function win(r)
	   {
         console.log("Code = " + r.responseCode);
         console.log("Response = " + r.response);
         console.log("Sent = " + r.bytesSent);
       }

      function fail(error) 
      {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
      }
	   
	   function onFail(message)
	   {
         alert('Failed because: ' + message);
       }
	   
	   
	    
}
		 
		 
		 


   
     

    
 
    


	 
	 
	 

	 
	 


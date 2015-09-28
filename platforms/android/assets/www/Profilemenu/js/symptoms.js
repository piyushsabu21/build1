var pictureSource;   // picture source
var destinationType; 
var mymsg;
function  CallSymptoms()
{
	
	      var localData = JSON.parse(localStorage.getItem('session_control'));
          var user_id = localData.data.user_id;
          var user_key= localData.data.user_key;
          var user_permissions= localData.data.user_permissions;
	
	
          $(document).ready(function()
		  {
           var storedata='';
		   $.ajax({
			
				 url      : websiteaddress +"/api/diagnosis/getSymptoms/format/json",
				 type     : "POST",
				 datatype : "json",
			 	 data     : 
				 {
					 user_id  :  user_id,
                     user_key :  user_key
				 },
				
				    success: function(response)
                    {
					  var output = '';
				  	  var val="<table>";
					  var res = JSON.stringify(response);
					  var veh_info = JSON.parse(res);
					  var output='<table>';
					  if(veh_info.data==null)
					  {
						  output +='No data found'; 
					  }
					  else
					  {
						 for (var i=0; i< veh_info.data.length; i++)
					     {
				          output +='<li><a href="#" id="next_question" data="'+veh_info.data[i].diagnosis_type+'" get_sym_id="'+veh_info.data[i].id+'" class="info-go">' + veh_info.data[i].diagnosis_type +'</a></li>';
					     } 
					  }
					 
					  output+='</table>';
					  $('#mylist').html(output);
					     
					},
                    error: function(err)
                    {
					  alert("unable to getsymptoms");
				    }	
		     });
			 
			        $(this).on("click","#next_question",function ()
			        {
                         
						  
						   var question="what type of symptoms do you have?";
						   var ans=$(this).attr("data");
						   var symid=$(this).attr("get_sym_id");
						   localStorage.setItem("symid",symid);
						   firstQAsave=question+ans;
						   localStorage.setItem("firstQAsave",firstQAsave);
						   window.location="question.html";
                    });
			
			           
  
    });
	
	
	
}

function getphoto(source)
{
	   alert("you called");
	   pictureSource=navigator.camera.PictureSourceType;
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

function doit(add_vehicle_id)
 {
	       var localData = JSON.parse(localStorage.getItem('session_control'));
           var user_id = localData.data.user_id;
           var user_key= localData.data.user_key;
           var user_permissions= localData.data.user_permissions;
	 
	       var connectionStatus = false;
             connectionStatus = navigator.onLine ? 'online' : 'offline';
			 if(connectionStatus=='online')
			 {
				     $(document).ready(function()
					 {
					 $(document).ajaxStart(function()
					 {
					   $("#wait").css("display", "block");
					 });
					 
					 $(document).ajaxComplete(function()
					 {
						 $("#wait").css("display", "none");
					 });
			   
					   mymsg = document.getElementById("query").value;
					   $.ajax({
					
						  url      : websiteaddress +"/api/query/addUpdateQuery/format/json",
						  type     : "POST",
						  datatype : "json",
						  data     : 
						  {
							 user_id    : user_id,
							 user_key   : user_key,
							 vehicle_id : add_vehicle_id,
							 type       : "add",
							 message    : mymsg,
							 status_id  : 1
						  },
						  success: function(response)
						  {
								 alert("Query added successfully");
						  },
						  error: function(err)
						  {
								 alert("unable to add Query");
						  }	
					   });
					 });
		  }
		  else
		 {
		    alert("Please check internet connection");
		 }
}

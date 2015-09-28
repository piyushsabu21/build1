var global1 = "its  global variable!";
var global2 = "Showing global variable!";
var user_id="";
var user_key="";
var trackquestion="";
var trackAnswer="";
var saveid="";
var Questionasked="";
var firstQAsave=""  ;
var secondQAsave="" ;
var thirdQAsave=""  ;
var websiteaddress="http://garageworks.bitnamiapp.com/garage_works/";
var connectionStatus = false;
connectionStatus = navigator.onLine ? 'online' : 'offline';
function openGallery()
{
	 alert("opening wait");
	 getphoto(navigator.camera.PictureSourceType.PHOTOLIBRARY);
}
function getphoto(source)
{
	   pictureSource  = navigator.camera.PictureSourceType;
       destinationType= navigator.camera.DestinationType;
	   
	   navigator.camera.getPicture(onPhotoURISuccess, onFail,{ quality: 50,
       destinationType : destinationType.FILE_URI,
       sourceType : source });
	   
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

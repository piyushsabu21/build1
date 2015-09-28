function GetABoutUsData()
{
	var store_response='';
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
	   
		   $.ajax({
			
				 url       : websiteaddress + "/api/user/getSolution/format/json",
				 type      : "POST",
				 datatype  : "json",
			 	 data      : 
				 {
                     user_id : 1,
					 user_key : "sd9f786sda7f5sd7f5as8df6s87df6",
					 option_id:""
				 },
				 success: function(response)
                 {
					      var output = '';
					      $.each(response.data, function(index, item)
					      {
						   output += '<table style="width:100%;background-color: #f1f1c1;padding:5px"><li><tr style=" border: 2px solid black"><a href="#" class="info-go">' + this['name'] + "</tr><td>"+ this['status'] + " </td><td> "+ this['make'] +"</td><td>"+'</td></a></tr></li></table>';
						  });
					      $('#mylist').html(output).listview("refresh");
			     },
                 error: function(err)
                 {
						alert("It Error");
                        alert(JSON.stringify(err));
			     }	
					  
				});
	  });
		
		
	
	
}
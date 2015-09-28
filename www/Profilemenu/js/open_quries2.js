function callingOpenQuries()
{
	
	var store_response='';
	var query_no='';
	$(document).ready(function(){
	  
	         $(document).ajaxStart(function()
			 {
               $("#wait").css("display", "block");
			 });
			 
			 $(document).ajaxComplete(function()
			 {
                 $("#wait").css("display", "none");
             });
	   
		     $.ajax({
			
			     url      : websiteaddress +"/api/query/getQueries/format/json",
				 type     : "POST",
				 datatype : "json",
			 	 data     : {user_id : 36,user_key : "103121d9428b82ed2def744e8705b04f",type:"open",query_id:""},
				
				    success: function(response)
                      {
					     store_response=response;
					     var output = '';
						 var val="<table>";
						 $.each(response.data, function(index, item)
					     {
						  query_no = this['complaint_no'];
						  alert("query_no"+ query_no);
						  output += "<div style=\"overflow-x: scroll\";\"><table>"
                          output += '<tr>'
                          output += "<td rowspan='6'>1</td>"
                          output += "<td><b>Complaint Number:-</b>"+ this['complaint_no']+"</td>"
                          output += "<td rowspan='6' ><button id='MoreInfobtn'  style='color:#ff6d0d'>More Info</button></br><button id='Closebtn' mydata='"+this['complaint_no']+"'>Delete</button></br>Status :-<div id='status'>Yellow</div></td>"
                          output += "</tr>"
						  output += "<tr><td><b>Make:-</b>"+  this['make']+"</tr>"
                          output += "<tr><td><b>Model:-</b>"+ this['name']+"</tr>"
                          output += "<tr><td><b>Date:-</b>"+  this['status']+"</tr>"
                          output += "<td rowspan='2'><b>Query</b>Query will come here...</td>"
                          output += "</tr>"
                          output += "</table></div>";
						 });
					     val += "</table>";
					     $('#mylist').html(output);
						
					  },
                       error: function(err)
                       {
						  $("#wait").css("display", "none");
						  var output = '';
                          alert("It Error");
                          alert(JSON.stringify(err));
					      output += "<div style=\"overflow-x: scroll\";\"><table>"
		 
		                  output += "<tr>"
		                  output += "<td rowspan='6'>1</td>"
		                  output += "<td><b>Complaint Number:-</b>_________________________</td>"
		                  output += "<td rowspan='6' ><button id='MoreInfobtn' style='color:#ff6d0d'>More Info</button></br><button id='Closebtn'>Delete</button></br>Status :-<div id='status'>Yellow</div></td>"
 		                  output += "</tr>"
		                  output += "<tr><td><b>Make:-</b>_________________________</tr>"
		                  output += "<tr><td><b>Model:-</b>_________________________</tr>"
		                  output += "<tr><td><b>Date:-</b>_________________________</tr>"
		                  output += "<td rowspan='2'><b>Response</b>______________________</td>"
		                  output += "</tr>"
						  output += "</table></div>";
                          $('#mylist').html(output);
					   }	
					 });
			   
			            $(this).on("click","#MoreInfobtn",function()
			            {
                          window.location="modif_query.html";
                        });
						
						$(this).on("click","#Closebtn",function()
						{
							alert("close btn clicked");
							var send=$(this).attr("mydata");
							alert("send"+send);
							calltocloseApi(send);
						});
						
					    $(this).on("click",".info-go",function()
						{
							 alert("clicked");
							 window.location="MySon.html";
						});
			   
			   
        });
		
		 function calltocloseApi(myquery)
		 {
			 alert("ajax inside ajax");
			 alert("myquery"+myquery);
			 $.ajax({
			
	 			   url      : websiteaddress+"/api/query/deleteQuery/format/json",
				   type     : "POST",
				   datatype : "json",
			 	   data     :
				   {
					 user_id  : 36,
				     user_key : "103121d9428b82ed2def744e8705b04f",
				     query_id : myquery,
				   },
				   success: function(response)
                   {
					 alert("success");
					 //callAgainOpen();
				   },
                   error: function(err)
                   {
					  alert("Error");
                      alert(JSON.stringify(err));
				   }	
			   });
		 }
		 
		 function callAgainOpen()
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
			
			     url      : websiteaddress +"/api/query/getQueries/format/json",
				 type     : "POST",
				 datatype : "json",
			 	 data     : {user_id : 36,user_key : "103121d9428b82ed2def744e8705b04f",type:"open",query_id:""},
				
				      success: function(response)
                      {
					     store_response=response;
					     var output = '';
						 var val="<table>";
						 $.each(response.data, function(index, item)
					     {
						  query_no = this['complaint_no'];
						  alert("query_no"+ query_no);
						  output += "<div style=\"overflow-x: scroll\";\"><table>"
                          output += '<tr>'
                          output += "<td rowspan='6'>1</td>"
                          output += "<td><b>Complaint Number:-</b>"+ this['complaint_no']+"</td>"
                          output += "<td rowspan='6' ><button id='MoreInfobtn'  style='color:#ff6d0d'>More Info</button></br><button id='Closebtn' mydata='"+this['complaint_no']+"'>Delete</button></br>Status :-<div id='status'>Yellow</div></td>"
                          output += "</tr>"
						  output += "<tr><td><b>Make:-</b>"+  this['make']+"</tr>"
                          output += "<tr><td><b>Model:-</b>"+ this['name']+"</tr>"
                          output += "<tr><td><b>Date:-</b>"+  this['status']+"</tr>"
                          output += "<td rowspan='2'><b>Query</b>Query will come here...</td>"
                          output += "</tr>"
                          output += "</table></div>";
						 });
					     val += "</table>";
					     $('#mylist').html(output);
						
					  },
                       error: function(err)
                       {
						  $("#wait").css("display", "none");
						  var output = '';
                          alert("It Error");
                          alert(JSON.stringify(err));
					      output += "<div style=\"overflow-x: scroll\";\"><table>"
		 
		                  output += "<tr>"
		                  output += "<td rowspan='6'>1</td>"
		                  output += "<td><b>Complaint Number:-</b>_________________________</td>"
		                  output += "<td rowspan='6' ><button id='MoreInfobtn' style='color:#ff6d0d'>More Info</button></br><button id='Closebtn'>Delete</button></br>Status :-<div id='status'>Yellow</div></td>"
 		                  output += "</tr>"
		                  output += "<tr><td><b>Make:-</b>_________________________</tr>"
		                  output += "<tr><td><b>Model:-</b>_________________________</tr>"
		                  output += "<tr><td><b>Date:-</b>_________________________</tr>"
		                  output += "<td rowspan='2'><b>Response</b>______________________</td>"
		                  output += "</tr>"
						  output += "</table></div>";
                          $('#mylist').html(output);
					   }	
					 });
			   
			            $(this).on("click","#MoreInfobtn",function()
			            {
                          window.location="modif_query.html";
                        });
						
						$(this).on("click","#Closebtn",function()
						{
							alert("close btn clicked");
							var send=$(this).attr("mydata");
							alert("send"+send);
							calltocloseApi(send);
						});
						
					    $(this).on("click",".info-go",function()
						{
							 alert("clicked");
							 window.location="MySon.html";
						});
	             }
	}
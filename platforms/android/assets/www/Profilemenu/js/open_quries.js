var dontcallagain=false;
var x= 0 ;
var output = [];
var Status_array=[];
function callingOpenQuries()
{
	    var localData = JSON.parse(localStorage.getItem('session_control'));
        var user_id   = localData.data.user_id;
        var user_key  = localData.data.user_key;
        var user_permissions= localData.data.user_permissions;
        var store_response='';
	    var query_no='';
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
			
			      url      : websiteaddress +"/api/query/getQueries/format/json",
				  type     : "POST",
				  datatype : "json",
			 	  data     : 
				  {
					 user_id  : user_id,
					 user_key : user_key,
					 type     : "open",
					 async    : true,
					 query_id : ""
			      },
				
				  success: function(response)
                  {
					  var res = JSON.stringify(response);
				      var veh_info = JSON.parse(res);
					  var val = '';
					  if(veh_info.data==null)
					  {
						  //val +='No data found';
						  //document.getElementById("image0").innerHTML="<img src='img/NoDataAvailable.png'/>";
						  var x = document.getElementById("image0");
						  x.setAttribute("src", "img/NoDataAvailable.png");
						  
					  }
					  else
					  {
						  for (var i=0; i< veh_info.data.length; i++)
					      {
						   query_no = veh_info.data[i].complaint_no;
						   CallAJaxForQuery(query_no,veh_info); 
						   val += "<div style=\"overflow-x: scroll\";\"><table>"
                           val += '<tr>'
                           val += "<td rowspan='6'>"+(i+1)+"</td>"
                           val += "<td><b>Complaint Number:-</b>"+ veh_info.data[i].complaint_no+"</td>"
                           val += "<td rowspan='6' ><button id='MoreInfobtn' pass_query ='"+veh_info.data[i].complaint_no+"' style='color:#ff6d0d'>More Info</button></br><button id='Closebtn' mydata='"+veh_info.data[i].complaint_no+"'>Delete</button></br>Status1 :-<div id='technople'></div></td>"
                           val += "</tr>"
						   val += "<tr><td id='make' mydata_make   ='"+   veh_info.data[i].make+"' ><b>Make:-</b>"+  veh_info.data[i].make+"</td></tr>"
                           val += "<tr><td id='name' mydata_name   ='"+   veh_info.data[i].name+"' ><b>Model:-</b>"+ veh_info.data[i].name+"</td></tr>"
                           val += "<tr><td id='status' mydata_status ='"+ veh_info.data[i].status+"' ><b>Status:-</b>"+veh_info.data[i].status+"</td></tr>"
                           val += "<tr><td rowspan='2'><b>Query</b> <div id='display"+i+"'> </div> </td>"
                           val += "</tr>"
                           if(veh_info.data[i].status=='Open')
						   {
						 	//document.getElementById("status_mine").innerHTML="<img src='img/green-circle.png'/>"; 
						    }
						   else if(veh_info.data[i].status=='Further Inquiry')
						   {
                              //document.getElementById("technople").innerHTML="xyz";
                              //alert("valued"+document.getElementById("technople").innerHTML);								
						   }
						   else 
						   {  
						     //document.getElementById("status_mine").innerHTML="<img src='img/load.png'/>"; 
						   }
						   val += "</table></div>";
						  } 
                         					  
					  }
				      $('#mylist').html(val);	
						
					  },
                       error: function(err)
                       {
						  alert("unable to getQueries");
                       }	
					 });
			   
			            $(this).on("click","#MoreInfobtn",function()
			            {
							var my_query_no=$(this).attr("pass_query");	
							localStorage.setItem("pass_query_no",my_query_no);
							window.location="vehicle_modify_query.html";
						    //document.getElementById("technople").innerHTML="<img src='img/green-circle.png' />";
                        });
						
						$(this).on("click","#Closebtn",function()
						{
						    var send=$(this).attr("mydata");
						    calltocloseApi(send);
							alert("deleted successfully");
						});
						
					    $(this).on("click",".info-go",function()
						{
							 //alert("clicked");
							 window.location="MySon.html";
						});
			   
			   
        });
		
		 function calltocloseApi(myquery)
		 {
            $.ajax({
			
	 			   url      : websiteaddress+"/api/query/deleteQuery/format/json",
				   type     : "POST",
				   datatype : "json",
			 	   data     :
				   {
					 user_id  : user_id,
					 user_key : user_key,
				     query_id : myquery,
				   },
				   success: function(response)
                   {
					 //alert("success");
					 //callAgainOpen();
					 dontcallagain=true;
					 callingOpenQuries();
				   },
                   error: function(err)
                   {
					  alert("unable to delete query");
                   }	
			   });
		 }
		 
		 
		 function CallAJaxForQuery(query_no,veh_info)
		 {
			 $.ajax({
			
			     url      : websiteaddress +"/api/query/getQueryResponse/format/json",
				 type     : "POST",
				 datatype : "json",
				 data     : 
				 {
					 user_id  : user_id,
					 user_key : user_key,
					 query_id : query_no
				 },
				 success: function(response)
                      {
						   var val="<table>";
						   var res = JSON.stringify(response);
						   var veh_info1 = JSON.parse(res);
					        
						   for (var i=0; i< veh_info1.data.length; i++)
						   {
						       output[x] = veh_info1.data[i].message;
						       x=x+1;
						   }
						   for (var i=0; i< veh_info.data.length; i++)
						   {
						        document.getElementById("display"+i).innerHTML = output[i];
							    /*var mydata_status_var = document.getElementById("status").getAttribute("mydata_status");
							    alert("my_sta"+mydata_status_var);
							    if(mydata_status_var=='Open')
							    {
								  document.getElementById("status_mine"+i).innerHTML="<img src='img/green-circle.png'/>"; 
							    }
							    else if(mydata_status_var=='Further Inquiry')
							    {
								   document.getElementById("status_mine"+i).innerHTML="<img src='img/green-circle.png'/>"; 
							    }
							    else 
							    {   
								   document.getElementById("status_mine"+i).innerHTML="<img src='img/load.png'/>"; 
							    }*/
							   
						   }
						  
					      /*store_response=response;
					      var output = '';
						  var val="<table>";
						  $.each(response.data, function(index, item)
					      {
							  
						   alert("query_no"+ query_no);
						    output += "<div style=\"overflow-x: scroll\";\"><table>"
                            output += '<tr>'
                            output += "<td rowspan='6'>1</td>"
                            output += "<td><b>Complaint Number:-</b>"+ query_no +"</td>"
                            output += "<td rowspan='6' ><button id='MoreInfobtn'  style='color:#ff6d0d'>More Info</button></br><button id='Closebtn' mydata='"+this['complaint_no']+"'>Delete</button></br>Status :-<div id='status'>Yellow</div></td>"
                            output += "</tr>"
						    output += "<tr><td><b>Make:-</b>"+  mydata_make_var   +"</tr>"
                            output += "<tr><td><b>Name:-</b>"+  mydata_name_var   +"</tr>"
                            output += "<tr><td><b>status:-</b>"+  mydata_status_var +"</tr>"
						    output += "<tr><td><b>Date:-</b>"+  this['message'] +"</tr>"
                            output += "<td rowspan='2'><b>Query</b>"+  this['message'] +"</td>"
                            output += "</tr>"
                            output += "</table></div>";
						  });
					      val += "</table>";
					      $('#mylist').html(output);*/
						},
                        error:function(err)
                        {
						 //alert("unable to get Query Response");
                        }	
					 }); 
					 
		 }
		 
}
		 
		 /*function callAgainOpen()
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
			 	 data     : {user_id : user_id,user_key :user_key,type:"open",query_id:""},
				
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
	}*/
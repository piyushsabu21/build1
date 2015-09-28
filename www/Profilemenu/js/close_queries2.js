function callingCloseQuries()
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
			     url      : websiteaddress+"/api/query/getQueries/format/json",
				 type     : "POST",
				 datatype : "json",
			 	 data     :
				 {  
				     user_id : 36,
					 user_key : "103121d9428b82ed2def744e8705b04f",
					 type:"close",
					 query_id:""
				 },
				
				      success: function(response)
                      {
						  /*-------------------------
						    jana=response;
					        var output = '';
						    var val="<table>";
						    var res = JSON.stringify(response);
						    var veh_info = JSON.parse(res);
						    var output='<table>';
						 
						   for(var i=0; i< veh_info.data.length; i++)
						   {
						      //saveid=veh_info.data[i].vehicle_id;
						      output+='<tr>';
						      output+='<td rowspan="4">'+(i+1)+'</td>';
						      output+='<th>Make</th><td>'+veh_info.data[i].name+'</td>';
						      output+='<td rowspan="4" ><a id="more" say="'+veh_info.data[i].name+'" style="color:#ff6d0d">>></a></br></td>';
						      output+='</tr>';
						      output+='<tr>';
						      output+='<th>Model</th><td>'+veh_info.data[i].status+'</td>';
						      output+='</tr>';
						      output+='<tr>';
						      output+='<th>Date of Purchase</th><td>'+veh_info.data[i].make+'</td>';
						      output+='</tr>';
						      output+='<tr>';
						      output+='<th>Service History</th><td>Yes</td>';
						      output+='</tr>';
						      output+='<tr class="blank_row"><td colspan="4"></td></tr></hr>';
						    }
						     output+='</table>';
					   
					    $('#mylist').html(output).listview("refresh");*/
						  
						  
					     store_response=response;
					     var output = '';
					 	 var val="<table>";
				 		 $.each(response.data, function(index, item)
					     {
						  //output += '<table style="width:100%"><tr style=" border: 3px solid black"><a href="#" class="info-go">' + this['name'] + "<td>"+ this['status'] + " </td><td> "+ this['make'] +' </td></a></tr></li></table>';
					      output += '<table style="width:100%;background-color: #f1f1c1;padding:5px"><li><tr style=" border: 2px solid black"><a href="#" class="info-go">' + this['name'] + "</tr><td>"+ this['status'] + " </td><td> "+ this['make'] +"</td><td>"+'</td></a></tr></li></table>';
						 });
					     val += "</table>";
					     $('#mylist').html(output).listview("refresh");
				      },
                      error: function(err)
                      {
						 var output = '';
                         alert(JSON.stringify(err));
						 output += '<table style="width:100%;background-color: #f1f1c1;padding:5px"><li><tr style=" border: 2px solid black"><a href="#" class="info-go">' + "Demo 1" + "</tr><td>"+ "Demo 2" + " </td><tr><td> "+ "Demo 3" +"</td></tr>"+"<tr><td>"+"Demo 4"+"</td></tr>"+'</a></tr></li></table>';
                         $('#mylist').html(output);
					  }	
					  
					  
			   });
	    });
 }
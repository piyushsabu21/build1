function CallQuestions()
{
   $(document).ready(function()
   {
	   
	     var localData = JSON.parse(localStorage.getItem('session_control'));
         var user_id = localData.data.user_id;
         var user_key= localData.data.user_key;
         var user_permissions= localData.data.user_permissions;
	     $(document).ajaxStart(function()
		 {
           $("#wait").css("display", "block");
	     });
		 $(document).ajaxComplete(function()
		 {
          $("#wait").css("display", "none");
         });
	     var storedata='';
		 
		  
		 $.ajax({
			
				 url      : websiteaddress + "/api/diagnosis/getQuestions/format/json",
				 type     : "POST",
				 datatype : "json",
			 	 data : 
				 {
					  user_id     : user_id,
				      user_key    : user_key,
					  symptom_id  : 1,
				 },
				 success: function(response)
                 {
					var output = '';
				  	
					var res = JSON.stringify(response);
					var veh_info = JSON.parse(res);
					var question_heading=veh_info.data.question.question;
				    document.getElementById("qaheading").innerhtml=question_heading;
					$('#qaheading').html(question_heading);
					localStorage.setItem("Questiontrack",question_heading);
					
					for (var i=0; i< veh_info.data.option.length; i++)
					{
					  output +='<li><a href="#" id="second_question"  data="'+veh_info.data.option[i].next_question+'"  option_id="'+veh_info.data.option[i].id+'"    data_option="'+veh_info.data.option[i].option+'"        data_solution="'+veh_info.data.option[i].solution+'" class="info-go">' + veh_info.data.option[i].option +'</a></li>';
					}
					
					$('#mylist').html(output);
				  },
                      error: function(err)
                      {
                         alert("unable to get Questions");
                        
                      }	
		     });
			 
			 
			        $(this).on("click","#second_question",function ()
			        {
                        secondQAsave=$(this).attr("data");
						var sol=$(this).attr("data_solution");
					    var secq="what do you see?" + secondQAsave;
						var opt_id=$(this).attr("option_id");
						var myans=$(this).attr("data_option")+"/";
						localStorage.setItem("Anstrack",myans);
					    localStorage.setItem("secondQAsave",secq);
						
						if(secondQAsave=="0000000000")
						{
							//question is not zero so we have solution
							//now we get question is zero
							solutionapi(sol,opt_id);
						}
						else
						{
						  QuestionApi(secondQAsave);
						}
                    });
					
					
					$(this).on("click","#nomore",function ()
			        {
						  window.location="solution.html";
                    });	
					
					$(this).on("click","#second_question1",function ()
			        {
						
                        secondQAsave=$(this).attr("data");
						var sol=$(this).attr("data_solution");
						var opt_id=$(this).attr("option_id");
						var secq="what do you see?" + secondQAsave;
						var myans=$(this).attr("data_option1");
						
						var nxtans=localStorage.getItem("Anstrack")+ myans+"/";
						localStorage.setItem("Anstrack",nxtans);
						
						localStorage.setItem("secondQAsave",secq);
						if(secondQAsave=="0000000000")
						{
							solutionapi(sol,opt_id);
						}
						else
						{
							QuestionApi(secondQAsave);
						}
                    });
					
					
			   }); 
			   
			   
			   function QuestionApi(question_id)
			   {
				    var localData = JSON.parse(localStorage.getItem('session_control'));
                    var user_id = localData.data.user_id;
                    var user_key= localData.data.user_key;
                    var user_permissions= localData.data.user_permissions;
				    $(document).ajaxStart(function()
		            {
                      $("#wait").css("display", "block");
		            });
		    
			        $(document).ajaxComplete(function()
			        {
                     $("#wait").css("display", "none");
                    });
					
					
					 $.ajax({
			
				 url      : websiteaddress + "/api/diagnosis/getQuestions/format/json",
				 type     : "POST",
				 datatype : "json",
			 	 data : 
				 {
					  user_id     : user_id,
				      user_key    : user_key,
					  symptom_id  : 1,
					  question_id : question_id
				 },
				 success: function(response)
                 {
					var output = '';
				  	var val="<table>";
					var res = JSON.stringify(response);
					var veh_info = JSON.parse(res);
					var question_heading=veh_info.data.question.question;
					document.getElementById("qaheading").innerhtml=question_heading;
					$('#qaheading').html(question_heading);
					var attach=localStorage.getItem("Questiontrack")+ question_heading;
					localStorage.setItem("Questiontrack",attach);
					
					var output='<table>';
					for (var i=0; i< veh_info.data.option.length; i++)
					{
					    
						//alert("myoption"+ veh_info.data.option[i].option);
						output +='<li><a href="#" id="second_question1" option_id="'+veh_info.data.option[i].id+'" data="'+veh_info.data.option[i].next_question+'"  data_option1="'+veh_info.data.option[i].option+'"  data_solution="'+veh_info.data.option[i].solution+'" class="info-go">' + veh_info.data.option[i].option +'</a></li>';
					}
					output+='</table>';
					$('#mylist').html(output);
				  },
                      error: function(err)
                      {
                         alert("unable to get questions");
                         //$("#wait").css("display", "none");
                      }	
		          });
				  
				  
				   
				   
			   }
			   
			   
			   //-------------------------------------solution ajax start --------------------------------------------------------/
                   function solutionapi(sol,opt_id)
			       {
					 var localData = JSON.parse(localStorage.getItem('session_control'));
                     var user_id = localData.data.user_id;
                     var user_key= localData.data.user_key;
                     var user_permissions= localData.data.user_permissions;
					
				     $(document).ajaxStart(function()
		             {
                       $("#wait").css("display", "block");
		             });
		    
			        $(document).ajaxComplete(function()
			        {
                      $("#wait").css("display", "none");
                    });
					
					
					 $.ajax({
			
				 url      : websiteaddress + "/api/diagnosis/getSolution/format/json",
				 type     : "POST",
				 datatype : "json",
			 	 data : 
				 {
					  user_id     : user_id,
				      user_key    : user_key,
					  option_id   : opt_id,
					
				 },
				 success: function(response)
                 {
					var output = '';
				  	var val="<table>";
					var res = JSON.stringify(response);
					//alert("res"+res);
					var veh_info = JSON.parse(res);
					//alert("len"+veh_info.data.option.length);
					//var question_heading=veh_info.data.question.question;
					//document.getElementById("qaheading").innerhtml=question_heading;
					$('#qaheading').html("solution");
					var output='<table>';
					for (var i=0; i< veh_info.data.length; i++)
					{
					   //var parsejarr = JSON.parse(veh_info.data);
				       output +='<li><a href="#" id="nomore"  data="'+veh_info.data[i].reason+'"    data_solution="'+veh_info.data[i].id+'" class="info-go">' + veh_info.data[i].reason +'</a></li>';
					}
					output+='</table>';
					$('#mylist').html(output);
				 },
                      error: function(err)
                      {
                         alert("Unable to get solution");
                      }	
		          });
				  
				    
				  
		    }
                    $(this).on("click","#nomore",function ()
			        {
						  
                           //window.location="solution.html";
                    });			
			   //-------------------------------------solution ajax end   -----------------------------------------------/
		}
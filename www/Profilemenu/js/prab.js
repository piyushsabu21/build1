var db1;


var dbCreated = false;
 
var scroll = new iScroll('wrapper',{
 vScrollbar : false,
 hScrollbar : false,
 hScroll : false
});
document.addEventListener("deviceready", onDeviceReady, false);

   function onDeviceReady1()
     {

		alert("Retrieve");
		 try
		 {
			 
			db1 = window.sqlitePlugin.openDatabase("Janardhan DB", "1.0", "Here Is Database", 200000);
			alert("Database opened");
			db1.transaction(successCB , errorCB);
			
			    function successCB(tx)
				{
					alert("success1111111!");
					db1.transaction(queryDB,errorCB);
				}
			
			  function queryDB(tx)
				{
					alert("select from database!");
					tx.executeSql('SELECT * FROM Prab Limit 1',[],querySuccess1,errorCB);

				}
						
			   function querySuccess1(tx,results)
				{
					   alert("Query success:");
					   var len = results.rows.length;
					   alert(" email = " + results.rows.item(0).Email);
					   alert(" password = " + results.rows.item(0).Password);
					   alert(" date = " + results.rows.item(0).Date);

					   document.getElementById("email").value=results.rows.item(0).Email;
					   document.getElementById("password").value=results.rows.item(0).Password;
					   document.getElementById("date").value=results.rows.item(0).Date;
					   document.getElementById("demo").value=results.rows.item(0).DropDown;

				 }			
						
			 
			 function errorCB(err)
			 {
				alert("Error processing SQL: "+err.code);
			 }
			
			
			
			
			
	     }
		 catch(err)
		 {
			 alert(err);
		 }
	 }
		
	 
	 
	 
	 
	 


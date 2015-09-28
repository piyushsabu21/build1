var db;
var dbCreated = false;
 
var scroll = new iScroll('wrapper',{
 vScrollbar : false,
 hScrollbar : false,
 hScroll : false
});
document.addEventListener("deviceready", onDeviceReady, false);



     function onDeviceReady()
     {
         alert("data onDeviceReady");
		 try
		 {
			 var db = window.sqlitePlugin.openDatabase("Janardhan DB", "1.0", "Here Is Database", 200000);
			 alert("In DataBase");
	     }
		 catch(err)
		 {
			 alert(err);
		 }
        
		 db.transaction(populateDB, errorCB, successCB);
     }

   
      function populateDB(tx)
     {
         alert("data onDeviceReady123");
         tx.executeSql('CREATE TABLE IF NOT EXISTS Prab (id INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT NOT NULL, Password TEXT NOT NULL ,Date TEXT NOT NULL ,DropDown TEXT NOT NULL  )');
         alert("tx ex error");
		 //---------------------------
		 tx.executeSql("INSERT INTO Prab (Email, Password , Date , DropDown) VALUES (?,?,?,?)", [ document.getElementById("email").value , document.getElementById("password").value ,document.getElementById("date").value, document.getElementById("demo").value]);
		 alert( document.getElementById("email").value +" Email inserted");
         alert( document.getElementById("password").value +" password inserted");
         alert( document.getElementById("date").value +" Date inserted");
         alert( document.getElementById("demo").value +" demo inserted");
		 //----------------------
		 //tx.executeSql('SELECT * FROM Prab Limit 1',[],querySuccess1(),errorCB);
		 queryDB();
	}

     function errorCB(err)
     {
        alert(" SQl Error processing SQL: "+err.code);
     }

     function successCB()
     {
         alert("success1111111!");
     }
	 
	 function  JanardhanError(err)
	 {
		 alert("Janardhan Error: "+err.code);
	 }


 //select all from SoccerPlayer
    function queryDB(tx,results)
    {
        alert("select from database!");
        tx.executeSql('SELECT * FROM Prab Limit 1',[],querySuccess1,JanardhanError);

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
   


	 
	 
	 

	 
	 


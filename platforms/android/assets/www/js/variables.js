var localData1 = localStorage.getItem('session_control');
localStorage.setItem('session_control', localData1);
					 
 var localData = JSON.parse(localStorage.getItem('session_control'));
var user_id = localData.data.user_id;
var user_key= localData.data.user_key;
var user_permissions= localData.data.user_permissions;

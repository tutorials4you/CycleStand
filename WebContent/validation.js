
function myFunction() {
	var str = document.getElementById("password").value;
	var n = str.length;
	alert(n);
	var p;
	switch(n) {
	case 1:    	
		p = str+"00000";
		alert(p);
		break;
	case 2:
		p=str+"0000";
		alert(p);
		break;
	case 3:
		p=str+"000";
		alert(p);
		break;
	case 4:
		p=str+"00";
		alert(p);
		break;
	case 5:
		p=str+"0";
		alert(p);
		break;
	default:
		p=str
		alert(str); 
	break;    
	}  
	document.getElementById("password").value =p ;
}


function dateChecker(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd
	} 
	if(mm<10){
		mm='0'+mm
	} 
	var today = mm+'/'+dd+'/'+yyyy;
	var date3 = document.getElementById("date").value;
	var date1 = new Date(date3);
	var date2 = new Date(today);
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	alert("DIFFERENCE Of Days "+diffDays);
	if(diffDays <= 60){
		return true;
	} else
	{
		return false;
	}
}
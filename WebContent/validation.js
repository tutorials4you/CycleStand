
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
// email validation


function checkemail(){
	var valemail = document.getElementById("email").value;
	if (valemail.indexOf('@') == -1 || valemail == '') {

		document.getElementById("error").innerHTML = "* Email is invalid";	
		
		return;
	}else {
		document.getElementById("error").innerHTML = " ";	
	}
	return  valemail;
		
}
function checkname(){
	var valname = document.getElementById("name").value;
	var event = /\w/g;
	var noevent = valname.match(/\W/g);
	var res = valname.match(event);
	if (res == null || noevent != null || valname =='' ){
		
		document.getElementById("error_name").innerHTML = "* Name is invalid";
		return;
	} 
	else{
		document.getElementById('error_name').innerHTML = "";
	}
	return valname;

}

function phonevalidate(){
	var phonee = document.getElementById("phone").value;
	var numberphone = /\d/g;
	
	var get = phonee.match(numberphone);
	if (get == null || phonee == "" || phonee.match(/\D/g) != null ||  phonee.match(/\d/) != 0 || phonee.length < 9) {
		document.getElementById("error_phone").innerHTML = "* Phone is invalid";
	}
	else {
		document.getElementById("error_phone").innerHTML = "";
	}
}
function Birthday(){
   var bir = document.getElementById("birthday").value;
  
   document.getElementById("er_date").innerHTML = " " + bir;
}

function checkit(){
	var checknow = document.getElementById("checkall").checked;
	if (!checknow) {
		document.getElementById("check_error").innerHTML = "invalid";

	}else {
		document.getElementById("check_error").innerHTML = "";
	}
	return checknow;
}

document.getElementById("btn").onclick = function(){
	var checkgen = document.getElementsByName("gender");
	var em = document.getElementById("email");
	for( var i of checkgen){
		if(i.checked === true){
			alert(i.value);

		}
	}
	for(var ie of em){
		if(ie.value == "")
			alert("ok");
	}
}
function address(){
 	var checkadd = document.getElementById("inputAddress").value;
 	if(checkadd == ''){
 		document.getElementById("er_add").innerHTML = " * The address cannot be empty, fill it in"
 	}
}

// var get = document.getElementById("rate").value;
// var rate_value;
// if(rate == 'Male'){
// 	rate_value = document.getElementById("Males").value;
// }else if(rate == 'Female'){
// 	rate_value = document.getElementById("Females").value;
// }
// document.getElementById("displayinfo").innerHTML = rate_value;


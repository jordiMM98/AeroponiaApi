$(document).ready(function(){
	

		$('#logoutButton').click(function() {
			console.log("Intentando cerrar Sesión");
			$.ajax({
 			cache:false,
			headers:{"Authorization": "Token "+document.cookie},
			
			
			type:"GET",
			url:  "http://sistemas.smartin.tecnm.mx:443/users/logout/",
			
			success: function(response, responseText){
				document.cookie.split(';').forEach(function(c) { document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;'; }); 

				window. location. href = "../index.html";

				console.log(response);
				alert(response.message);
				
			},
			error: function(response, textstatus, errorThrow){
				
				console.log(response.responseText);
				alert("Ocurrio un error intentelo de nuevo");
				
			}

		});
			return false;
		});

// End of $(function () {
	});
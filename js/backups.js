		$(document).ready(function(){
('#backup').click(function() {

		console.log("creando backup");

		$.ajax({
			type:"GET",
			headers:{"Authorization": "Token "+document.cookie},
			cache:false,
			url: 'http://sistemas.smartin.tecnm.mx:443/users/backup/' ,
			success: function(response, responseText) {

				console.log(response);
				alert(response.msg);

			},
			error: function(response, textstatus, errorThrow){

				alert(response.responseText);
				



			}

		});
		return false;
	});
});
	


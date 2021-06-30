$(document).ready(function(){
		$.ajax({
			headers:{"Authorization": "Token "+document.cookie},
			url: 'http://sistemas.smartin.tecnm.mx:443/users/get-user/',
			cache: false,
			success: function(data) {
				
$('input[name=name]').val(data.name);
$('#key').val(data.key);
$('#maternal_surname').val(data.maternal_surname);
$('#paternal_surname').val(data.paternal_surname);

			


			
				

			},

		});	});
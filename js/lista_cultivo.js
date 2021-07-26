////lista de usuarios
	//$('#id01').click(function() {
		
		$(document).ready(function(){
			$.ajax({
		headers:{"Authorization": "Token "+document.cookie},
		cache:false,
		url: 'http://sistemas.smartin.tecnm.mx:443/crops/list-crops/' ,
		success: function(data) {

			var row = $(".caja");
			var r = $(".seleccion");
			


			
			$.each(data, function(index, valor){
				row.append('<option value="'+valor.id+'">'+ valor.name_crop+ '</option>');
				r.append('<option value="'+valor.id+'">'+ valor.name_crop+ '</option>');


			});
		},

	});
	});
		
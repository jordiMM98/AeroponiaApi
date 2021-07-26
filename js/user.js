
		$(document).ready(function(){
		$.ajax({
			headers:{"Authorization": "Token "+document.cookie},
			url: 'http://sistemas.smartin.tecnm.mx:443/users/get-user/' ,
			cache: false,
			
			success: function(data) {
				

					var row = "<div>"+
					'<p style="color:black;">Foto de perfil </p>'+'<img style="width:150px; height:150px; border-radius:150px;" src="'+"http://sistemas.smartin.tecnm.mx:443/"+data.image + '"/>'+
					//https://reqres.in/img/faces/2-image.jpg
					//https://reqres.in/img/faces/9-image.jpg


					//'<img style="width:100px; height:100px; border-radius:150px;" src="'+data.image+'"/>'+
					'<hr>'+
					'<p style="color:black;">Nombre: </p>'+'<label id="nom">'+data.name+ '</label>'+'<br>'+
					'<p style="color:black;">Apellido Paterno: </p>'+'<label>'+data.paternal_surname+ '</label>'+'<br>'+
					'<p style="color:black;">Apellido Materno: </p>'+'<label>'+data.maternal_surname+ '</label>'+'<br>'+
					'<p style="color:black;">Matrícula ó Número de Trabajador: </p>'+'<label>'+data.key+ '</label>'+'<br>'+

					

					"</div>";


					$("#div>p").append(row);


					 
                              


					









			
				document.querySelector(".loading").style.display = 'none';

			},

		});	});


	




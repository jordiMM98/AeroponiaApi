$(document).ready(function(){
			$("#crop_id").click(function() {
				
			var id = document.getElementById("crop_id").value;
			

			console.log(id);
		$.ajax({
			headers:{"Authorization": "Token "+document.cookie},
			cache:false,
			url: 'http://sistemas.smartin.tecnm.mx:443/crops/list-date/'+id+'/' ,
			DataType:"json",
			success: function(data) {
				console.log(data);
			console.log(data[0]);
			var fechasiembra = data[0];
			
			console.log(fechasiembra.seedtime);
	
			$('.seedtime').val(fechasiembra.seedtime);
			$('#date').val(fechasiembra.standby_time);

		
			$("#date").prop("max",fechasiembra.standby_time);
			$("#date").prop("min", fechasiembra.seedtime);
			$("#datee").prop("min", fechasiembra.seedtime);
			$("#datee").prop("max",fechasiembra.standby_time);
			$("#s").prop("max",fechasiembra.standby_time);

			//$('input[class="seedtime"]').prop("min",fechasiembra.seedtime);


			
			//document.getElementById("s").setAttribute("min", fechasiembra.seedtime);
			document.getElementById("date").setAttribute("min", fechasiembra.seedtime);
			//document.getElementById("datee").setAttribute("min", fechasiembra.seedtime);


			},error: function(response, textstatus, errorThrow){
				
				console.log(response.responseText);
				
			
				
			}

		});
			return false;
		});


	});
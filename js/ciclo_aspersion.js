////lista de usuarios
	//$('#id01').click(function() {
		
		$(document).ready(function(){
			$(".caja").click(function() {
				
			var id = document.getElementById("crop_id").value;
			

			console.log(id);
			$.ajax({
		headers:{"Authorization": "Token "+document.cookie},
		cache:false,
		url: 'http://sistemas.smartin.tecnm.mx:443/crops/detail/sprinkling/'+id+'/' ,
		success: function(data) {
			console.log(data);
			if (data.detail) {
				var caja = document.getElementById("mensaje");
				caja.innerHTML = data.detail;
				caja.style.background = "#F8D7DA";
				caja.style.padding = "5px";
				caja.style.color = "#721C24	";
				caja.style.fontSize = "15px";
				caja.style.borderRadius = "5px";
				caja.style.fontWeight ="bold";
				 $("#cycle_duration").prop("disabled", true);
				 $("#standby_time").prop("disabled", true);
				 $('#a').prop('disabled', true);
				 $('#r').prop('disabled', true);
			}
		else{
			var caja = document.getElementById("mensaje");

			caja.innerHTML = " ";
			caja.style.background = "white";
			$("#cycle_duration").prop("placeholder"," ");
			$("#standby_time").prop("placeholder"," ");
			 $("#cycle_duration").prop("disabled", false);
			 $("#standby_time").prop("disabled", false);
			 $('#a').prop('disabled', false);
				 $('#r').prop('disabled', false);
		}

$('#cycle_duration').val(data.cycle_duration).css("fontWeight","bold").css("fontSize","18px");
$('#standby_time').val(data.standby_time).css("fontWeight","bold").css("fontSize","18px");

 $("#modalc").on('submit', function(e) {

        e.preventDefault();
        var id =data.id;

       
        $.ajax({
         headers:{"Authorization": "Token "+document.cookie},
         url: 'http://sistemas.smartin.tecnm.mx:443/crops/update-sprinkling/'+data.id+'/' ,
         method: "Put",
         data: new FormData(this),
         contentType: false,
         cache: false,
         processData: false,
         success: (response,jqXHR, textStatus,responseText) => {
          console.log(response);
          console.log(jqXHR);
           console.log(responseText);
          
          alert("Se actualizaron los datos correctamente");

          window.location.href = window.location;

        },

        error: (jqXHR, textStatus, errorThrow) => {
          console.log(jqXHR.responseText);
         

        }});
      });  

			
		},

	});
			});
	});
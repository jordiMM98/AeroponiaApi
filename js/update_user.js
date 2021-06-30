		$(document).ready(function(){
			$("#modalf").on('submit', function(e) {
        e.preventDefault();
        $.ajax({
         headers:{"Authorization": "Token "+document.cookie},
         url: "http://sistemas.smartin.tecnm.mx:443/users/update_user/" ,
         method: "Put",
         data: new FormData(this),
         contentType: false,
         cache: false,
         processData: false,
         success: (response,jqXHR, textStatus) => {
          console.log(jqXHR);
          
          alert("Los datos se actualizaron correctamente, recargue la pagina para visualizar los cambios");
       
        },

        error: (jqXHR, textStatus, errorThrow) => {
          console.log(jqXHR.responseText);
          
          alert(jqXHR.responseText);
         

        }});
      });	
    });
		
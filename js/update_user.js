		$(document).ready(function(){
			$("#modalf").bind('submit', function() {
        
        $.ajax({
         headers:{"Authorization": "Token "+document.cookie},
         url: "http://sistemas.smartin.tecnm.mx:443/users/update_user/" ,
         method: "Put",
         data: new FormData(this),
         cache: false,
         success: (response,jqXHR, textStatus) => {
          console.log(jqXHR);
          
          alert("Los datos se actualizaron correctamente, recargue la pagina para visualizar los cambios");
          window.location.href = window.location;
        },

        error: (jqXHR, textStatus, errorThrow) => {
          console.log(jqXHR.responseText);
          
          alert(jqXHR.responseText);
         

        },
      });
      return false;
    });

  });
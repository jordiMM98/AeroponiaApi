

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
         success: (jqXHR, textStatus) => {
          console.log(jqXHR);
          alert("Se actualizaron los datos correctamente");
          window.location.href = window.location;

        },

        error: (jqXHR, textStatus, errorThrow) => {
          console.log(jqXHR.responseText);
          
          alert(jqXHR.responseText);

        }});
      });  
    });
    
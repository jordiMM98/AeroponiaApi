

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
           console.log(response);
          alert(response.msg);
         
         
         // $('#name_crop').val(data.name_crop).css("fontWeight","bold").css("fontSize","18px");

         window.location.href = window.location;
        },

        error: (response,jqXHR, textStatus, errorThrow) => {
          console.log(jqXHR);
          console.log(response);
          
          alert("Hubo un error intentelo mas tarde ");

        }});
      });  
    });
    
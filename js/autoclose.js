
var timeout;
document.onmousemove = function(){ 
    clearTimeout(timeout); 
    contadorSesion(); //aqui cargamos la funcion de inactividad
} 

function contadorSesion() {
    timeout = setTimeout(function () {
        $.confirm({
            title: 'Alerta de Inactividad!',
            content: 'La sesión esta a punto de expirar.',
            autoClose: 'expirar|20000',//cuanto tiempo necesitamos para cerrar la sess automaticamente
            type: 'red',
            icon: 'fa fa-spinner fa-spin',
            buttons: {
                expirar: {
                    text: 'Cerrar Sesión',
                    btnClass: 'btn-red',
                    action: function () {
                        $.alert('La sesión ha expirado');
                        $.ajax({
                            cache:false,
                            headers:{"Authorization": "Token "+document.cookie},
                            type:"GET",
                            url: "http://sistemas.smartin.tecnm.mx:443/users/logout/",
                            success: function(response, responseText){
                                document.cookie.split(';').forEach(function(c) { document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;'; }); 

                                window. location. href = "../index.html";

                                console.log(response);
                                alert(response.message);

                            },
                            error: function(response, textstatus, errorThrow){

                                console.log(response.responseText);
                                alert("Ocurrio un error intentelo de nuevo");

                            }
                        });
                        return false; 
                    }
                },
                permanecer: function () {
                    contadorSesion(); //reinicia el conteo
                    $.alert('La Sesión ha sido reiniciada!'); //mensaje
                    window.location.href = window.location;
                }
            }
        });
    },900000);//3 segundos para no demorar tanto 
}

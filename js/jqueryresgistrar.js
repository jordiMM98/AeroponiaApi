								$(document).ready(function() {
	//variables
	var pass1 = $('[name=password2]');
	var pass2 = $('[name=password]');
	var confirmacion = "Las contraseñas si coinciden";
	var longitud = "La contraseña debe estar formada entre 8-10 carácteres (ambos inclusive) La contraseña al menos debería tener una minuscula, una mayuscula y un numero";
	var negacion = "No coinciden las contraseñas";
	var vacio = "La contraseña no puede estar vacía";
	//oculto por defecto el elemento span
	var span = $('<span id="passstrength"></span>').insertAfter(pass2);
	var span2 = $('<span id="passstrength"></span>').insertAfter(pass1);
	
	span.hide();
	//función que comprueba las dos contraseñas
	function coincidePassword(){
	var valor1 = pass1.val();
	var valor2 = pass2.val();
	//muestro el span
	span.show().removeClass();
	span2.show().removeClass();
	//condiciones dentro de la función
	if(valor1 != valor2){
	span.text(negacion).addClass('negacion');	
	span2.text(negacion).addClass('negacion');	
	}
	if(valor1.length==0 || valor1==""){
	span.text(vacio).addClass('negacion');
	span2.text(vacio).addClass('negacion');		
	}
	if(valor1.length<=7 || valor1.length>10){
	span.text(longitud).addClass('negacion');	
	span2.text(longitud).addClass('negacion');
	}
	if(valor1.length>=8 && valor1==valor2){
	span.text(confirmacion).removeClass("negacion").addClass('confirmacion');
	span2.text(confirmacion).removeClass("negacion").addClass('confirmacion');
	}
	}
	//ejecuto la función al soltar la tecla
	pass2.keyup(function(){
	coincidePassword();
	});
});


$(document).ready(function () {
	//CheckBox mostrar contraseña
	$('#ShowPassword').click(function () {
		$('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
	});
});
$(document).ready(function () {
	//CheckBox mostrar contraseña
	$('#ShowPassword').click(function () {
		$('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
	});
});


	




//creamos una funcion con tres variables donde guardamos Expresiones regulares
//para cada tipo de contraseña 
//
	$('#password2').keyup(function(e) {
		var negacion = "No coinciden las contraseñas";
		var confirmacion = "Las contraseñas si coinciden";
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		//si se cumple la condicion correspondiente muetra lo siguiente segun sea el caso  
		if (false == enoughRegex.test($(this).val())) {
			$('#passstrength').html('Más caracteres.');
		} else if (strongRegex.test($(this).val())) {
			$('#passstrength').className = 'ok';
			$('#passstrength').html('Fuerte!');
		} else if (mediumRegex.test($(this).val())) {
			$('#passstrength').className = 'alert';
			$('#passstrength').html('Media!');
		} else {
			$('#passstrength').className = 'error';
			$('#passstrength').html(' La contraseña al menos debería tener una minúscula, una mayúscula y un numero y como minimo 8 caracteres.');
			//$('#passstrength').addClass('negacion');
		}
		return true;
	});


//creamos una funcion con tres variables donde guardamos Expresiones regulares
//para cada tipo de contraseña 
//
	$('#username').keyup(function(e) {
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		  var pswd = $(this).val();

		//si se cumple la condicion correspondiente muetra lo siguiente segun sea el caso  
		if ( pswd.length <= 2) {
			$('#texto').html('Más caracteres.').css("color","red");
		
		} else {
			$('#texto').className = 'error';
			$('#texto').html('Correcto!').css("color", "green");
		}
		return true;
	});

	





	$(document).ready(function() {

		$('input[type=text]').keyup(function() {
        // set password variable
        var pswd = $(this).val();
        //validate the length
        if ( pswd.length < 2 ) {
        	$('#length').removeClass('valid').addClass('invalid');
        } else {
        	$('#length').removeClass('invalid').addClass('valid');
        }

        //validate letter
        if ( pswd.match(/[A-z]/) ) {
        	$('#letter').removeClass('invalid').addClass('valid');
        } else {
        	$('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
        	$('#capital').removeClass('invalid').addClass('valid');
        } else {
        	$('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/\d/) ) {
        	$('#number').removeClass('invalid').addClass('valid');
        } else {
        	$('#number').removeClass('valid').addClass('invalid');
        }

    }).focus(function() {
    	$('#pswd').show();
    }).blur(function() {
    	$('#pswd').hide();
    });

});




	$(document).ready(function() {

		$('input[type=password]').keyup(function() {
        // set password variable
        var pswd = $(this).val();
        //validate the length
        if ( pswd.length < 8 ) {
        	$('#length').removeClass('valid').addClass('invalid');
        } else {
        	$('#length').removeClass('invalid').addClass('valid');
        }

        //validate letter
        if ( pswd.match(/[A-z]/) ) {
        	$('#letter').removeClass('invalid').addClass('valid');
        } else {
        	$('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
        	$('#capital').removeClass('invalid').addClass('valid');
        } else {
        	$('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/\d/) ) {
        	$('#number').removeClass('invalid').addClass('valid');
        } else {
        	$('#number').removeClass('valid').addClass('invalid');
        }

    }).focus(function() {
    	$('#pswd_info').show();
    }).blur(function() {
    	$('#pswd_info').hide();
    });

});




	$('#Enviar').click(function() {

	$('#username').val('');
	$('#password').val('');
    $('#password2').val('');
    $('#name').val('');


	});
	
	
	$("#formulario").on('submit', function(e) { 
		$('#username').val('');

		e.preventDefault();
		$.ajax({
			url: "https://api-aero.herokuapp.com/users/created-user/",// cadena que tine la url a caragr de la API(obligatoria)
			method: "POST",///los datos los somete a procesar un recurso especifico
			data: new FormData(this),   //sereliza el formulario  
			contentType: false,//dice al cliente que tipo de contenido será retornado.
			cache: false,//establece que no guarde la cache en el servidor
			processData: false,//Por defecto, cada objeto que no sea un string y sea pasado de otro documento, sera transformado en cadena. Para evitar que esto pase, este parametro se puede poner en false
			success: (jqHXR, textStatus) => {//contiene el contenido resultante  si la llamada se realiza satisfactoriente
         
            alert("La cuenta ha sido creada.");

			},

			error: (jqXHR, textStatus, errorThrow) => { //llamamos una funcion de callback  despues de procesar la funcion
				console.log(jqXHR.responseText);//contiene el estatus d ela llamada 
				alert("Hubo un error no pudo crearse el usuario");
				alert(jqXHR.responseText);
				

			}
	
		});
		return false;
	});
//pueba 2 

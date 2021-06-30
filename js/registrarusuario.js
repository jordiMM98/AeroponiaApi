



	//función que muetras la contraseña 
	function mostrarPassword(){
		var cambio = document.getElementById("password2");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
		}else{
			cambio.type = "password";
			$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
		}
	} 
	
	


	

	//función que muetras la contraseña 
	function mostrar(){
		var cambio = document.getElementById("password");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
		}else{
			cambio.type = "password";
			$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
		}
	} 
	
	




	
	window.onscroll=function(){
		if(document.documentElement.scrollTop > 500){
			document.querySelector('.go-top-container')
			.classList.add('show');
			}else{
				document.querySelector('.go-top-container')
				.classList.remove('show');
				
			
		}
		
	}
	document.querySelector('.go-top-container')
	.addEventListener('click', ()=>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		
	});


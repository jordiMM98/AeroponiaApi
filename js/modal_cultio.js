//Obtener el modal
var modal = document.getElementById('cultivo');

//Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo.
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
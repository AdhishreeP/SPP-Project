var i = 0;
var txt = "Engage in collaborative research through effective communication, resource sharing, and interdisciplinary cooperation to achieve innovative solutions and advancements in knowledge!!!";
var speed = 100;


function typeWriter() {
	var type = document.getElementById("type");
	var cursor = document.getElementById("cursor");
	if (i < txt.length) {
		type.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	} else {
		cursor.style.display = "none";
	}
}
window.addEventListener('load', typeWriter);
let historialColores = ['#FF5733'];

function cambiarColor() {
  // Generar un color aleatorio en formato hexadecimal
  const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = color;
  const cuadro = document.getElementById('cuadro');
  cuadro.textContent = color;
  historialColores.push(color);
}

function mostrarHistorial() {
  const historialDiv = document.getElementById('historial');
  historialDiv.innerHTML = '<strong>Historial de colores:</strong><br>' + historialColores.join('<br>');
  historialDiv.style.display = 'block';
}

// Inicializar el color de fondo al cargar la página
window.onload = function() {
  document.body.style.backgroundColor = historialColores[0];
  const cuadro = document.getElementById('cuadro');
  cuadro.textContent = historialColores[0];
};


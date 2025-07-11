# PARCIAL_WEB
## Métodos de JavaScript usados:
document.getElementById('id'): Selecciona un elemento del HTML por su id.
document.body.style.backgroundColor = color: Cambia el color de fondo de la página.
element.textContent = valor: Cambia el texto que se muestra dentro de un elemento.
Array.push(valor): Agrega un nuevo valor al final de un arreglo.
Math.random(): Genera un número aleatorio entre 0 y 1.
Math.floor(): Redondea un número hacia abajo.
toString(16): Convierte un número a formato hexadecimal.
padStart(6, '0'): Rellena una cadena con ceros a la izquierda hasta tener 6 caracteres.
innerHTML: Permite modificar el contenido HTML de un elemento.
Funciones definidas:
cambiarColor():
Genera un color aleatorio, cambia el fondo de la página, actualiza el cuadro con el nuevo color y lo agrega al historial.

mostrarHistorial():
Muestra el historial de colores usados en el elemento con id historial.

window.onload:
Se ejecuta al cargar la página para establecer el color inicial del fondo y del cuadro.
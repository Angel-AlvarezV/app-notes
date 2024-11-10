#Puntos implementados en la aplicación

•	Después de guardar la nota, se debe redireccionar al usuario al indice, que ya incluya la nueva nota guardada

•	Mejorar responsividad del índice:
  •	se espera que se muestre 1 nota por fila cuando se vea en dispositivos móviles, 2 cuando se vea en tablets y 3 cuando se vea en desktops

•	Se deberá dividir el índice en secciones, separando las notas segun el mes en el que fueron creadas
  •	Por sección, mostrar un encabezado con el mes mostrado, y el conjunto de notas que corresponden

•	Agregar un "tooltip" al botón de Nuevo con el texto "Nueva nota"

•	Agregar un botón en el encabezado que permita cambiar a modo oscuro la aplicación
  •	Se espera que por lo menos, el background sea de colores oscuros y el texto tenga un color que cause que el texto sea legible
  •	Se considerará como punto extra si la aplicación mantiene guardada la preferencia de tema al cerrar y abrir ventana del navegador

•	Agregar un botón en el encabezado que permita cambiar el idioma de la aplicación
  •	Se espera que las opciones sean "Español" / "English", y que cambie el texto del encabezado, los mensajes de error, los placeholders y los tooltips
  •	Se considerará como punto extra si la aplicación mantiene guardada la preferencia de idioma al cerrar y abrir ventana del navegador

•	Agregar seleccionador de orden a mostrar de las notas
  •	Se espera que las opciones sean "Mas reciente a mas antiguo", "mas antiguo a mas reciente", "alfabetico A-Z", "alfabetico Z-A"
  •	Se considerará como punto extra si la aplicación mantiene guardada la preferencia de orden al cerrar y abrir ventana del navegador

•	Agregar código para evitar que se guarden dos notas con el mísmo título
  •	Al guardar la nota, debe evitar el guardado y mostrar mensaje de error indicando que ya hay una nota con ese título
  •	Se considerará como punto extra si la validación se lleva a cabo con un unique constraint en base de datos

•	Utilizar los seeds de la aplicación para asegurarse que se crearán 200 notas distintas al hacer una nueva instalación de la aplicación
  •	Se considerará como punto extra si los seeds son generados de forma dinámica (que los contenidos de las notas sean marcadamente distintos unos con otros)

•	Convertir el campo "Buscar por título" a un campo genérico para "Buscar"
  •	Permitirá que se busque tanto en el título de la nota como en el contenido de la misma
  •	Se espera que todos los criterios mencionados en la primera parte se respeten tambien para esta mejora

•	Se espera que la ruta raiz del proyecto "http://localhost:3000/" muestre la aplicación, en lugar de redirigir el navegador a "http://localhost:3000/notes"
  •	Asimismo, todas las rutas de "/notes/" deberán ser accesibles desde la raiz en lugar de prefijarlas como "/notes/" en el URL

 • Se reparan archivos docker









  

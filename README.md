#La aplicación en este momento debe funcionar con los siguientes puntos, el candidato debe confirmar que todos los puntos ya fueron aplicados, y corregir los que no fueron implementados:


* Un encabezado, color rojo, donde esté el nombre de la aplicación.
En el encabezado, el título de la aplicación debe ser un vínculo para mandar al usuario al índice
El índice debe mostrar las notas guardadas:
Por default, las notas deben estar ordenadas de más reciente a más antigua
La fecha y hora de creación en la parte superior derecha de cada nota (debe estar en la zona horaria del navegador)
Un campo para buscar por título:
Encontrará las notas que contengan lo buscado en cualquier parte del título.
La búsqueda no debe hacer distinción entre mayúsculas o minúsculas.
Si hay múltiples palabras buscadas, debe buscar que todas las palabras estén presentes en el título, sin importar su orden.
Debe poder buscar caracteres especiales también ($, _, \, *, %)
Al hacer clic en cada nota, debe enviar a la vista completa de la nota, donde:
se debe mostrar el cuerpo de la nota,
respetando saltos de línea en caso de tenerlos,
con un ícono indicado para borrar la nota,
y otro para editarla.
Debe haber un botón de Nueva nota en el índice, también color rojo, que envíe al usuario a la interfaz de creación de notas.
Al crear o editar una nota:
Si el titulo o el cuerpo de la nota están vacíos, no debe guardarse la nota.
Si el titulo y el cuerpo tienen contenido, debe poder crearse la nota.
El cuerpo de la nota debe permitir saltos de línea
Si el cuerpo de la nota es muy grande, se debe ajustar automáticamente para mostrar todo el contenido.
Después de guardar la nota, se debe redireccionar al usuario al indice, que ya incluya la nueva nota guardada


Asimismo, se le pedirá a los candidatos que integren las siguientes nuevas funcionalidades

Mejorar responsividad del índice:
se espera que se muestre 1 nota por fila cuando se vea en dispositivos móviles, 2 cuando se vea en tablets y 3 cuando se vea en desktops
Se deberá dividir el índice en secciones, separando las notas segun el mes en el que fueron creadas
Por sección, mostrar un encabezado con el mes mostrado, y el conjunto de notas que corresponden
Agregar un "tooltip" al botón de Nuevo con el texto "Nueva nota"
Agregar un botón en el encabezado que permita cambiar a modo oscuro la aplicación
Se espera que por lo menos, el background sea de colores oscuros y el texto tenga un color que cause que el texto sea legible
Se considerará como punto extra si la aplicación mantiene guardada la preferencia de tema al cerrar y abrir ventana del navegador
Agregar un botón en el encabezado que permita cambiar el idioma de la aplicación
Se espera que las opciones sean "Español" / "English", y que cambie el texto del encabezado, los mensajes de error, los placeholders y los tooltips
Se considerará como punto extra si la aplicación mantiene guardada la preferencia de idioma al cerrar y abrir ventana del navegador
Agregar seleccionador de orden a mostrar de las notas
Se espera que las opciones sean "Mas reciente a mas antiguo", "mas antiguo a mas reciente", "alfabetico A-Z", "alfabetico Z-A"
Se considerará como punto extra si la aplicación mantiene guardada la preferencia de orden al cerrar y abrir ventana del navegador
Agregar código para evitar que se guarden dos notas con el mísmo título
Al guardar la nota, debe evitar el guardado y mostrar mensaje de error indicando que ya hay una nota con ese título
Se considerará como punto extra si la validación se lleva a cabo con un unique constraint en base de datos
Utilizar los seeds de la aplicación para asegurarse que se crearán 200 notas distintas al hacer una nueva instalación de la aplicación
Se considerará como punto extra si los seeds son generados de forma dinámica (que los contenidos de las notas sean marcadamente distintos unos con otros)
Convertir el campo "Buscar por título" a un campo genérico para "Buscar"
Permitirá que se busque tanto en el título de la nota como en el contenido de la misma
Se espera que todos los criterios mencionados en la primera parte se respeten tambien para esta mejora
Se espera que la ruta raiz del proyecto "http://localhost:3000/" muestre la aplicación, en lugar de redirigir el navegador a "http://localhost:3000/notes"
Asimismo, todas las rutas de "/notes/" deberán ser accesibles desde la raiz en lugar de prefijarlas como "/notes/" en el URL

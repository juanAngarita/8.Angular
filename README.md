# 8.Introducción a Angular 19

## Decripción
Página creada para el curso de Desarrollo web. Un video mostrando al detalle el desarrollo se encuentra en la siguiente URL: 
<a href='https://youtu.be/zN__fAaZ6kg'> Curso Angular de Cero Actualizado | Primer CRUD funcional | Desarrollo web </a>.

Los temas que se explican son los siguientes:
- Componentes
- Condicionales y ciclos
- Servicios
- Inyección de dependencias
- entradas y salidas en componentes

Puede acceder a una demo a través del siguiente enlace: <a href='https://juanangarita.github.io/8.Angular/'>Sistema estudiantes Angular</a>.


## Ramas
Encontrará 4 ramas en el repositorio: main/final/video/gh-pages
- Main y final: contiene la versión final de la página con algunos detalles o modificaciones menores respecto al video. Tienen el mismo codigo
  -  Modificaciones estéticas
  -  Se completa el eliminar
  -  El estar activo/inactivo se vuelve un atributo, eliminando la necesidad de tener 2 arreglos
  -  Se agrega bootstrap para los estilos
  -  Posibilidad de reactivar un estudiante
  -  Se agrega imagen auxiliar en caso de que el usuario no tenga foto de perfil
  -  Se agrega lógica para mostrar detalles estéticos en caso de que el usuario haya completado los creditos académicos.
- video: contiene la página realizada en el video.
- gh-pages: Rama generada para despliegue en Github pages.
  
## Consideraciones
La vista de la página puede variar entre tipos de pantallas y resoluciones. 
Tenga en cuenta que no se está usando ninguna base de datos. Aunque el servicio es un singleton y permite cierta persistencia, si se recarga la página los datos volverán a ser los originales. 

<img width="1871" height="1039" alt="Captura de pantalla 2026-06-10 a la(s) 2 02 15 p m" src="https://github.com/user-attachments/assets/516cae70-4dd9-4d9b-ba13-95fee452715c" />
<img width="1868" height="1037" alt="Captura de pantalla 2026-06-10 a la(s) 2 03 06 p m" src="https://github.com/user-attachments/assets/7794110c-87b3-42b5-969e-734ba7e78c2f" />
<img width="1864" height="1036" alt="Captura de pantalla 2026-06-10 a la(s) 2 02 40 p m" src="https://github.com/user-attachments/assets/93f0dffb-33b2-453c-a749-5314c937b864" />


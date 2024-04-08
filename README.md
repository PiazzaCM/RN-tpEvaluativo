#Ejemplo de Inicio de Sesión con React, useState, useEffect y useContext
Este es un ejemplo de un formulario de inicio de sesión en React utilizando los hooks useState, useEffect y useContext para manejar el estado de autenticación.

El proyecto consta de dos componentes:

-AuthProvider: Este componente es un provee el contexto que gestiona el estado global de autenticación.
-Utiliza el hook useState para mantener un estado de autenticación y proporciona funciones login() y logout() para modificar este estado.

-Login: Este componente contiene el formulario de inicio de sesión. 
-Utiliza el hook useContext para acceder al contexto de autenticación proporcionado por el provider. 

-Utiliza también el hook useEffect para mostrar un mensaje si el usuario ya está autenticado.


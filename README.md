# PokeApp – React Functional Application

PokeApp es una aplicación construida con React funcional que permite buscar Pokémons desde la PokeAPI, visualizar detalles, crear nuevos Pokémons mediante un formulario y mantenerlos persistentes mediante LocalStorage.
El proyecto utiliza hooks clave como useState, useEffect, useContext, useParams, así como conceptos como lifting state up, debounce y enrutado con React Router.

## 🚀 Descripción general

La aplicación está dividida en varias secciones accesibles mediante React Router:

/ → Página principal que incluye:

SearchContainer: componente padre encargado de gestionar el estado de búsqueda y los resultados.

Search: input y botón para realizar búsquedas de Pokémon por nombre o ID.

PokemonList: listado de resultados, tanto de la API como de pokémons creados por el usuario.

/new → Página de creación de nuevos Pokémon:

PokemonForm: formulario controlado con react-hook-form para registrar pokémons personalizados.

/pokemon/:id → Página de detalles:

PokemonDetails: componente que muestra información extendida de un Pokémon, obtenida mediante parámetros de ruta (useParams) y query params.

La navegación entre rutas se realiza mediante un Navbar con elementos <Link />.

## 🔍 Sistema de búsqueda

La búsqueda se gestiona desde el componente SearchContainer, que mantiene:

el texto actual del input,

la lista de pokémons encontrados,

los pokémons creados por el usuario (vía context).

Cuando el usuario escribe en el input y presiona el botón Buscar, se realiza una petición a la PokeAPI según el nombre o ID introducido. Cada resultado se añade a la lista existente sin sobrescribir los anteriores, permitiendo acumular varias búsquedas.

Tras cada búsqueda, el input se resetea a cadena vacía.

Además, la búsqueda también puede realizarse automáticamente mediante un sistema de Debounce que espera varios segundos después de la última pulsación para lanzar la petición, evitando saturar la API con peticiones excesivas. El debounce impide:

peticiones con el input vacío,

peticiones duplicadas de Pokémon ya existentes en el listado.

## 🧩 Gestión global – React Context

La aplicación implementa un Contexto global para almacenar los pokémons creados por el usuario.
Este contexto vive en el componente raíz (App) y se comparte con cualquier parte de la aplicación que necesite:

PokemonForm (consumidor): puede agregar nuevos pokémons al contexto.

Search (consumidor): puede leer la lista para incluir pokémons creados en los resultados de búsqueda y evitar duplicados.


## 📝 Formulario de creación de Pokémons

El formulario ubicado en /new utiliza react-hook-form y contiene los siguientes campos:

Campo	Tipo	Validación
id	number	required
name	text	required, minLength = 3
image	text	required
typeOne	select	required
typeTwo	select	opcional

Al enviar el formulario:

El Pokémon se agrega al contexto global.

El Pokémon se almacena en LocalStorage.

Puede aparecer también en los resultados de búsqueda.

## 💾 Persistencia con LocalStorage

Cada Pokémon creado no solo se guarda en el Context, sino también en LocalStorage, garantizando que la información persista al recargar o cerrar el navegador.
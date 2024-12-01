# CSIMarkt

# CSIMarkt - Catálogo de Electrónicos

**CSIMarkt** es una aplicación web desarrollada utilizando **Angular**. El proyecto simula una tienda online tipo MediaMarkt, donde los usuarios pueden navegar por un catálogo de productos electrónicos, crear una cuenta y acceder a un sistema de inicio de sesión.

## Descripción

Esta aplicación tiene dos funcionalidades principales:
- **Vista de Catálogo**: Los usuarios pueden ver una lista de productos electrónicos y filtrarlos por categorías como móviles, portátiles y ordenadores.
- **Autenticación de Usuarios**: Los usuarios pueden registrarse y acceder a sus cuentas. (a través de una API Mock).
- **Añadir Productos**: Los usuarios al registrarse tendran la oportunidad de añadir productos.

## Características

- **Diseño Responsivo**: Usando **Bootstrap** para una interfaz adaptable en dispositivos móviles y de escritorio y Angular Materials.
- **Sistema de Autenticación**: Implementado con un servicio **UserService** que simula el registro e inicio de sesión de usuarios mediante una API Mock.
- **Filtrado de Productos**: Los productos se pueden filtrar por categoría como móviles, portátiles y ordenadores.
- **Interacción con API Mock**: Se utiliza un archivo `db.json` para simular la base de datos de productos y usuarios.

## Tecnologías Utilizadas

- **Angular 18**: Framework principal para el desarrollo del frontend.
- **Bootstrap 5**: Framework CSS para la creación de interfaces responsivas.
- **JSON Server**: Utilizado para crear una API Mock local para manejar usuarios y productos.
- **TypeScript**: Lenguaje de programación utilizado para el desarrollo de la aplicación.
- **RxJS**: Librería para manejar la programación reactiva en Angular.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

1. Clona este repositorio:
   -git clone https://github.com/eduballesteros/csimarkt.git

2. Accede a la carpeta del proyecto:
  -cd csimarkt

3. Instala las dependencias del proyecto:
  - npm install
    
4. Incia el servidor de desarollo
  -ng serve

5. En una terminal diferente, inicializa el servidor Mock (JSON Server) para manejar la API
   json-server --watch db.json --port 3000
   
6. Abre la aplicación en tu navegador:
  http://localhost:4200

Autor: Eduardo Ballesteros Pérez
Correo: ballesterospereze@gmail.com

# Journal App

Journal App es una aplicación web desarrollada con **React**, que permite a los usuarios crear, editar y eliminar notas. Las notas pueden incluir un título, una descripción y múltiples imágenes, las cuales se almacenan en **Cloudinary**. Además, la aplicación ofrece autenticación mediante correo electrónico/contraseña o cuenta de **Google**.

## Tecnologías utilizadas
- **React**: Framework para la construcción de interfaces de usuario.
- **Redux y Redux Toolkit**: Manejo del estado global de la aplicación.
- **Firebase**: Backend para autenticación y almacenamiento de datos.
- **Cloudinary**: Almacenamiento y gestión de imágenes.
- **Material UI**: Estilización y diseño de la interfaz.

## Características principales
- Registro e inicio de sesión con **correo y contraseña** o con **Google Account**.
- Creación de **notas** con título, descripción e imágenes.
- **Edición y eliminación** de notas existentes.
- **Almacenamiento de imágenes** en **Cloudinary**.
- Interfaz moderna y responsive gracias a **Material UI**.

## Instalación y configuración
### Requisitos previos
- Node 20.9.0
- Cuenta en Firebase y Cloudinary

### Pasos para ejecutar el proyecto
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/ACaminos/journal-app.git
   cd journal-app
   ```

2. Instalar dependencias:
   ```sh
   yarn install
   ```
   
3. Ejecutar la aplicación:
   ```sh
   yarn start
   ```

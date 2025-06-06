# TiendaJuegos

API REST y sitio web para gestionar una tienda de juegos utilizando **Node.js**, **Express**, **MongoDB** y **React**.

---

## 📋 Contenido

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Frontend](#frontend)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Descripción

Este proyecto incluye un backend API para administrar una tienda de juegos con base de datos MongoDB, y un frontend desarrollado en React para la interfaz de usuario.

---

## Tecnologías

- Node.js  
- Express  
- MongoDB con Mongoose  
- CORS  
- React  
- Vite (para el frontend)

---

## Instalación

### Backend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/faispuro/TiendaJuegos.git
   
2. Entrar a la carpeta backend:
   ```bash
   cd TiendaJuegos/backend

3. Instalar dependencias:
   ```bash
   npm install

4. Asegúrate de que MongoDB esté corriendo localmente (por defecto en mongodb://localhost:27017).

5. Uso:
   ```bash
   npm start
  
### Frontend

1. Abre otra terminal y entra a la carpeta del frontend (por ejemplo, si está en TiendaJuegos/frontend o en la raíz si usas Vite):
   ```bash
   cd TiendaJuegos/frontend

2. Instala las dependencias:
   ```bash
   npm install
3. Para iniciar el frontend (React + Vite):
   ```bash
   npm run dev


El frontend consume la API del backend para mostrar y administrar los juegos en la tienda. Asegúrate que ambos servidores (backend y frontend) estén corriendo para poder usar la aplicación correctamente.

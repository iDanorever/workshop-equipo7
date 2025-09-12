# 📑🔎 Proyecto Django + React + GHL

Este proyecto combina un **backend en Django REST Framework** y un **frontend en React + Vite**.  
La parte de backend se encarga de la **lógica de negocio, base de datos y APIs**, mientras que el frontend ofrece una **interfaz rápida e interactiva**.

---

## ⚙️ Backend (Django + DRF)

Desarrollo del servidor, lógica de negocio, bases de datos y APIs del proyecto.  
Encargado de la funcionalidad central, seguridad y comunicación con el frontend.

🚀 **Funcionalidades clave:**
- 🗄️ API RESTful (endpoints para CRUD y lógica de negocio).
- 🔐 Autenticación y autorización (JWT, OAuth, bcrypt).
- 🐘 Base de datos (MySQL, PostgreSQL, etc.).
- 📡 Documentación interactiva con Swagger UI.
- 🧠 Lógica de negocio y validaciones.
- 🧪 Testing (Pytest, Unittest, DRF test).
- 🐋 Contenedores y despliegue (Docker, CI/CD).

### 📖 Documentación con Swagger

La API está documentada con **Swagger UI** y **Redoc** usando [drf-yasg](https://github.com/axnsan12/drf-yasg).

- 📄 Swagger UI → [http://127.0.0.1:8000/swagger/](http://127.0.0.1:8000/swagger/)  
- 📘 Redoc → [http://127.0.0.1:8000/redoc/](http://127.0.0.1:8000/redoc/)  

### 🔗 Endpoints principales

#### 1. 📅 Calendarios
```http
GET /ghl/calendars/
[
  {"id": 1, "name": "Calendario Principal"},
  {"id": 2, "name": "Calendario Secundario"}
]
```

#### 2. 📝 Crear cita
```http
POST /ghl/appointments/create/
{
  "calendar_id": 1,
  "date": "2025-09-15",
  "time": "10:00",
  "client_name": "Juan Pérez"
}
{
  "id": 101,
  "calendar_id": 1,
  "date": "2025-09-15",
  "time": "10:00",
  "client_name": "Juan Pérez"
}
```

## 🎨 Frontend (React + Vite)

Interfaz de usuario desarrollada en **React con Vite**, optimizada para velocidad y experiencia de desarrollo.

✨ **Características:**

- ⚡️ Vite para desarrollo rápido y HMR.  
- 🎨 React con JSX/TSX.  
- ✅ ESLint integrado para buenas prácticas.  
- 🔄 Comunicación con la API REST de Django.  
- 🧪 Testing con Jest/React Testing Library.  

Actualmente, dos plugins oficiales están disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) → usa **Babel** para Fast Refresh.  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) → usa **SWC** para Fast Refresh.  

👉 Si desarrollas una aplicación en producción, se recomienda usar **TypeScript** y [`typescript-eslint`](https://typescript-eslint.io).  

---

## 📦 Tecnologías utilizadas

- **Backend:** Django, Django REST Framework, drf-yasg (Swagger)  
- **Frontend:** React, Vite  
- **Base de datos:** PostgreSQL / MySQL  
- **Otros:** Docker, GitHub Actions (CI/CD)  

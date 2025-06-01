
# API de Control de Asistencia - Reloaded GYM

Este proyecto contiene la implementación de la API de asistencia para la plataforma de administración del gimnasio Unicatólicos Reloaded GYM (Grupo 4).

## Endpoints incluidos

- `POST /api/attendance` → Registrar asistencia
- `GET /api/attendance/user/{userId}` → Ver asistencias por usuario
- `GET /api/attendance/activity/{activityId}` → Ver asistencias por actividad
- `GET /api/attendance/date/{fecha}` → Ver asistencias por fecha

## Cómo ejecutar localmente

1. Instala dependencias:
   ```bash
  cd attendance-api && npm install
   ```
2. Ejecuta el servidor de desarrollo:
   ```bash"
   npm run dev
   ```
3. Accede a [http://localhost:3000](http://localhost:3000)

## Despliegue en 
https://attendance-api-fawn.vercel.app/

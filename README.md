# 🎟 RifaFácil

App para vender rifas por redes sociales.  
**Stack:** Firebase (Auth + Firestore + Storage) + GitHub + Vercel

---

## 🚀 Deploy en Vercel

1. Sube estos archivos a tu repo `github.com/mauryappstudio/Rifa-Facil`
2. Vercel lo publica automáticamente en `rifa-facil-azure.vercel.app`

---

## 🔥 Configuración Firebase

### Firestore — Reglas
Copia el contenido de `firestore.rules` en:  
Firebase Console → Firestore → Reglas

### Storage — Reglas
Copia el contenido de `storage.rules` en:  
Firebase Console → Storage → Reglas

### Usuarios Admin
Firebase Console → Authentication → Agregar usuario  
Crea el correo y contraseña para cada organizador.

---

## ✅ Funcionalidades

- Tablero de 100 números en tiempo real
- Reserva con timer de 10 minutos automático
- Subida de comprobante a Firebase Storage
- Panel Admin con login por correo/contraseña
- Confirmar / rechazar pagos
- Ver voucher de comprobante
- Configurar premio, precio, fecha y WhatsApp
- Countdown al día del sorteo
- Limpieza automática de reservas vencidas

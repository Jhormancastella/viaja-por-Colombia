# 🗺️ Conoce Colombia

> Sitio web educativo e interactivo que explora los **32 departamentos de Colombia** a través de mapas, puntos de interés, galerías fotográficas y gastronomía regional.

<div align="center">

[![Ver en vivo](https://img.shields.io/badge/🌐%20Ver%20en%20vivo-GitHub%20Pages-0a1628?style=for-the-badge&logo=github&logoColor=white)](https://jhormancastella.github.io/viaja-por-Colombia/)

</div>

[![Colombia](https://img.shields.io/badge/Explora-Colombia-FFCC00?style=for-the-badge)](https://jhormancastella.github.io/viaja-por-Colombia/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 📖 Descripción

**Viaja por Colombia** es un proyecto web estático diseñado para promover el turismo y la cultura colombiana. Presenta un **mapa interactivo** con acceso a los 32 departamentos del país, cada uno con:
- 📍 Información de puntos de interés turístico
- 🖼️ Galería de imágenes representativas
- 🍽️ Gastronomía típica regional
- 🎨 Diseño responsive adaptable a móviles y escritorio

El proyecto está orientado a estudiantes, turistas y cualquier persona que desee conocer la riqueza cultural, geográfica y culinaria de Colombia.

---

## 🏗️ Arquitectura del Proyecto

```
viaja-por-Colombia/
├── index.html                          # Página principal (mapa + grid de 32 departamentos)
├── departamentos/                      # Carpeta con las 32 páginas departamentales
│   ├── amazonas.html
│   ├── antioquia.html
│   ├── arauca.html
│   ├── atlantico.html
│   ├── bolivar.html
│   ├── boyaca.html
│   ├── caldas.html
│   ├── caqueta.html
│   ├── casanare.html
│   ├── cauca.html
│   ├── cesar.html
│   ├── choco.html
│   ├── cordoba.html
│   ├── cundinamarca.html
│   ├── guainia.html
│   ├── guaviare.html
│   ├── huila.html
│   ├── la-guajira.html
│   ├── magdalena.html
│   ├── meta.html
│   ├── narino.html
│   ├── norte-de-santander.html
│   ├── putumayo.html
│   ├── quindio.html
│   ├── risaralda.html
│   ├── san-andres.html
│   ├── santander.html
│   ├── sucre.html
│   ├── tolima.html
│   ├── valle-del-cauca.html
│   ├── vaupes.html
│   └── vichada.html
├── css/
│   ├── base.css                       # Estilos globales compartidos (mobile-first)
│   ├── amazonas.css  →  vichada.css   # 32 archivos con color único por departamento
├── js/
│   └── main.js                        # Lightbox modal, swipe-to-close, navegación
└── img/                               # Recursos visuales (51 imágenes)
    ├── colde.jpg                      # Mapa principal de Colombia
    ├── am.png, an.png, mt.png, …      # Mapas departamentales
    └── [galerías y gastronomía]        # Imágenes de puntos de interés y comida
```

---

## 🎨 Características Principales

### 🖥️ Diseño Responsive (Mobile-First)
| Componente | Móvil (<400px) | Tablet (768px) | Escritorio (1024px) |
|------------|----------------|-----------------|----------------------|
| Grid de departamentos | 2 columnas | 4 columnas | 4 columnas |
| Grid de galería | 3 columnas | auto-fill | 3 columnas |
| Header altura | compacto | estándar | estándar |
| Cards | 96px mínimo | 140px mínimo | 140px mínimo |

### 🧭 Navegación
- **Página principal (`index.html`)**: Hero con gradiente + grid de 32 cards clickeables
- **Chips de región**: Filtrado visual por zonas geográficas (Amazonía, Andina, Caribe, Orinoquía, Pacífica, Insular)
- **Botón "Volver"**: Sticky header con botón de retorno en cada página departamental
- **Links internos**: Rutas limpias y semánticas

### 🖼️ Lightbox / Modal de Imágenes
- Click en cualquier imagen de galería o gastronomía abre vista ampliada
- **Cierre múltiple**: botón `×`, clic fuera, tecla `ESC`, **swipe down** en móvil
- Animación suave con `transform: scale()` y `backdrop-filter: blur()`
- Badge `×` visible en hover/touch sobre cada imagen

### 🎨 Sistema de Colores
Cada departamento tiene un color único asignado a su header:
| Región | Departamentos y colores |
|--------|------------------------|
| 🌿 **Amazonía** | Amazonas `#3fc2ff`, Caquetá `#1e8140`, Guainía `#0891b2`, Guaviare `#059669`, Vaupés `#0284c7` |
| 🏔️ **Andina** | Antioquia `#c1cf00`, Boyacá `#6b5ce7`, Caldas `#f5a623`, Cundinamarca `#c0392b`, Huila `#d97706`, N. Santander `#006411`, Quindío `#22c55e`, Risaralda `#f97316`, Santander `#4f46e5`, Tolima `#dc2626` |
| 🏖️ **Caribe** | Atlántico `#e8962e`, Bolívar `#a8324e`, Cesar `#e8a817`, Córdoba `#3a9d5c`, La Guajira `#f59e0b`, Magdalena `#2563eb`, Sucre `#10b981` |
| 🐄 **Orinoquía** | Arauca `#2e8b57`, Casanare `#d4503a`, Meta `#8c2d2d`, Vichada `#991b1b` |
| 🌊 **Pacífica** | Cauca `#8b5cf6`, Chocó `#e85d24`, Putumayo `#0d9488` |
| 💃 **Andina/Pacífico** | Nariño `#16a34a`, Valle del Cauca `#7c3aed` |
| 🏝️ **Insular** | San Andrés `#06b6d4` |

---

## 🛠️ Stack Tecnológico

| Herramienta | Uso |
|-------------|-----|
| **HTML5** | Estructura semántica (`<header>`, `<section>`, `<figure>`, `<nav>`) |
| **CSS3** | Diseño mobile-first con CSS Grid, Flexbox, variables CSS y animaciones |
| **JavaScript (Vanilla)** | Lightbox modal, detección de swipe táctil, smooth scroll |
| **Sin frameworks** | Código puro, sin dependencias externas, carga instantánea |
| **UTF-8** | Codificación completa para caracteres especiales del español |

---

## 📱 Responsive y Accesibilidad

- ✅ Mobile-first con 4 breakpoints (`380px`, `480px`, `768px`, `1024px`)
- ✅ Tamaños táctiles mínimos de `38px` en botones interactivos
- ✅ `aria-label` y `aria-hidden` en elementos claves del lightbox
- ✅ `alt` texts descriptivos en todas las imágenes
- ✅ `-webkit-tap-highlight-color: transparent` para experiencia nativa en móviles
- ✅ `backdrop-filter` para efectos de vidrio en headers y modales
- ✅ Transiciones suaves (`transition: all .22s ease`) en cards e imágenes

---

## 📂 Estructura de Datos por Departamento

Cada página departamental incluye:
1. **Header** con color único y botón de retorno
2. **Mapa regional** (`<figure>` con `img` y `figcaption`)
3. **Puntos de interés** (`<section class="descripcion">`): 3 lugares destacados con íconos `📍`
4. **Galería** (`<section class="galeria">`): hasta 3 imágenes clickeables con lightbox
5. **Gastronomía** (`<section class="gastronomia">`): hasta 3 platos típicos con lightbox

---

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor ni instalación de dependencias

### Pasos
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Jhormancastella/viaja-por-Colombia.git
   cd viaja-por-Colombia
   ```
2. Abre `index.html` en tu navegador:
   ```bash
   # Opción 1: doble clic en index.html
   # Opción 2: con Python
   python -m http.server 8000
   # Luego abre http://localhost:8000
   ```
3. Explora los 32 departamentos haciendo clic en las cards del grid

---

## 🗺️ departamentos/

Cada departamento cuenta con su propia página HTML en la carpeta `departamentos/`:

| Zona | Departamentos |
|------|---------------|
| **La Amazonía** | Amazonas, Caquetá, Guainía, Guaviare, Vaupés |
| **La Andina** | Antioquia, Boyacá, Caldas, Cundinamarca, Huila, Norte de Santander, Quindío, Risaralda, Santander, Tolima |
| **La Caribe** | Atlántico, Bolívar, Cesar, Córdoba, La Guajira, Magdalena, Sucre |
| **La Orinoquía** | Arauca, Casanare, Meta, Vichada |
| **La Pacífica** | Cauca, Chocó, Putumayo |
| **Andina / Pacífico** | Nariño, Valle del Cauca |
| **Insular** | San Andrés y Providencia |

---

## 🤝 Contribuciones

¿Quieres agregar un departamento o mejorar el proyecto?

1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b feature/nuevo-departamento`
3. Agrega el HTML en `departamentos/` siguiendo la estructura existente
4. Agrega el CSS en `css/<departamento>.css` con el color del header
5. Actualiza `index.html` agregando la card en el grid
6. Commit: `git commit -m "feat: agregar departamento X"`
7. Push: `git push origin feature/nuevo-departamento`
8. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

---

## 👨‍💻 Autor

**Jhorman Jesús Castellanos Morales**
- GitHub: [@Jhormancastella](https://github.com/Jhormancastella)
- Proyecto: [viaja-por-Colombia](https://github.com/Jhormancastella/viaja-por-Colombia)
- 🌐 Demo: [jhormancastella.github.io/viaja-por-Colombia](https://jhormancastella.github.io/viaja-por-Colombia/)

---

## 🌟 Características Futuras

- [ ] Agregar imágenes reales para todos los departamentos
- [ ] Implementar buscador de departamentos
- [ ] Agregar modo oscuro/claro
- [ ] Incluir información meteorológica por región
- [ ] Agregar rutas turísticas sugeridas
- [ ] Implementar maps interactivos con Leaflet/Google Maps
- [ ] Agregar audio con pronunciation de nombres nativos
- [ ] Incluir datos de densidad poblacional y extensión territorial

---

**Hecho con ❤️ para promover el turismo en Colombia**

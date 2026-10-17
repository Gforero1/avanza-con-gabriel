# Avanza con Gabriel

Web de una página, bilingüe (español por defecto, inglés con el botón EN), para las sesiones 1:1 de CV y entrevistas de Gabriel Forero (@avanzacongabriel1). Estática, sin dependencias, publicada en Cloudflare Pages desde este repo.

- `index.html`: la página. `assets/estilo.css`: estilos. `assets/avanza.js`: idioma, antes/después, rotulador y pasos.
- `assets/img/`: recortes sin fondo (WebP con transparencia). Hechos con el quitafondos de Canva a partir de `fuentes/fotos/` y limpiados a mano (cojín junto a la mano, sofá, brillo de las gafas).
- `assets/marca/`: favicon e imagen para compartir (1200x630).
- `_headers`: cabeceras de seguridad y caché para Cloudflare Pages.

## Dirección de diseño

- **Idea:** la web aplica la guía de Gabriel ("10 pasos esenciales para un buen CV"). La portada es una hoja de CV con su encabezado escrito como dice el paso 1, y Gabriel sale recortado por delante de la hoja. Las palabras clave van subrayadas con rotulador, como cuando un reclutador lee un CV.
- **Pieza propia:** el "antes / después" con un CV de ejemplo; los "después" salen literalmente de su guía (pasos 1, 2-3 y 5).
- **Color:** azul marino `#0F1E3D` (portada de su guía), blanco papel, gris escritorio `#E9ECF1`, y verde azulado `#1FA38A` (la raya de su guía) usado solo como rotulador, notas al margen y botón principal.
- **Tipografía:** Bricolage Grotesque y Literata, alojadas en `assets/fonts`. Escala 1,25 desde 16 px (13 · 16 · 18 · 20 · 25 · 49 · 95). Literata 400 para todo lo que se lee; Bricolage 600 para interfaz y etiquetas; Bricolage 700 estrecha para titulares. Mayúsculas solo en etiquetas de una línea.
- **Fotos:** las tres son recortes sin fondo del carrusel de Instagram (sin los textos del post), apoyados siempre en el borde inferior de su bloque.
- **Movimiento (con motivo):** el rotulador se dibuja cuando cada frase entra en pantalla; el antes/después cambia con un fundido y vuelve a marcar las palabras clave; los tres pasos de reserva se marcan en orden; la hoja y Gabriel entran al cargar. Nada se mueve con `prefers-reduced-motion`.
- **Lo que no tiene:** tarjetas redondeadas con sombra, filas de tres tarjetas iguales, emojis, iconos de relleno, contadores ni testimonios inventados.

## Reservas

Gabriel manda un enlace de Calendly distinto a cada cliente, así que todos los botones de reservar abren WhatsApp (+353 89 987 4365) con un mensaje ya escrito en el idioma de la página.

## Pendiente

- Dominio propio (por ejemplo avanzacongabriel.com).
- Versión `/en/` como página propia con `hreflang` para SEO (ahora el inglés se cambia con JavaScript).
- Más guías gratis cuando Gabriel las tenga.

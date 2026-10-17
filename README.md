# Avanza con Gabriel

Web de una página, bilingüe (español por defecto, inglés con el botón EN), para las sesiones 1:1 de CV y entrevistas de Gabriel Forero (@avanzacongabriel1). Estática, sin dependencias. Pensada para publicarse en Cloudflare Pages.

## Dirección de diseño

- **Idea:** la web aplica la guía de Gabriel ("10 pasos esenciales para un buen CV"). La portada es una hoja de CV con su encabezado escrito como dice el paso 1, y Gabriel sale recortado por delante de la hoja. Las palabras clave van subrayadas con rotulador, como cuando un reclutador lee un CV.
- **Pieza propia:** el "antes / después" con un CV de ejemplo; los "después" salen literalmente de su guía (pasos 1, 2-3 y 5).
- **Color:** azul marino `#0F1E3D` (portada de su guía), blanco papel, gris escritorio `#E6E9EE`, y verde azulado `#1FA38A` (la raya de su guía) usado solo como rotulador, notas al margen y botón principal.
- **Tipografía:** Bricolage Grotesque (titulares estrechos y pesados, interfaz) y Literata (todo lo que está "en papel": CV, resumen, opiniones, notas). Alojadas en `assets/fonts`.
- **Fotos:** recortes sin fondo (WebP con transparencia) sacados del carrusel de Instagram, sin los textos del post. Una sola foto rectangular, en contacto.
- **Movimiento:** solo el rotulador se dibuja al cargar la portada. Nada con `prefers-reduced-motion`.
- **Lo que no tiene:** tarjetas redondeadas con sombra, filas de tres tarjetas iguales, emojis, iconos de relleno, contadores ni testimonios inventados.

## Reservas

Gabriel manda un enlace de Calendly distinto a cada cliente, así que todos los botones de reservar abren WhatsApp (+353 89 987 4365) con un mensaje ya escrito en el idioma de la página.

## Pendiente

- Dominio (por ejemplo avanzacongabriel.com) y paso a Cloudflare Pages.
- Versión `/en/` como página propia con `hreflang` para SEO (ahora el inglés se cambia con JavaScript).
- Más guías gratis cuando Gabriel las tenga.

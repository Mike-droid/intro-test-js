# Curso de Introducción al Testing con JavaScript

## Introducción

### ¿Qué es el testing?

[Slides del curso](https://static.platzi.com/media/public/uploads/2-slides-javascript-testing_7b999b5a-4200-4cd6-a910-794a80c45590.pdf)

Antes el crear software era un poco más 'artesanal'. Ahora el código necesita más ... código. Se ha 'industrializado'. Es ahora más ágil gracias a las pruebas.

> Los problemas siepmre van a existir, lo que hacemos es gestionar el _riesgo_.
---
> The earlier you find a mistake, _the easier it is to fix_.

### La piramide del testing

1. Base: Pruebas unitarias - rápidas y menos costozas
2. Servicios
3. UI: son más complicadas y más costozas

---

1. Unit Tests - son la base y están desacopladas
2. Integration Tests - probamos como funcionan 2 unidades o con más
3. End to End Tests - todo lo que son terceros (BBDD, APIs)
4. UI Tests - Emular dispositivos (por ejemplo móviles o en navegadores)

¡Antipatrón! NO LO DEBEMOS HACER:

Pirámide invertida:

1. Manual regression testing
2. automated e2e test
3. integration test
4. unit test

### Hablemos sobre deuda técnica

La deuda no es buena ni mala, puede ser una palanca estratégica.

[Tech Debt Isn't a Burden, It's a Strategic Lever for Success](https://www.reforge.com/blog/managing-tech-debt)

### Herremientas de testing

[State of JavaScript](https://stateofjs.com/en-us/)

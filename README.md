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

### Creando el proyecto

Para este proyecto usaremos [Jest](https://jestjs.io/)

### Tu primer test

## Escribiendo pruebas

### Pruebas estáticas

Las pruebas estáticas no ejecutan el código, solamente lo analizan y dan feedback muy temprano.

### Assertions / Matchers

Hack para que VS Code autocomplete tu código de Jest: `npm i -D @types/jest`

### Setup and Teardown

`describe` se usa para tener un conjunto de pruebas.

- `beforeAll():` se ejecuta antes de todas las pruebas.
- `beforeEach():` se ejecuta antes de cada prueba.
- `afterEach():` se ejecuta después de cada prueba.
- `afterAll():` se ejecuta después de todas las pruebas

### Implementando Setup

Para correr solamente 1 archivo de test, hacemos `npm run test -- nombre-archivo`.

### Tipos de Pruebas

Si escribes el código _tienes que escribir el Unit test_.

[Manhattan, our real-time, multi-tenant distributed database for Twitter scale](https://blog.twitter.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale)

[Chaos Monkey for Netflix](https://netflix.github.io/chaosmonkey/)

### Metodologías

1. TDD -> Test Driven Development: Primero escribimos las prubeas y después el código de la lógica.
2. BDD -> Behavior Driven Development: De acuerdo a los requisitos, escribimos las pruebas, un poco más reales a lo que pasaría en producción.

Hay que tener cuidado con los _falsos positivos_ y los _falsos negativos_ (este se da cuando solamente pruebas el happy path).

## Pruebas Unitarias

### Pruebas unitarias

Son las más comunes, también se conocen como 'pruebas aisladas'.

- Pruebas de caja negra: solo me importa el input y output, no me importa la lógica interna.
- Pruebas de caja blanca: sí me importa la lógica interna, hago más pruebas de comportamiento.

¿Qué es una unidad?

Puede ser...

- Una función
- Una clase

Todo depende del contexto.

[Unit Test](https://martinfowler.com/bliki/UnitTest.html)

### Coverage report

Para ejecutar el reporte: `npm run test -- --coverage` y el archivo index.html nos dará más detalles.

El porcentaje de cobertura sirve para tener un equilibrio y no hacer pruebas innecesarias”. Esto esta muy ligado a hacer “sobre ingeniería”, no porque se pueda hacer significa que se tenga que hacer y ese es uno de los puntos que caracteriza a un buen Software Developer.

# @smt/shared-realestate

Motores reales de mercado/normativa inmobiliaria, extraídos de `smt-developer` el 2026-10-03 para
compartirse con `smtbroker` sin duplicar código (ver `C:\Users\Administrator\.claude\plans\elegant-snuggling-pebble.md`
de la sesión que lo originó para el contexto completo).

## Qué incluye

- **`llm/callClaudeJson`** — wrapper genérico de `@anthropic-ai/sdk` que pide JSON a Claude y
  reintenta una vez si el parseo falla.
- **`market/`** — plusvalía real (Índice SHF), absorción real (SNIIV/SEDATU), y el motor de beta
  por tramo de precio que cruza ambos. Todo con datos públicos reales, sin simulación.
- **`normativa/`** — consulta al GeoServer municipal público de San Pedro Garza García (uso de
  suelo, densidad, altura) y cálculo puro de densidad/CAAV.
- **`geometry/`** — point-in-polygon, usado por `normativa/geoserverSPGG`.

## Qué NO incluye (a propósito)

Los prompts de LLM de cada producto, auth, y cualquier dato de un Supabase específico — cada app
mantiene eso por su cuenta. Ver el plan de la sesión original para el razonamiento completo de
qué se compartió y qué no.

## Uso

```
npm install git+https://github.com/alvaguerjuancarlos-byte/smt-shared-realestate.git
```

```ts
import { calcularDensidad, consultarNormativaReal, resolverAbsorcionSNIIV } from '@smt/shared-realestate'
```

## Desarrollo local

Mientras no hay un primer tag estable publicado, usar `npm link` entre este repo y
`smt-developer`/`smtbroker` (directorios hermanos) en vez de reinstalar desde git en cada cambio.

```
npm run test       # 26 tests, deben seguir en verde tras cualquier cambio
npx tsc --noEmit
```

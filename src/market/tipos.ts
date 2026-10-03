// Subconjunto portable de smt-developer/lib/market/tipos.ts (373 líneas en el original) — SOLO
// los dos tipos que de verdad usa shfAppreciationEngine.ts. El resto de tipos.ts (comparables,
// inventario, pricing) es específico del pipeline de desarrollo nuevo y se queda en cada app.

export type VentanaPlusvalia = 'mensual' | 'trimestral' | 'anual' | '3_anios' | '5_anios' | '10_anios'

export interface ResultadoPlusvalia {
  ventana: VentanaPlusvalia
  tasaAnualizada: number | null // % anualizado, null = NOT_ENOUGH_DATA
  periodoInicio: string | null  // "YYYY-MM"
  periodoFin: string | null     // "YYYY-MM"
  muestraInicio: number         // cuántas observaciones componen la mediana del mes de inicio
  muestraFin: number
  motivo?: string                // por qué es null, cuando aplica — nunca se deja sin explicar
}

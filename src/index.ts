// Punto de entrada único del paquete, agrupado por dominio — mismo criterio de import que ya
// usan smt-developer y smtbroker (@/lib/<dominio>/<archivo>). Cada app puede importar el barrel
// completo (import { calcularDensidad } from '@smt/shared-realestate') o un archivo puntual si
// prefiere tree-shaking explícito (import { calcularDensidad } from '@smt/shared-realestate/normativa/calculos').

export { callClaudeJson } from './llm/callClaudeJson'

export {
  consultarNormativaReal, buscarUsoZonificacion, buscarDensidad, buscarAltura,
  type ZonaUso, type ZonaDensidad, type ZonaAltura, type NormativaGISReal,
} from './normativa/geoserverSPGG'
export { calcularDensidad, calcularAreaCAAV, type UnidadDensidad, type ResultadoDensidad, type ResultadoCAAV } from './normativa/calculos'

export { puntoDentroDePoligono } from './geometry/geometryEngine'

export {
  calcularVentanaSHF, calcularApreciacionSHF, calcularBetaSHF, serieSHFParaCiudad,
  SHF_CIUDAD_A_SERIE, type BetaSHF,
} from './market/shfAppreciationEngine'
export {
  SHF_ZM_MONTERREY, SHF_NACIONAL_ECONOMICA_SOCIAL, SHF_NACIONAL_MEDIA_RESIDENCIAL,
  type PuntoIndiceSHF,
} from './market/shfIndice.data'
export { resolverAbsorcionSNIIV, obtenerDiasInventarioMunicipal, type ResultadoAbsorcionSNIIV, type DiasInventarioMunicipio } from './market/sniivAbsorcion'
export { estimarPlusvaliaTramoAlto, BETA_TRAMO_ALTO_SOBRE_BAJO, type EstimacionPlusvaliaPremium } from './market/betaTramoEngine'
export type { VentanaPlusvalia, ResultadoPlusvalia } from './market/tipos'

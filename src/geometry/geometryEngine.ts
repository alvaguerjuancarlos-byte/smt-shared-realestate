// Extraído de smt-developer/lib/terreno/geometryEngine.ts (183 líneas en el original) — solo la
// función de point-in-polygon que necesita normativa/geoserverSPGG.ts. El resto del archivo
// original (vértices de levantamiento, azimuts, cierre de polígono por rumbos) es específico del
// croquis de terreno de smt-developer y se queda ahí.

// Ray-casting estándar. Funciona igual para vértices planos (x,y) que para coordenadas
// geográficas [lng,lat], mientras punto y anillo usen el mismo orden de ejes.
export function puntoDentroDePoligono(punto: [number, number], anillo: [number, number][]): boolean {
  const [x, y] = punto
  let dentro = false
  for (let i = 0, j = anillo.length - 1; i < anillo.length; j = i++) {
    const [xi, yi] = anillo[i]
    const [xj, yj] = anillo[j]
    const cruza = (yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (cruza) dentro = !dentro
  }
  return dentro
}

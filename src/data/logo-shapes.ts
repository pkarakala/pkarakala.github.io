/** Larger silhouettes assembled from copies of the owner-supplied mark. */
export type LogoShape = 'house' | 'tree' | 'initials';
type Point = readonly [number, number];
type Path = { points: readonly Point[]; color: 'green' | 'rust' };
const paths: Record<LogoShape, readonly Path[]> = {
  house: [
    { points: [[150, 161], [330, 45], [510, 161]], color: 'rust' },
    { points: [[186, 161], [186, 333], [474, 333], [474, 161]], color: 'green' },
    { points: [[330, 306], [330, 165]], color: 'green' },
    { points: [[330, 266], [266, 220], [266, 177]], color: 'green' },
    { points: [[330, 229], [397, 186], [397, 148]], color: 'rust' },
  ],
  tree: [
    { points: [[330, 338], [330, 158]], color: 'green' },
    { points: [[330, 260], [231, 209], [231, 144], [166, 99], [126, 99]], color: 'green' },
    { points: [[330, 227], [425, 180], [425, 118], [497, 77]], color: 'rust' },
    { points: [[330, 166], [282, 131], [282, 69]], color: 'green' },
    { points: [[231, 179], [174, 169], [132, 203]], color: 'green' },
    { points: [[425, 150], [493, 151], [537, 191]], color: 'rust' },
    { points: [[330, 307], [409, 276], [450, 302]], color: 'green' },
  ],
  initials: [
    { points: [[163, 323], [163, 79], [247, 79], [289, 114], [289, 173], [247, 206], [163, 206]], color: 'green' },
    { points: [[354, 323], [354, 79], [439, 79], [483, 114], [483, 173], [440, 206], [354, 206]], color: 'rust' },
    { points: [[411, 207], [497, 323]], color: 'rust' },
  ],
};

export function logoNodes(shape: LogoShape) {
  const nodes: { x: number; y: number; color: Path['color']; looseX: number; looseY: number; wanderX: number; wanderY: number; returnX: number; returnY: number; rotation: number; lag: number }[] = [];
  for (const path of paths[shape]) {
    for (let segment = 1; segment < path.points.length; segment++) {
      const [x0, y0] = path.points[segment - 1];
      const [x1, y1] = path.points[segment];
      const steps = Math.max(1, Math.round(Math.hypot(x1 - x0, y1 - y0) / 31));
      for (let step = 0; step <= steps; step++) {
        const x = x0 + (x1 - x0) * step / steps;
        const y = y0 + (y1 - y0) * step / steps;
        if (nodes.some(node => Math.hypot(node.x - x, node.y - y) < 21)) continue;
        const index = nodes.length;
        nodes.push({
          x, y, color: path.color,
          looseX: 100 + index * 137.507 % 460,
          looseY: 45 + index * 83.37 % 305,
          wanderX: 100 + (index * 137.507 + 170) % 460,
          wanderY: 45 + (index * 83.37 + 105) % 305,
          returnX: 100 + (index * 137.507 + 295) % 460,
          returnY: 45 + (index * 83.37 + 215) % 305,
          rotation: (index % 7 - 3) * 9,
          lag: Math.hypot(x - 330, y - 200) / 350 * .55 + index % 3 * .04,
        });
      }
    }
  }
  return nodes;
}

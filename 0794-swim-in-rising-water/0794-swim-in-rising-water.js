/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const n = grid.length;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  class MinHeap {
    constructor() { this.a = []; }
    size() { return this.a.length; }
    push(x) {
      this.a.push(x);
      this.up(this.a.length - 1);
    }
    pop() {
      const a = this.a;
      if (a.length === 1) return a.pop();
      const top = a[0];
      a[0] = a.pop();
      this.down(0);
      return top;
    }
    up(i) {
      const a = this.a;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (a[p].t <= a[i].t) break;
        [a[p], a[i]] = [a[i], a[p]];
        i = p;
      }
    }
    down(i) {
      const a = this.a;
      const n = a.length;
      while (true) {
        let l = i * 2 + 1, r = l + 1, m = i;
        if (l < n && a[l].t < a[m].t) m = l;
        if (r < n && a[r].t < a[m].t) m = r;
        if (m === i) break;
        [a[i], a[m]] = [a[m], a[i]];
        i = m;
      }
    }
  }

  const seen = Array.from({ length: n }, () => Array(n).fill(false));
  const heap = new MinHeap();

  heap.push({ t: grid[0][0], r: 0, c: 0 });
  seen[0][0] = true;

  while (heap.size()) {
    const { t, r, c } = heap.pop();
    if (r === n - 1 && c === n - 1) return t;

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= n || nc >= n) continue;
      if (seen[nr][nc]) continue;
      seen[nr][nc] = true;
      heap.push({ t: Math.max(t, grid[nr][nc]), r: nr, c: nc });
    }
  }

  return -1;
};

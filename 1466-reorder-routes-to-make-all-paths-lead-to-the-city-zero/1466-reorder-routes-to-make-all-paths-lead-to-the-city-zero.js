var minReorder = function(n, connections) {
    const edges = new Set();
    for (let [a, b] of connections) {
        edges.add(`${a},${b}`);
    }

    const neighbors = Array.from({ length: n }, () => []);

    for (let [a, b] of connections) {
        neighbors[a].push(b);
        neighbors[b].push(a);
    }

    const visit = new Set();
    
    let changes = 0;

    function dfs(city) {
        for (let neighbor of neighbors[city]) {
            if (visit.has(neighbor)) continue;

            if (!edges.has(`${neighbor},${city}`)) {
                changes++;
            }

            visit.add(neighbor);
            dfs(neighbor);
        }
    }

    visit.add(0);
    dfs(0);
    return changes;
};

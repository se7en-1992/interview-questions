const graph = {
    A: [2, 3, 5],
    B: [2],
    C: [0, 1, 3],
    D: [0, 2],
    E: [6],
    F: [0, 6],
    G: [4, 5]
}

// 深度优先遍历
const visited = new Set()
const dfs = (n) => {
  console.log(n)
  visited.add(n) // 访问过添加记录
  graph[n].forEach(c => {
    if(!visited.has(c)){ // 判断是否访问呢过
      dfs(c)
    }
  })
}

// 广度优先遍历
const visited1 = new Set()
const dfs1 = (n) => {
    visited1.add(n)
  const q = [n]
  while(q.length){
    const n = q.shift()
    console.log(n)
    graph[n].forEach(c => {
      if(!visited1.has(c)){
        q.push(c)  
        visited1.add(c)
      }
    })
  }
}


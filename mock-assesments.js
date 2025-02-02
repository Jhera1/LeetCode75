// There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

// Return all critical connections in the network in any order.

 

// Example 1:


// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.
// Example 2:

// Input: n = 2, connections = [[0,1]]
// Output: [[0,1]]



var criticalConnections = (n, connections) => {
    const graph = new Array(n).fill(0).map(() => []);
    for (let [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let time = 0;
    const disc = new Array(n).fill(-1); 
    const low = new Array(n).fill(-1);  
    const result = [];

    
    const dfs = (u, parent) => {
        disc[u] = low[u] = time++;
        for (let v of graph[u]) {
            if (v === parent) continue; 
            
            if (disc[v] === -1) { 
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]); 
                
                if (low[v] > disc[u]) { 
                    result.push([u, v]);
                }
            } else { 
                
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    };

    // Step 3: Run DFS from node 0
    dfs(0, -1);

    return result;
};

console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]))// Expected: [[1,3]]













// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"




var reverseStr = (s, k) => {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i, right = Math.min(i + k - 1, arr.length - 1);
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap characters
            left++;
            right--;
        }
    }
    return arr.join('');
};

console.log(reverseStr("abcdefg", 2))// Expected: "bacdfeg"
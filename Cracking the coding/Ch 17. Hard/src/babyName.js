class Node{
    constructor(name){
        this.name = name;
        this.visited = false;
        this.neighborhoods = [];
    }
}

class Graph{
    constructor(edges){
        this.edges = edges;
        this.nodes = {}; //key: name, value: node
        this.generateGraph();
    }

    getNode(name){
        if(this.nodes.hasOwnProperty(name)){
            return this.nodes[name];
        }else{
            this.nodes[name] = new Node(name);
            return this.nodes[name];
        }
    }

    addNeighborHoods(nodeA, nodeB){
        if(!nodeA.neighborhoods.includes(nodeB)) nodeA.neighborhoods.push(nodeB);
    }

    generateGraph(){
        if(!Array.isArray(this.edges)) throw 'an array of edges needed';
        for(let [a, b] of this.edges){
            let nodeA = this.getNode(a);
            let nodeB = this.getNode(b);
            this.addNeighborHoods(nodeA, nodeB);
            this.addNeighborHoods(nodeB, nodeA);
        }
    }
}

function babyName(names, synonyms){
    if(!Array.isArray(names) || !Array.isArray(synonyms)) throw 'array only';
    let freq = new Map(), graph = new Graph(synonyms), result = [];
    for(let obj of names){
        for(let name in obj){
            freq.set(name, obj[name]);
        }
    }

    function DFS(node){
        let count = 0;
        function search(node){
            node.visited = true;
            for(let neighbor of node.neighborhoods){
                if(!neighbor.visited) search(neighbor);
            }
            count += freq.get(node.name) || 0;
        }
        search(node);
        return count;
    }
    
    for(let name in graph.nodes){
        let node = graph.nodes[name];
        if(!node.visited) result.push({[`${name}`]: DFS(node)});
    }

    return result;
}

export default babyName;

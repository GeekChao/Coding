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
        if(node.visited) return 0;

        node.visited = true;
        let sum = freq.get(node.name) || 0;

        for(let child of node.neighborhoods){
            sum += DFS(child);
        }

        return sum;
    }
    
    for(let name in graph.nodes){
        let node = graph.nodes[name];
        if(!node.visited) result.push({[`${name}`]: DFS(node)});
    }

    return result;
}

export default babyName;

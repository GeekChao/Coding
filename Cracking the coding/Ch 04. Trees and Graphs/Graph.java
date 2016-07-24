/*
* Implement a graph using linkedlist
* Author: Mingchao Zou, Jul 24
*/

import java.io.*;
import java.util.*;

class Node<T>{
    private LinkedList<Node<T>> list;
    private boolean isVisit;
    private T name;

    public Node(T name){
        this.list = new LinkedList<Node<T>>();
        this.isVisit = false;
        this.name = name;
    }   

    public void addEdge(Node node){
        list.add(node);
    }

    public void delEdge(Node node) throws Exception{
        if(list.contains(node)){
            list.remove(node);
        }else{
            throw new Exception("This edge does not exist");
        }
    }

    public T getData(){
        return this.name;
    }

    public boolean getVisit(){
        return this.isVisit;
    }

    public void setVisit(boolean isVisit){
        this.isVisit = isVisit;
    }

    public LinkedList getAllEdges(){
        return this.list;
    }

    public void clearAllEdges(){
        this.list.clear();
        //empty the node
        this.list = null;
        this.name = null;
        this.isVisit = false;
    }

}

class Graph<T>{
    private ArrayList<Node<T>> nodes;

    private class ShortPath{
        private Node source; 
        private Node dest;
        private int dist;
        private boolean found;
        private Stack<Node> path;

        public ShortPath(Node source, Node dest, int dist){
            this.source = source;
            this.dest = dest;
            this.dist = dist;
            this.found = false;
            this.path = new Stack<Node>();
        }
    }

    public Graph(){
        this.nodes = new ArrayList<Node<T>>();
    }

    public void addNode(Node node){
        nodes.add(node);
    }

    public void delNode(Node node) throws Exception{
        if(nodes.contains(node)){
            nodes.remove(node);
            node.clearAllEdges();
        }else{
            throw new Exception("This node does not exist");
        }
    }

    public ArrayList getAllNodes(){
        return this.nodes;
    }

    public Node getNode(T name) throws Exception{
        Node node = null;
        for(int i = 0; i < nodes.size(); i++){
            node = nodes.get(i);
            if(node.getData().equals(name)){
                return node;
            }
        }

        if(node == null)
            throw new Exception("Not found that node");

        return node;
    }

    public void resetGraph(){
        for(Node node : nodes){
            node.setVisit(false);
        }
    }

    public void visit(Node node){
        if(!node.getVisit()){
            System.out.println(node.getData());
            node.setVisit(true);
        }
    }

    public void DFS(Node node){

        visit(node);

        for(int i = 0; i < node.getAllEdges().size(); i++){
            Node target = (Node)node.getAllEdges().get(i);
            if(!target.getVisit()){
                DFS(target);
            }
        }
    }

    public void shortestPath(Node source, Node dest) throws Exception{
        resetGraph();
        int dist = distance(source, dest); //find shortest distance
        resetGraph();

        ShortPath sp = new ShortPath(source, dest, dist);

        shortestPath(source, dist, sp);// use DFS find this shortest path

        StringBuilder str = new StringBuilder();
        str.append("The shortest path from ");
        str.append(sp.source.getData() + " to ");
        str.append(sp.dest.getData() + " is: ");
        while(!sp.path.empty()){
            str.append(sp.path.pop().getData());
            if(!sp.path.empty())
                str.append(" ->");
        }
        System.out.println(str);
    }

    public void shortestPath(Node node, int dist, ShortPath sp){
        visit(node);

        if(dist == 0){
            if(node.getData().equals(sp.dest.getData())){
                sp.found = true;
                sp.path.push(node);
            }

            return;
        }

        for(int i = 0; i < node.getAllEdges().size(); i++){
            Node target = (Node)node.getAllEdges().get(i);
            if(!target.getVisit()){
                //shortestPath(target, dist--, sp); Buggy!!!  Must not change the value of variable, just pass
                shortestPath(target, dist - 1, sp);
                if(sp.found){
                    sp.path.push(node);
                    return;
                }
            }
        }
    }

    public void BFS(Node source){
        Queue<Node> queue = new LinkedList<Node>();
        queue.add(source);
        Node node = null;
        while((node = queue.poll()) != null){
            visit(node);

            for(int i = 0; i < node.getAllEdges().size(); i++){
                Node temp = (Node)node.getAllEdges().get(i);
                if(!temp.getVisit()){
                    queue.add(temp);
                }            
            }
        }
    }

    public int distance(Node source, Node dest) throws Exception{
        Queue<Node> queue = new LinkedList<Node>();
        Map map = new HashMap<Node, Integer>();
        queue.add(source);
        map.put(source, 0);
        Node node = null;

        while((node = queue.poll()) != null){
            visit(node);

            if(node.getData().equals(dest.getData())){
                return (int)map.get(node);
            }

            for(int i = 0; i < node.getAllEdges().size(); i++){
                Node temp = (Node)node.getAllEdges().get(i);
                if(!temp.getVisit()){
                    queue.add(temp);
                    map.put(temp, (int)map.get(node) + 1);
                }            
            }
        }

        throw new Exception("No path exists between them");
    }

    public static void main(String[] args){
        Graph test = new Graph();
        //initialize a graph
        test.addNode(new Node(4));
        test.addNode(new Node(5));
        test.addNode(new Node(7));
        test.addNode(new Node(6));
        test.addNode(new Node(8));

        try{
            Node node = test.getNode(4);
            node.addEdge(test.getNode(5));
            node.addEdge(test.getNode(7));

            node = test.getNode(5);
            node.addEdge(test.getNode(6));

            node = test.getNode(7);
            node.addEdge(test.getNode(6));
            node.addEdge(test.getNode(8));


            //Depth first search the graph
            System.out.println("Depth First Search: ");
            test.DFS(test.getNode(4));

            test.resetGraph();
            System.out.println();

            //Breath first search the graph
            System.out.println("Breath First Search: ");
            test.BFS(test.getNode(4));

            test.resetGraph();
            System.out.println();

            //short path distance
            System.out.println("Distance from 4 to 8: " + test.distance(test.getNode(4), test.getNode(8)));
            test.shortestPath(test.getNode(4), test.getNode(8));
            //System.out.println("Distance from 7 to 8: " + test.distance(test.getNode(7), test.getNode(8)));

        }catch(Exception exp){
            System.out.println(exp);
        }
    }
}

/*
* Lesson: 
    1. the shortest distance of the current node is based on the vaule of the previous node, so we need to store them accordingly.
    2. Do not change the value, just pass it in the recursive calls.
        Wrong:      shortestPath(target, dist--, sp); 
        Correct:    shortestPath(target, dist - 1, sp);
*/

/*
* Result:
    Depth First Search: 
    4
    5
    6
    7
    8

    Breath First Search: 
    4
    5
    7
    6
    8

    Distance from 4 to 8: 2
    The shortest path from 4 to 8 is: 4 ->7 ->8

*/
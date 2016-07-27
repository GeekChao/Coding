/*
* Question: find the next node of a given node in a binary search tree
* Solution: reverse the in-order traversal
* Time / Space Complexity: O(logN) / O(logN)
* Author: Mingchao Zou, Jul 26
*/

class Successor{

    public BSTreeNode successor(BSTreeNode node) throws Exception{
        if(node == node.getParent().getLeftChild()){
            return node.getParent();
        }else{
            if(node.getRightChild() == null){
                if(node.getParent().getParent() != null){
            //Buggy: need to traverse upwards from this node until on left
                    return node.getParent().getParent();
                }else{
                    throw new Exception("At the end of tree");
                }
            }else{
                return fun((BSTreeNode)node.getRightChild());
            }
        }
    }

    private BSTreeNode fun(BSTreeNode node){
        if(node.getLeftChild() == null){
            return node;
        }

        return fun((BSTreeNode)node.getLeftChild());
    }

    public static void main(String[] args){
        BSTree test = new BSTree();
        test.insert(33);
        test.insert(18);
        test.insert(36);
        test.insert(14);
        test.insert(25);
        test.insert(34);
        test.insert(10);
        test.insert(20);
        test.insert(27);
        test.insert(29);
        test.inOrder(test.getRoot());

        Successor s = new Successor();
        try{
            System.out.println("the successor of 14 is: " + s.successor(test.find(test.getRoot(), 14)).getData());
            System.out.println("the successor of 25 is: " + s.successor(test.find(test.getRoot(), 25)).getData());
            System.out.println("the successor of 27 is: " + s.successor(test.find(test.getRoot(), 27)).getData());
            System.out.println("the successor of 36 is: " + s.successor(test.find(test.getRoot(), 36)).getData());
        }catch(Exception exp){
            System.out.println(exp);
        }
    }
}

/*
* Result: 
    10 
    14 
    18 
    20 
    25 
    27 
    29 
    33 
    34 
    36 

    the successor of 14 is: 18
    the successor of 25 is: 27
    the successor of 27 is: 29
    java.lang.Exception: At the end of tree
*/


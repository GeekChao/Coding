/*
* Question: Find the first common ancestor of two nodes in a binary tree.
* Solution: Do a pre-order traversal to find two node individually. At the second time, find the common ancestor.
* Time / Space Complexity: O(n) / O(LogN)
* Author: Mingchao Zou, Jul 27
*/

class Ancestor{

    private boolean isFound = false;
    private BSTreeNode comAncestor;
    private boolean isFirst = true;

    private void resetTree(BSTreeNode node){
        if(node != null){
            node.setVisit(false);
            resetTree((BSTreeNode)node.getLeftChild());
            resetTree((BSTreeNode)node.getRightChild());
        }
    }

    private boolean find(BSTreeNode root, BSTreeNode node){        
        if(isFound){
            return true;
        }

        if(root != null){

            if(root == node){
                isFound = true;
                root.setVisit(true);
                return isFound;
            }

            find((BSTreeNode)root.getLeftChild(), node);
            if(isFound){
                root.setVisit(true);
            }
            find((BSTreeNode)root.getRightChild(), node);
            if(isFound){
                root.setVisit(true);
            }
        }

        return isFound;
    }

    private BSTreeNode search(BSTreeNode root, BSTreeNode node2){
        if(comAncestor != null){
            return comAncestor;
        }

        if(root != null){

            if(root == node2){
                if(node2.getVisit() && isFirst){
                    isFirst = false;
                    return comAncestor = node2;
                }else{
                    return node2;
                }
            }

            search((BSTreeNode)root.getLeftChild(), node2);
            if(root.getVisit() && isFirst){
                isFirst = false;
                return comAncestor = root;
            }

            search((BSTreeNode)root.getRightChild(), node2);
            if(root.getVisit() && isFirst){
                isFirst = false;
                return comAncestor = root;
            }
        }

        return comAncestor;
    }

    public BSTreeNode ancestor(BSTreeNode root, BSTreeNode node1, BSTreeNode node2){
        resetTree(root);
        isFound = false;
        comAncestor = null;
        isFirst = true;

        find(root, node1);
        return search(root, node2);
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

        Ancestor a = new Ancestor();

        System.out.println("Frist common ancester between 18 and 27 is: " + a.ancestor(test.getRoot(), test.find(test.getRoot(), 27), test.find(test.getRoot(), 18)).getData());
        System.out.println("Frist common ancester between 34 and 27 is: " + a.ancestor(test.getRoot(), test.find(test.getRoot(), 34), test.find(test.getRoot(), 27)).getData());
        System.out.println("Frist common ancester between 10 and 14 is: " + a.ancestor(test.getRoot(), test.find(test.getRoot(), 10), test.find(test.getRoot(), 14)).getData());
        System.out.println("Frist common ancester between 20 and 14 is: " + a.ancestor(test.getRoot(), test.find(test.getRoot(), 20), test.find(test.getRoot(), 14)).getData());
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

    Frist common ancester between 18 and 27 is: 18
    Frist common ancester between 34 and 27 is: 33
    Frist common ancester between 10 and 14 is: 14
    Frist common ancester between 20 and 14 is: 18
*/

/*
* Lesson: Given multiple branches, we can use gates(if statement) to return value from a specific branch.
*/
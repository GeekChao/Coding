/*
* Implement a binary search tree 
* Author: Minghchao Zou, Jul 22
*/

class BSTreeNode extends BTreeNode<Integer>{
    private BSTreeNode parent;

    public BSTreeNode getParent(){
        return this.parent;
    }

    public void setParent(BSTreeNode parent){
        this.parent = parent;
    }

    public BSTreeNode(int data){
        super(data);
    } 

    public BSTreeNode(int data, BSTreeNode parent){
        super(data);
        this.parent = parent;
    }
} 

class BSTree extends BTree<Integer>{
    private BSTreeNode root;

    public void insert(int data){
        insert(root, data);
    }

    public void insert(BSTreeNode node, Integer data){
        if(node == root && root == null){
            root = new BSTreeNode(data, null);
            return;
        }   

        while(node != null){
            if((int)node.getData() >= data){
                if(node.getLeftChild() == null){
                		node.setLeftChild(new BSTreeNode(data, node));
                		break;
                }
                else{
                		node = (BSTreeNode)node.getLeftChild();
                }
            }else{
                if(node.getRightChild() == null){
            			node.setRightChild(new BSTreeNode(data, node));
            			break;
                }
                else{
            			node = (BSTreeNode)node.getRightChild();
                }
            }
        }       
    } 

    public boolean find(int data){
        BSTreeNode node = find(root, data);
        if(node == null){
            return false;
        }else{
            return true;
        }
    }

    public BSTreeNode find(BSTreeNode node, int data){
        BSTreeNode temp = null;
        if(node != null){
            if(node.getData().equals(data)){
                return node;
            }else if((int)node.getData() > data){
                temp = find((BSTreeNode)node.getLeftChild(), data);
            }else{
                temp = find((BSTreeNode)node.getRightChild(), data);
            }
        }

        return temp;
    }  

    private int countChild(BSTreeNode node){
        int childCount = 0;
        if(node.getLeftChild() != null){
            childCount++;
        }

        if(node.getRightChild() != null){
            childCount++;
        }

        return childCount;
    }

    public BSTreeNode remove(int data)throws Exception{
        int childCount = 0;
        boolean isLeftChild = false;

        BSTreeNode node = find(root, data);
        if(node == null)
            throw new Exception("Node does not exist in the tree");

        childCount = countChild(node);
        
        if(node == root)
            throw new Exception("Do not allow to reomve root element");

/*        if(node == root){ // remove root
            switch(childCount){
                case 0:
                    root = null;
                    return node;
                case 1:
                    if(node.getLeftChild() != null){
                        root = (BSTreeNode)node.getLeftChild();
                        node.setLeftChild(null);
                    }else{
                        root = (BSTreeNode)node.getRightChild();
                        node.setRightChild(null);
                    }
                    root.setParent(null);
                    return node;
                case 2:
                    BSTreeNode temp = node;
                    while(temp.getLeftChild() != null) //leftmost node, that is minimum node
                        temp = (BSTreeNode)temp.getLeftChild();

                    int tempChildCount = countChild(temp); 
                    // have not implement

                    return node;
                default:
                    break;
            }
        }*/

        if(node.getParent().getLeftChild() == node)
            isLeftChild = true;
        else    
            isLeftChild = false;

        switch(childCount){
            case 0:
                if(isLeftChild){
                    node.getParent().setLeftChild(null);
                }else {  
                    node.getParent().setRightChild(null);
                }
                break;
            case 1:
                if(isLeftChild){
                    if(node.getLeftChild() != null){
                        node.getParent().setLeftChild(node.getLeftChild());
                        node.setLeftChild(null);
                    }else{ 
                        node.getParent().setLeftChild(node.getRightChild());
                        node.setRightChild(null);
                    }
                }else{
                    if(node.getLeftChild() != null){
                        node.getParent().setRightChild(node.getLeftChild());
                        node.setLeftChild(null);
                    }else{ 
                        node.getParent().setRightChild(node.getRightChild());
                        node.setRightChild(null);
                    }  
                }
                break;
            case 2:
                if(isLeftChild){
                    if((int)node.getLeftChild().getData() < (int)node.getRightChild().getData()){
                        node.getLeftChild().setRightChild(node.getRightChild());
                        node.getParent().setLeftChild(node.getLeftChild());
                    }else{
                        node.getRightChild().setRightChild(node.getLeftChild());
                        node.getParent().setLeftChild(node.getRightChild());    
                    }
                }else{
                    if((int)node.getLeftChild().getData() < (int)node.getRightChild().getData()){
                        node.getLeftChild().setRightChild(node.getRightChild());
                        node.getParent().setRightChild(node.getLeftChild());
                    }else{
                        node.getRightChild().setRightChild(node.getLeftChild());
                        node.getParent().setRightChild(node.getRightChild());    
                    }
                }
                node.setLeftChild(null);
                node.setRightChild(null);
                break;
            default:
                node.setParent(null);
                break;
        }

        return node;
    }

    public static void main(String[] args){
        BSTree test = new BSTree();
        test.insert(2);
        test.insert(1);
        test.insert(6);
        test.insert(0);
        test.insert(9);
        test.insert(2);
        test.insert(5);
        test.inOrder(test.root);
        try{
            System.out.println(test.find(0));
            System.out.println(test.find(110));
            System.out.println(test.find(9));
            System.out.println(test.find(11));
            //One left Child     
/*          test.insert(8);  
            System.out.println("Remove: " + test.remove(8).getData());
            test.inOrder(test.root);*/

            //One Right Child
/*          test.insert(10);
            System.out.println("Remove: " + test.remove(10).getData());
            test.inOrder(test.root);*/

            //No Child
/*          System.out.println("Remove: " + test.remove(5).getData());
            test.inOrder(test.root);*/

            //Two Child
            System.out.println("Remove: " + test.remove(6).getData());
            test.inOrder(test.root);

            //reomve root
            System.out.println("Remove: " + test.remove(2).getData());
            
        }catch(Exception exp){
            System.out.println(exp);
        }

        
    }
        
}
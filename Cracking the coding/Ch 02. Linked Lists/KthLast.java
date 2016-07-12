/*
* Question: find the kth to last element of a singly linked list
* Solution:
* Time / Space Complexity:O(n) / O(n)
* Author: Mingchao Zou Jul 11
*/

class KthLast{

     private static class KthNode{
        private int index;
        private Node node;

        public KthNode(int K){
            this.index = K;
            this.node = null;
        }
    }

    public int kthLast(LinkedList list, Node node, KthNode knode){
        if(node == list.getHead())
            return 0;
            
        int count = kthLast(list, node.getNext(), knode) + 1;
        if(count == knode.index)
            knode.node = node;

        return count;
    }

    public static void main(String[] args){
		LinkedList list = new LinkedList();
		//insert 
		for(int i = 0; i < 9; i++)
			list.insertAfterTail(i);
		list.printList();

        KthLast test = new KthLast();
        KthNode knode = new KthNode(5);
        test.kthLast(list, list.getHead().getNext(), knode);	
        System.out.println("the " + knode.index + " th to last node is " + knode.node.getData());
	}
}

/*
* Conclusion: When it needs to return more than one value, wrap them in the class.
* Better Solution: Use two pointers, place them k nodes apart in the linked list, then move them at same space.
**/
/*
* Question: Given a sorted array with unique integer elements, create a binary search tree with minimal height.
* Solution: use the divide and conquer algorithm to find the middle element recursively, then insert it.
* Time / Space Complexity: O(N * logN) / O(logN)
*/

class MiniTree extends BSTree{

    private int[] array;

    public MiniTree(int[] array){
        this.array = array;
    }

    public void insertMid(int low, int high){
        if(low >= high){
            insert(array[low]);
            return;
        }

        int mid = (low + high) / 2;
        insert(array[mid]);

        if(low < mid){
            insertMid(low, mid - 1);
        }

        if(high > mid){
            insertMid(mid + 1, high);
        }
    }   

    public static void main(String[] args){
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        MiniTree test = new MiniTree(array);
        test.insertMid(0, 8);
        test.inOrder(test.getRoot());
    }
}

/*
* Result: 
    1 
    2 
    3 
    4 
    5 
    6 
    7 
    8 
    9
*/

/*
* Conslusion: alternatively, we can cut out the extra traversals(insert) by
* creating a new node and setting their childs.
*/
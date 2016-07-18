/*
* Question: determine if it is a circular linked list.
* Solution: use runner technique
* Time / Space Complexity: O(n) / O(1)
* Author: Mingchao Zou Jul 15
*/

import java.io.*;
import java.lang.*;

class LoopDetect{

  public Node loopDetect(LinkedList list){
      Node slow = list.next;
      Node fast = list.next.next;
      while(fast != slow && fast.next != slow && fast != null){
          slow = slow.next;
          fast = fast.next.next;
      }

      if(fast == null)
        return null;
      else
        return slow;
  }
}

/*
* Lesson: Draw a example, then observe it to find the speciality.
*/
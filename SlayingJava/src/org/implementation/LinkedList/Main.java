package org.implementation.LinkedList;

public class Main {
     public static void main(String[] args){
         SinglyLinkedList<Integer> list = new SinglyLinkedList<Integer>();

         list.insert(new Node<Integer>(10));
         list.insert(new Node<Integer>(20));
         list.insert(new Node<Integer>(30));
         list.insert(new Node<Integer>(40));
         list.insert(new Node<Integer>(50));

         list.insertAtStart(new Node<Integer> (60));
         list.printList();
         System.out.println("Size of list: " + list.getSize());

         list.insertAtPosition(new Node<Integer> (100), 2);
         list.printList();
         System.out.println("Size of list: " + list.getSize());

         list.deleteFromStart();
         list.printList();
         System.out.println("Size of list: " + list.getSize());

         list.deleteFromEnd();
         list.printList();
         System.out.println("Size of list: " + list.getSize());
     }
}

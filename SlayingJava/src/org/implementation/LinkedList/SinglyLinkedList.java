package org.implementation.LinkedList;

/**
 * Singly Linked List
 *
 * Coding implementation of Singly Linked List in Java
 */

public class SinglyLinkedList <T> {
    private Node<T> head;
    private Node<T> tail;
    private int size;

    public SinglyLinkedList (){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public SinglyLinkedList(Node<T> head){
        this.head = head;
        this.tail = this.head;
        this.size = 1;
    }

    // method to insert node at the end of list
    public void insert(Node<T> node){
        // if head is null
        if(head == null){
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        this.size += 1; // increase list size by 1
    }

    // method to insert node at the start of list
    public void insertAtStart(Node<T> node){
        node.next = this.head;
        this.head = node;
        this.size += 1; // increase list size by 1
    }

    // method to insert node at particular position of list
    public void insertAtPosition(Node<T> node, int position){
        if(position > this.size){
            System.out.println("Invalid position.");
            return;
        }

        if(position == 1){
            // insert at start of list
            insertAtStart(node);
        }
        else if(position == this.size){
            // insert at end of list
            insert(node);
        }else{
            // insert at particular position
            Node<T> temp = head;
            for(int i=1; i<position-1; i++){
                temp = temp.next;
            }

            node.next = temp.next;
            temp.next = node;
        }

        this.size += 1; // increase list size by 1
    }

    // method to delete from start
    public void deleteFromStart(){
        if(this.head == null){
            return;
        }else{
            this.head = this.head.next;
            this.size -= 1;
        }
    }

    // method to delete from a particular position
    public void deleteFromPosition(int position){
        if(this.size < position){
            System.out.println("Invalid Position.");
            return;
        }

        if(position == 1){
            deleteFromStart();
        }else if(position == this.size-1){
            deleteFromEnd();
        }else{
            // delete at particular position
            Node<T> temp = head;
            for(int i=1; i<position-1; i++){
                temp = temp.next;
            }

            temp.next = temp.next.next;
        }

        this.size -= 1;
    }

    // method to delete from end
    public void deleteFromEnd(){
        if(this.head == null){
            return;
        }else{
            Node<T> temp = this.head;
            while(temp.next.next != null){
                temp = temp.next;
            }

            temp.next = null;
        }

        this.size -= 1;
    }

    // method to display list
    public void printList(){
        Node<T> temp = this.head;

        System.out.println("Linked List");
        while(temp != null){
            System.out.print(temp.data + " ");
            temp = temp.next;
        }

        System.out.println();
    }

    // method to get size of list
    public int getSize(){
        return this.size;
    }
}

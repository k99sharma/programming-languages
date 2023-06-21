package multithreading;

import java.util.Arrays;

public class SynchronizedBlockExample {
    public static class Stack{
        private int top;
        private int size;
        private int[] stack;

        public Stack(int size){
            this.top = -1;
            this.size = size;
            this.stack = new int[size];
        }

        public synchronized boolean push(int data){
            if(top >= size)
                return false;

            top++;
            stack[top] = data;
            return true;
        }

        public synchronized int pop(){
            if(top == -1)
                return -1;

            int data = stack[top];
            top--;
            return data;
        }

        public void printStack(){
            System.out.println(Arrays.toString(stack));
        }
    }

    public static void main(String[] args){
        int size = 10;
        RaceConditionExample.Stack stack = new RaceConditionExample.Stack(size);

        // thread 1
        new Thread(() -> {
            int counter = 0;
            while(counter++ < size){
                System.out.println("Pushed in stack: " +  stack.push(100));

            }
        }, "Pusher Thread").start();

        // thread 2
        new Thread(() -> {
            int counter = 0;
            while(counter++ < size){
                System.out.println("Popped from stack: " + stack.pop());
            }
        }, "Popper Thread").start();

        System.out.println("Main is exiting ......");
    }
}

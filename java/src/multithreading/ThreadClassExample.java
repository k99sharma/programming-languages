package multithreading;

public class ThreadClassExample {
    public static class Thread1 extends Thread{
        @Override
        public void run(){
            System.out.println("I am thread1");
        }
    }

    public static void main(String[] args) {
        Thread1 thread1 = new Thread1();
        thread1.start();
    }
}

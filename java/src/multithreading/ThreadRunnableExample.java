package multithreading;

public class ThreadRunnableExample {
    public static class Thread1 implements Runnable{
        @Override
        public void run(){
            System.out.println("I am thread 1");
        }
    }

    public static void main(String[] args) {
        Thread thread1 = new Thread(new Thread1());
        thread1.start();
    }
}

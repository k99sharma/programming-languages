package exceptionHandling;

import java.util.Scanner;

public class ExceptionBlocksExample {
    public static void main(String[] args) {
        try{
            Scanner in = new Scanner(System.in);
            System.out.println("Enter your fav number except 5: ");
            int num = in.nextInt();

            if(num == 5)
                throw new Exception("5 is not allowed.");

            System.out.println("Your fav number is recorded.");
        }catch(Exception e){
            System.out.println(e.getMessage());
        }finally{
            System.out.println("END ...");
        }
    }
}

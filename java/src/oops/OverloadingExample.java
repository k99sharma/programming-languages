package oops;

public class OverloadingExample {
    public static class Person{
        private String name;
        private int age;

        public Person(){
            name = null;
            age = 0;
        }

        public Person(String name, int age){
            this.name = name;
            this.age = age;
        }

        public String getName(){
            return name;
        }

        public void setName(String name){
            this.name = name;
        }

        public int getAge(){
            return age;
        }

        public void setAge(int age){
            this.age = age;
        }

        public void greeting(){
            System.out.println("Hey, " + name);
        }

        public void myAge(){
            System.out.println("My age is " + age);
        }
    }

    public static void main(String[] args){
        // Scenario 1: Name and age is not provided
        Person adam = new Person();
        adam.setName("Adam");
        adam.setAge(20);
        adam.greeting();
        adam.myAge();

        // Scenario 2: Name and age is provided
        Person mark = new Person("Mark", 22);

        mark.greeting();
        mark.myAge();
    }
}

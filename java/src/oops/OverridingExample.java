package oops;

public class OverridingExample {
    public static class Person{
        private String name;
        private int age;

        public Person(String name, int age){
            this.name = name;
            this.age = age;
        }

        public void setName(String name){
            this.name = name;
        }

        public String getName(){
            return name;
        }

        public void setAge(int age){
            this.age = age;
        }

        public int getAge(){
            return age;
        }

        public void greeting(){
            System.out.println("Hey, " + name);
        }
    }

    public static class Male extends Person {
        public Male(String name, int age){
            super(name, age);
        }

        @Override
        public void greeting(){
            System.out.println("Hey there, " + super.name);
        }
    }

    public static void main(String[] args){
        // overriding greeting method
        Male mark = new Male("Mark", 21);
        mark.greeting();
    }
}

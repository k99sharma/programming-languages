// interface

type Sushi = {
  calories: number;
  salty: boolean;
  tasty: boolean;
};

interface SushiInterface {
  calories: number;
  salty: boolean;
  tasty: boolean;
}

// Let's model another food
type Cake = {
  calories: number;
  sweet: boolean;
  tasty: boolean;
};

type Food = {
  calories: number;
  tasty: boolean;
};

// we can & both types
type Sushi2 = Food & {
  salty: boolean;
};

// we can do this same thing using interfaces
interface Person {
  name: string;
  address: string;
}

interface Man extends Person {
  gender: string;
}

const a: Man = {
  name: "Kalash Sharma",
  address: "Baker Street, NY, USA",
  gender: "male",
};

console.log(a);

// we also create class which implements interface
class B implements Man {
  public name: string;
  public address: string;
  public gender: string;

  constructor(name: string, address: string, gender: string) {
    this.name = name;
    this.address = address;
    this.gender = gender;
  }

  public display() {
    console.log(this.name);
    console.log(this.address);
    console.log(this.gender);
  }
}

const b1 = new B("Honey", "Home1", "male");
const b2 = new B("Larry", "Home2", "male");
console.log(b1);
console.log(b2);
console.log(b1 === b2);
console.log(b1 == b2);

export {};

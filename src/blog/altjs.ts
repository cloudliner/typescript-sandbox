const maxCount = 3;
const baseMessage = "Hello!";

class Person {
  constructor(private name: string) {}
  public say(message: string, count: number) {
    for (let i = 1; i <= count; i++) {
      console.log(`${this.name} says ${message} ${i}`);
    }
  }
}

const person = new Person("Bill");
person.say(baseMessage, maxCount);

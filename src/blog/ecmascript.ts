interface IMessage {
  text: string;
  count: number;
}

class Person {
  constructor(private name: string, private age: number) {}
  public say = (message: IMessage) => {
    for (let i = 1; i <= message.count; i++) {
      console.log(`${this.name}(${this.age}) says ${message.text} ${i}`);
    }
  }
}
const person = new Person("Bill", 62);
person.say({ text: "Hello!", count: 3, });

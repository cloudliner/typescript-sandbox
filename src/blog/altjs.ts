const maxCount = 3;
const baseMessage = 'Hello!';

class Messenger {
  constructor(private name:string) {}
  say (message: string, count: number) {
    for (let i = 1; i <= count; i++) {
      console.log(`${this.name} says ${message} ${i}`);
    }
  }
}

const messengaer = new Messenger('Script');
messengaer.say(baseMessage, maxCount);

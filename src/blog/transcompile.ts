interface IMessage {
  count: number;
  text: string;
}

var message: IMessage = {
  text: "Hello!", count: 3,
};

var i: number;
for (i = 1; i <= message.count; i++) {
  console.log(message.text + " " + i);
}

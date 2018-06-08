interface IMessage {
  count: number;
  text: string;
}

var message: IMessage = {
  count: 3, text: "Hello!",
};

var i: number;
for (i = 1; i <= message.count; i++) {
  console.log(message.text + " " + i);
}

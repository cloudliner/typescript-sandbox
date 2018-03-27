const content = document.querySelector("#content");

if (content) {
  const newElement1 = document.createElement("div");
  newElement1.textContent = "Hello World";

  content.appendChild(newElement1);

  const newElement2 = document.createElement("div");
  newElement2.textContent = "Greetings Earth";

  content.appendChild(newElement2);
}

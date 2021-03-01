console.log(React);
console.log(ReactDOM);

const reactContentRoot = document.getElementById("root");

const messageElement = React.createElement("p", null, "Hello, World!");

ReactDOM.render(messageElement, reactContentRoot);
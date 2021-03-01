console.log(React);
console.log(ReactDOM);

const reactContentRoot = document.getElementById("root");

const message = "Hello, World!";

const messageElement = (
    <p>
        {message}
    </p>
);

ReactDOM.render(messageElement, reactContentRoot);
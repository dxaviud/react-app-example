console.log(React);
console.log(ReactDOM);

const reactContentRoot = document.getElementById("root");

const messageElement = (
    <p>
        Hello, World!
    </p>
);

ReactDOM.render(messageElement, reactContentRoot);
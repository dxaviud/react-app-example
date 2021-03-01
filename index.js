console.log(React);
console.log(ReactDOM);

const reactContentRoot = document.getElementById("root");

const App = () => {
    const message = "Hello, World!";

    return (
        <p>{message}</p>
    );
}

// can use App() aswell instead of <App />
ReactDOM.render(<App />, reactContentRoot);

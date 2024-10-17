class App extends React.component{
    render()
    {
     return(
     <div>
        <RandomNum />
        <Hello />
        </div>);
    }
}
let Mydiv = document.querySelector("#root");
let root = ReactDOM.createRoot(Mydiv);
root.render(<App />);
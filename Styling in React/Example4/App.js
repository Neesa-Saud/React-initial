class App extends React.component{
    render()
    {
        return(
            <div>
            <Student 
            name = "Ritik"
            age = {14}
            Subjects = {["Math","English","Science"]}
            marks = {[40,30,70]}
            />
            </div>
        );
    }
}
let mydiv = document.querySelector("#root");
let root = ReactDOM.createRoot(mydiv);
root.render(<App/>);
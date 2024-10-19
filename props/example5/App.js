class App extends React.component{
    render()
    {
        return(
            <div>
            <Student 
            name = "Ritik"
            class = {8}
            Subjects = {["Math","English"]}
            ispass = {true}
            address = {{city :"Dhangadhi",pincode : 12345}}
            />
            </div>
        );
    }
}
let mydiv = document.querySelector("#root");
let root = ReactDOM.createRoot(mydiv);
root.render(<App/>);
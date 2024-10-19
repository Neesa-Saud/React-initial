class App extends React.component{
    render()
    {
        return(
            <div>
                <h1>Course Details !!!!!</h1>
            <Student course="JAVA" titles ={["Java SE", "Jakarta EE","Android"]}/>
            <Student course = "Full stack development" titles = {["Javascript","Html","Css","Node Js"]}/>
            </div>
        );
    }
}
let mydiv = document.querySelector("#root");
let root = ReactDOM.createRoot(mydiv);
root.render(<App/>);
class App extends React.component{
    render()
    {
        return (
           <div><Greetings who ="Narad" from="Ritik" />
           <Greetings who ="Narad"  />
           <Greetings from="Ritik" />
           <Greetings />
           </div>
        )
    }
}
let myDiv = document.querySelector("#root");
let root = ReactDom.createRoot(myDiv);
root.render(<App />);
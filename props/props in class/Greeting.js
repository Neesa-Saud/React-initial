class Greetings extends React.component{
    render()
    {
        let myElement = (
            <h1>Good Morning{this.props.who}from {this.props.from}</h1>
        );
        return myElement;
    }
}
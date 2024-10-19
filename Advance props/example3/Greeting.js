class Greetings extends React.component{
    static defaultProps = {who : 'Everyone',from : 'Us'};
    render()
    {
        let myElement = (
            <h1>Good Morning{String(this.props.who)}from {String(this.props.from)}</h1>
        );
        return myElement;
    }
}
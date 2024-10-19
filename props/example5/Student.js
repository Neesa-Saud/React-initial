class Student extends React.component{
    render()
    {
        let {city,pincode} = this.props.address;
        return(
        <div>
            <h3>Student Details !!!</h3>
            <p> Name: {this.props.name}</p>
            <p>Class : {this.props.class}</p>
            <p>subjects : {this.props.Subjects.join()}</p>
            <p>Pass : {String(this.props.ispass)}</p>
            <p>City : {city}</p>
            <p>Pincode: {pincode}</p>
        </div>
        );
    }
}
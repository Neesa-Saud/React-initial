class Student extends React.component{
    render()
    { 
        let {subjects,marks} = this.props;
        let Total = 0;
        marks.forEach((m)=> {
            Total = Total +m;
        });
        return(
            <div className ="Student">
                <h1>Student Details !!!</h1>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>
                <p>Subjects : </p>
                <ul> 
                   { subjects.map((sub) => (<li>{sub}</li> ))}
                   </ul>
                   <p>Marks : </p>
                   <ul> 
                   { marks.map((m) => (<li>{m}</li> ))}
                   </ul>
                   <p>Total :{Total}</p>
                   <p>Result : {Total >=150 ? Pass : Fail} </p>
            </div>
        )
    }
}
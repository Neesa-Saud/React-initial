class Student extends React.component{
    render()
    { 
        let StudentStyle ={backgroundColor : "Blue",borderRadius: "20%"};
         let pass ={backgroundColor : "LimeGreen"};
         let fail ={backgroundColor : "Red"};
        let {subjects,marks} = this.props;
        let Total = 0;
        marks.forEach((m)=> {
            Total = Total +m;
        });

        return(
            <div style = {StudentStyle}>
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
                   <p>
                    <span style = {Total >=150 ? pass : fail}>
                        Result : {Total >=150 ? Pass : Fail}
                         </span>
                     </p>
            </div>
        )
    }
}
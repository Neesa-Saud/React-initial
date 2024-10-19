class Student extends React.component{
    render()
    { let {course,title} = this.props;
        return(
        <div>
            <p>Course : {course}</p>
            <p> Titles :<ul>
                    {title.map((subj)=> 
                     <li>{subj}</li>)}
                     </ul>
                      </p>
        </div>
        );
    }
}
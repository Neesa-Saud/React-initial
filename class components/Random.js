function getNum()
{
    const num =[1,2,3,4,5,6,7,8,9];
    const value = num[Math.floor(Math.random()*num.length)];
    return value;
}
class RandomNum extends React.component{
    render(){
    const value = getNum();
    let msg = null;
    if(value ==6)
    {
        msg = (<p>
            congratulations You Won!!!!!!!!!!!!!!!
        </p>);
    }
    else
    {
        msg =(<p>
            Better luck next time
        </p>);
    }
    return(<div>
        <p>You got the number {value}</p>
        {msg}
        </div>);
    }

}
var sum=0,gun=0;
function ok()
{
    var credit=document.getElementById("input1").value;
    var grade=document.getElementById("input2").value;

    gun+=Number(credit)*Number(grade);
    sum=Number(sum)+Number(credit);

    document.getElementById("showResult").innerHTML=(gun/sum);
}
function reset()
{
    gun=0;
    sum=0;
    var credit=document.getElementById("input1").value='';
    var grade=document.getElementById("input2").value='';

    document.getElementById("showResult").innerHTML='--';
}
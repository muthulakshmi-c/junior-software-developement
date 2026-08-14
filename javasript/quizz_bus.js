let a=Number(prompt("enter the a"));
if((a%3==0)&&(a%5==0))
{
    document.write("quizz and bus");
}
else if(a%3==0)
{
document.write("quizz")
}
else if((a%5==0))
{
    document.write("bus")
}
else
{
    document.write("enter the a"+a)
}
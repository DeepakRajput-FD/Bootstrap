let header1=document.getElementById('header1');
let header2=document.getElementById('header2');
let header3=document.getElementById('header3');
let header4=document.getElementById('header4');
let header5=document.getElementById('header5');
let header6=document.getElementById('header6');
let header7=document.getElementById('header7');

document.addEventListener('scroll',function()
{
    let scrollpositon=window.scrollY;

    if (scrollpositon>50)
     {
        header1.style.visibility='visible';
        header2.style.visibility='visible';
        header3.style.visibility='visible';
        header4.style.visibility='visible';
        header5.style.visibility='visible';
        header6.style.visibility='visible';
        header7.style.visibility='visible';
    }
    
});
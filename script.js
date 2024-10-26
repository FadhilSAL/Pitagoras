
function cari(){
    const sikusikusatu = parseFloat(document.getElementById('input1').value);
    const sikusikudua = parseFloat(document.getElementById('input2').value);
    
   
    const c = sikusikusatu*sikusikusatu +sikusikudua*sikusikudua
   const ce = Math.pow(c, 1/2);


   

   document.getElementById('hasil').textContent = ce;
    
}

function refresh(){
    window.location.reload("Refresh")
}
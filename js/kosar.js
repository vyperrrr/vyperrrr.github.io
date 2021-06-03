window.addEventListener("load", init, false);

let kosar=[];

function init(){
    kosarBetolto();
    kosarRender();
    $("kosarTablazat").addEventListener("change", kosarFrissito, false);
}

function kosarFrissito(){
    for(let i = 0;i <kosar.length;i++){
        kosar[i].mennyiseg=$("mennyisegTd"+i).value;
    }
    
    sessionStorage.setItem("kosar", JSON.stringify(kosar));
    $("badge").innerText=kosarMeret();

    if(kosarMeret()==0){
        $("rendel").disabled=true;
    }else{
        $("rendel").disabled=false;
    }

    $("fizetendo").innerText=kosarOsszeg()+" Yang";
}

function kosarRender(){
    if(kosar.length!=0){

        for(let i = 0; i < kosar.length; i++){
            $("kosarTablazat").innerHTML+='<tr> <th scope="row" id="'+ i +'">'+ (i+1) +'</th> <td>'+ kosar[i].nev +'</td> <td>'+ kosar[i].ar +' Yang</td> <td><input type="number" value="'+ kosar[i].mennyiseg +'" min="0" onKeyDown="return false" id="mennyisegTd'+ i +'"></td> </tr>';
        }

        $("kosarTablazat").innerHTML+='<tr> <th scope="row" colspan="2">Összesen</th> <td id="fizetendo">'+ kosarOsszeg() +' Yang</td> <td><input type="button" class="btn btn-primary" value="Adatok megadása" id="rendel"></td> </tr>';
        $("rendel").addEventListener("click", rendeles, false);
    }else{
        $("valtas").style.display="none";
        $("uresKosarDiv").style.display="block";
    }
}

function rendeles(){
    $("form1").style.display="block";
    $("fizetesiMod").addEventListener("change", kartyasFizetes, false);
    $("veglegesites1").addEventListener("click", veglegesites, false);
    $("veglegesites2").addEventListener("click", veglegesites, false);
}

function veglegesites(){
    $("valtas").style.display="none";
    $("koszonesDiv").style.display="block";
    kosarReset();
}

function kartyasFizetes(){
    $("form2").style.display="none";
    $("veglegesites1").style.display="block";

    if($("gridRadios2").checked){
        $("form2").style.display="block";
        $("veglegesites1").style.display="none";
    }
}

function kosarOsszeg(){
    let vegosszeg=0;
    if(kosar.length!=0){
        for(let i = 0;i < kosar.length; i++){
            vegosszeg+=kosar[i].ar*kosar[i].mennyiseg;
        }
    }

    return vegosszeg;
}

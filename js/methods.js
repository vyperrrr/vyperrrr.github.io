function $(id){
    return document.getElementById(id);
}

function kosarBetolto(){
    if(sessionStorage.getItem("kosar") != null){
        kosar=JSON.parse(sessionStorage.getItem("kosar"));
        $("badge").innerText=kosarMeret();
    }

    for(let i=0; i<kosar.length; i++){
        if(kosar[i].mennyiseg == 0){
            kosar.splice(i,1);
            i--;
        }
    }
}

function kosarMeret(){
    let osszesen=0*1;

    if(sessionStorage.getItem("kosar") != null && kosar.length!=0){
        let i=0;
        while(i<kosar.length){
            osszesen+= kosar[i].mennyiseg*1;
            i++;
        }
    }

    return osszesen;
}

function kosarReset(){
    kosar=[];
    sessionStorage.setItem("kosar", JSON.stringify(kosar));
    $("badge").innerText="0";
}
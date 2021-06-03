window.addEventListener("load", init, false);

let kosar=[];

function init(){
    $("card1price").addEventListener("click", kosarba, false);
    $("card2price").addEventListener("click", kosarba, false);
    $("card3price").addEventListener("click", kosarba, false);
    $("card4price").addEventListener("click", kosarba, false);
    $("card5price").addEventListener("click", kosarba, false);
    $("card6price").addEventListener("click", kosarba, false);
    $("card7price").addEventListener("click", kosarba, false);
    $("card8price").addEventListener("click", kosarba, false);
    $("card9price").addEventListener("click", kosarba, false);
    $("card10price").addEventListener("click", kosarba, false);
    $("card11price").addEventListener("click", kosarba, false);
    $("card12price").addEventListener("click", kosarba, false);
    $("card13price").addEventListener("click", kosarba, false);
    $("card14price").addEventListener("click", kosarba, false);
    $("card15price").addEventListener("click", kosarba, false);
    $("card16price").addEventListener("click", kosarba, false);

    kosarBetolto();
}

function kosarba(e){
    let card = e.target.id+"";
    card = card.substring(0, 6)
    if(card.charAt(card.length-1)=='p'){
        card=card.substring(0,5);
    }

    let etel = peldanyosito(card)
    let vanBenne= kosarScanner(etel.nev);

    if( vanBenne > -1){
        kosar[vanBenne].mennyiseg++;
    }else{
        kosar.push(etel);
    }

    $("badge").innerText=kosarMeret();

    sessionStorage.setItem("kosar", JSON.stringify(kosar));
}

function kosarScanner(name){
    let index = -1;

    for(let i = 0; i < kosar.length; i++){
        if(kosar[i].nev==name){
            index = i;
        }
    }

    return index;
}

function peldanyosito(cardId){
    let etel = {
        nev: $(cardId+"name").innerText,
        id: cardId.substring(4),
        ar: $(cardId+"price").value.split(" ")[0],
        mennyiseg: 1
    }

    return etel;
}

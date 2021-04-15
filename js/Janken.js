
window.addEventListener("load",jankenLoad);

function main(hand){

    
    let cpHand ;
    let playerHand;
    let result;

    const JANKEN_HANDS = ['グー','チョキ','パー'];
    const JUDGE = ['勝ち','負け','引き分け']; 

    playerHand = hand.target.id;
    //CPの手をランダム生成
    cpHand = JANKEN_HANDS[Math.floor(Math.random() * 3)] ;

    //勝敗判定
    result = judge(playerHand,cpHand);

    if(result === 2){
        alert(`勝敗は引き分け\nあなたが出した手は${playerHand}\nコンピューターが出した手は${cpHand}`);
    }else{
        alert(`あなたは${JUDGE[result]} \nあなたが出した手は${playerHand}\nコンピューターが出した手は${cpHand}`);
    }  
}

function judge(playerHand,cpHand){

    const JUDGE_PLAYER = 0;
    const JUDGE_COMPUTER = 1;
    const JUDGE_DRAW = 2;
    

    
    // 0ぐー　1ちょき　2パー
    //勝敗判定
    if(playerHand === "グー" && cpHand === "チョキ"){
        return JUDGE_PLAYER;
    }else if(playerHand === "グー" && cpHand === "パー"){
        return JUDGE_COMPUTER;
    }else if(playerHand === "チョキ" && cpHand === "グー"){
        return JUDGE_COMPUTER;
    }else if(playerHand === "チョキ" && cpHand === "パー"){
        return JUDGE_PLAYER;
    }else if(playerHand === "パー" && cpHand === "グー"){
        return JUDGE_PLAYER;
    }else if(playerHand === "パー" && cpHand === "チョキ"){
        return JUDGE_COMPUTER;
    }else{
        return JUDGE_DRAW;
    }
}


function jankenLoad(){


    let btnGoo = document.getElementById("グー");
    let btnChoki = document.getElementById("チョキ");
    let btnPar = document.getElementById("パー");

    btnGoo.addEventListener("click",main,false);
    btnChoki.addEventListener("click",main,false);
    btnPar.addEventListener("click",main,false);
}
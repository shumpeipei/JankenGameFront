
window.addEventListener("load",jankenLoad);
window.addEventListener("load",jankenReset);

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

    //画像変更
    changeImage(playerHand,cpHand);
    
    //センター画像を非表示
    document.getElementById("img_choki").style.display="none";


    if(result === 2){
        document.getElementById("test_judge").innerText = `僕たちは引き分け\nあなたが出した手は${playerHand}\nコンピューターが出した手は${cpHand}`;
    }else{
        document.getElementById("test_judge").innerText = `あなたは${JUDGE[result]} \nあなたが出した手は${playerHand}\nコンピューターが出した手は${cpHand}`;
    }  
}

//勝敗判定処理
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

//じゃんけんボタンクリックのイベント
function jankenLoad(){


    let btnGoo = document.getElementById("グー");
    let btnChoki = document.getElementById("チョキ");
    let btnPar = document.getElementById("パー");

    

    btnGoo.addEventListener("click",main,false);
    btnChoki.addEventListener("click",main,false);
    btnPar.addEventListener("click",main,false);
}

//リセットボタンのクリックイベント
function jankenReset(){

    let btnReset = document.getElementById("reset");
    btnReset.addEventListener("click",reset,false);
    
}

//初期表示状態に戻す
function reset(){

    console.log("reset");

    let img_goo       = document.getElementById("img_goo");   
    let img_choki     = document.getElementById("img_choki");
    let img_par       = document.getElementById("img_par");
    let text          = document.getElementById("test_judge");

    //センター画像を表示
    document.getElementById("img_choki").style.display="inline-block";

    img_goo.src = "../HTML/src/goo.png";
    img_choki.src = "../HTML/src/choki.png";
    img_par.src = "../HTML/src/par.png";
    text.innerText ="君の出したい手はなにかな？\n出したい手のボタンをクリックしよう！";
    
}


//画像を切り替える関数
function changeImage(player,cp){

    let player_num = player;
    let cp_num = cp;
    let img_player = document.getElementById("img_goo");   
    let img_cp     = document.getElementById("img_par");


    if(player_num === "グー"){
        img_player.src = "../HTML/src/goo.png";
    }else if(player_num === "チョキ"){
        img_player.src = "../HTML/src/choki.png";
    }else{
        img_player.src = "../HTML/src/par.png";
    }

    if(cp_num === "グー"){
        img_cp.src = "../HTML/src/goo.png";
    }else if(cp_num === "チョキ"){
        img_cp.src = "../HTML/src/choki.png";
    }else{
        img_cp.src = "../HTML/src/par.png";
    }

}




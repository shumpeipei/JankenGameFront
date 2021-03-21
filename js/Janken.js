
var cpHand ;
var playerHand;
var judge;

const JUDGE = new Array("あなた","コンピューター","引き分け"); 
const JANKEN_HANDS = new Array("グー","チョキ","パー");

function main(hand){
    
    playerHand = hand;
    //CPの手をランダム生成
    cpHand = Math.floor(Math.random() * 3);

    //勝敗判定
    judge = Judge(playerHand,cpHand);

    alert("勝敗は"+ JUDGE[judge] +"。\nあなたが出した手は" + JANKEN_HANDS[playerHand] +"です\n相手が出した手は" + JANKEN_HANDS[cpHand] +"です");
    
}

function Judge(playerHand,cpHand){

    const JUDGE_PLAYER = 0;
    const JUDGE_COMPUTER = 1;
    const JUDGE_DRAW = 2;
    
    //勝敗判定
    if(playerHand == 0 && cpHand == 1){
        return JUDGE_PLAYER;
    }else if(playerHand == 0 && cpHand == 2){
        return JUDGE_COMPUTER;
    }else if(playerHand == 1 && cpHand == 0){
        return JUDGE_COMPUTER;
    }else if(playerHand == 1 && cpHand == 2){
        return JUDGE_PLAYER;
    }else if(playerHand == 2 && cpHand == 0){
        return JUDGE_PLAYER;
    }else if(playerHand == 2 && cpHand == 1){
        return JUDGE_COMPUTER;
    }else{
        return JUDGE_DRAW;
    }


}








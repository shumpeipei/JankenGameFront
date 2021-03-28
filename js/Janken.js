
function main(hand){

    let cpHand ;
    let playerHand;
    let result;

    const JANKEN_HANDS = ['グー','チョキ','パー'];
    const JUDGE = ['勝ち','負け','引き分け']; 

    playerHand = hand;
    //CPの手をランダム生成
    cpHand = Math.floor(Math.random() * 3);

    //勝敗判定
    result = judge(playerHand,cpHand);

    if(result === 2){
        alert(`勝敗は引き分け\nあなたが出した手は${JANKEN_HANDS[playerHand]}\nコンピューターが出した手は${JANKEN_HANDS[cpHand]}`);
    }else{
        alert(`あなたは${JUDGE[result]} \nあなたが出した手は${JANKEN_HANDS[playerHand]}\nコンピューターが出した手は${JANKEN_HANDS[cpHand]}`);
    }

    
}

function judge(playerHand,cpHand){

    const JUDGE_PLAYER = 0;
    const JUDGE_COMPUTER = 1;
    const JUDGE_DRAW = 2;
    
    //勝敗判定
    if(playerHand === 0 && cpHand === 1){
        return JUDGE_PLAYER;
    }else if(playerHand === 0 && cpHand === 2){
        return JUDGE_COMPUTER;
    }else if(playerHand === 1 && cpHand === 0){
        return JUDGE_COMPUTER;
    }else if(playerHand === 1 && cpHand === 2){
        return JUDGE_PLAYER;
    }else if(playerHand === 2 && cpHand === 0){
        return JUDGE_PLAYER;
    }else if(playerHand === 2 && cpHand === 1){
        return JUDGE_COMPUTER;
    }else{
        return JUDGE_DRAW;
    }


}


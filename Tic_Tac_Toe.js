function randomIndex(inputs,num){ // num=> number of choices for example 1,2,3=> num=3 , must be smaller or == 10
    if(num==0) return -1;
    if(num==1) return  inputs[0];
    let random=Math.random();
    random*=10; 
    random=Math.floor(random);
    return inputs[random%num];
/*
let random=Math.random();
    random*=10; 
    random=Math.floor(random)+1; // give 0-9 number , +1 to avoid divide by zero error
    let selector=Math.ceil(10/num)+1;
    let selcted=random/(selector);
    
*/
}

inputs=[1,2,3,4,5,6,7,8,9,10];
for(let i=9;i>-1;i--){
    for(let j=1;j<11;j++){
       out("num:"+i+" "+randomIndex(inputs,i));
    }
    out("/n");
}

class xoElement{
    constructor(row,column){
        this.row=row;
        this.column=column;
    }
}
function twoIndexExcept(index){
    if(index==0) return [1,2];
    else if(index==1) return [0,2];
    else return [0,1];
}
function findWinIndex(myMoves,opponentMoves){
    let opsRows=[],opsColumns=[]; // to note filled opponents rows and columns
    for(let i=0;i<opponentMoves.length;i++){   
        opsRows.push(opponentMoves[i].row);
        opsColumns.push(opponentMoves[i].column);
    }

    let rowFinder=(i1,i2)=>{
        if(myMoves[i1].row==myMoves[i2].row && !opsRows.includes(myMoves[i1].row)) return true;
        else false;
    }
    console.log(slidingWindowLoop(rowFinder,myMoves));
}
function slidingWindowLoop(logicFunction,arrayObjects){
    for(let i=1;i<arrayObjects.length;i++){
        for(let j=i;j<arrayObjects.length;j++){
            if(logicFunction(j,j-i)) return [j,j-i];
        }
    }
} 
function findChances(selectedMove,myMoves,opponentMoves){


}






function out(x){
    console.log(x);
}
out(twoIndexExcept(0));
out(twoIndexExcept(1));
out(twoIndexExcept(2) );

let myMoves=[
    new xoElement(0,0),
    new xoElement(2,0),
    new xoElement(2,2)
];
let opponentMoves=[
    new xoElement(0,2),
    new xoElement(1,1),
];
findWinIndex(myMoves,opponentMoves);
opponentMoves[1]=new xoElement(2,1);
findWinIndex(myMoves,opponentMoves);











/* 
tested code

for(let i=1;i<=5;i++)
{
    selectIndex([0,1],2);   
}
console.log();
for(let i=1;i<=5;i++)
{
    selectIndex([1,2],2);
}
console.log();
for(let i=1;i<=5;i++)
{
    selectIndex([0,1,2],3);
}
*/
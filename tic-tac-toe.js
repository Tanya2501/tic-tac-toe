class TicTacToe {
    constructor() {
this.player='x';
this.table=[];
for (var i=0; i<3; i++){
    this.table[i]=[];
    for (var j=0; j<3; j++){
        this.table[i][j]=null;
    }
}
    }

    getCurrentPlayerSymbol() {
return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.table[rowIndex][columnIndex]===null){
            this.table[rowIndex][columnIndex]=this.player;
       return this.player==='x'?this.player='o':this.player='x';}
      return this.player;
    }

    isFinished() {
        return this.getWinner()!==null || this.isDraw()===true || this.noMoreTurns()===true?true:false;   
}

    getWinner() {
for (var i=0; i<3;i++){
    var j=0;
      if (this.table[i][j]==this.table[i][j+1] && this.table[i][j]==this.table[i][j+2] && this.table[i][j]!==null){  
    return this.table[i][j];
}
}
for (var j=0; j<3;j++){
   var i=0;
    if (this.table[i][j]==this.table[i+1][j] && this.table[i][j]==this.table[i+2][j] && this.table[i][j]!==null) { 
    return this.table[i][j];
}
} 
var k=0;
if (this.table[k][k]==this.table[k+1][k+1] && this.table[k][k]==this.table[k+2][k+2] && this.table[k][k]!==null){
    return this.table[k][k];
}
var p=0; 
var m=2;
if (this.table[p][m]==this.table[p+1][m-1] && this.table[p][m]==this.table[p+2][m-2] && this.table[p][m]!==null){
    return this.table[p][m];
}
return null;
    }

    noMoreTurns() {
       for (var i=0; i<3; i++){
    for (var j=0; j<3; j++){
        if (this.table[j][i]===null){
            return false;
        }
    }} 
return true;
}

    isDraw() {
        return this.noMoreTurns()===true && this.getWinner()===null; 
}

    getFieldValue(rowIndex, colIndex) {
      return  this.table[rowIndex][colIndex];
}
}
module.exports = TicTacToe;

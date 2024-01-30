function testvoyelle(lettre){
    var tab=["A", "E","I","O","U","Y"]
    if (lettre.toUpperCase() in tab ){
        console.log('VOYELLE')
    }
    else {
        console.log('console')
    }
}


function testadmis(moy){
     if( moy >=10) {
        return 'admis'}
 else if (9<=moy <10){
    return 'CONTROLE'
 }
 else if (moy<9) {
    return 'REDOUBLE'
 }
}


function thehottest(T){
    if (T<0) {
        return 'GLACE'
    }
    else if (T>0 && T<100) {
        return 'Liquide'
    }
    else if (T>100){
        return 'Gaz'
    }
}


function cout(nb){
    var money 
    if (nb<10) {
        money=nb*50
        return ['we owe you ',money,'mil']
    }
    else if (10<=nb<50 ) {
        money=nb*40
         return ['we owe you ',money,'mil']
    }
    else if (nb>=50){
        money=nb*35
        return ['we owe you ',money,'mil']
    }
} 


function space(ch){
    var i 
    for(i in ch){
        if (i==" "){
            console.log( 'contient espace')
        }
        else if (i!==" "){
        console.log( 'un seul mot ')
        }
    }
}
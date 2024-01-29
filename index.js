function predictsign(x,y){
    var p=x*y
    if(((x<0) && (y<0))||((x>0)&&(y>0))) {
       console.log('produit positif a la base ') 
       return p
    }
    else {
       console.log('produit negatif a la base converted to be positif')
        return p*-1
    }
}
function addtotable(x){
    var tab=[]
    if (typeof(x)=='number' && x>0){
        tab.push(x)
       
    } 
    else {
        console.log('sorry not happening ')
    }
    return tab
}

let composantSys={
    EC2:0.9,
    RDS:0.9995,
    ELB:0.9999,
    EFS:0.9999
}
let ObjetdisponibilityOfcomposant={}// objet vide pour place disponibilite de composante
let TableOfObjetDisponibilityOfComposant=[] // table de objet la dans

let input=require('prompt-sync')()

let ArrayOfNumberOfComposantSys=[]//je mettre dans un tablea le nombre de composante


let ArrayOfProprietObject=Object.keys(composantSys)//je transforme propriete de cet objet en tableau
let NumberOfCompasantSys=()=>{
    let i=0
    while(i<4){
    let put=input(`combien de ${ArrayOfProprietObject[i]} vous mettrez: `)
    ArrayOfNumberOfComposantSys.push(put)
    i++
    }
}

let probabilityOfIndispo=(Composante)=>{
    let valueOfindex=ArrayOfProprietObject.indexOf(Composante)
    return ((1-composantSys[Composante])**ArrayOfNumberOfComposantSys[valueOfindex])
}
let ProbabilityDispo=()=>{
    for(let i=0;i<ArrayOfNumberOfComposantSys.length;i++){
        if(ArrayOfNumberOfComposantSys[i]==1){
            let valeur =composantSys[ArrayOfProprietObject[i]]
            ObjetdisponibilityOfcomposant[ArrayOfProprietObject[i]]=valeur
        }
        else{
            console.log(`la probabilite indisponibilite de ${ArrayOfProprietObject[i]} est ${probabilityOfIndispo(ArrayOfProprietObject[i])}`);
            let valeur =1-probabilityOfIndispo(ArrayOfProprietObject[i])
            ObjetdisponibilityOfcomposant[ArrayOfProprietObject[i]]=valeur
        }
    }
    TableOfObjetDisponibilityOfComposant.push(ObjetdisponibilityOfcomposant)
}
let finalProbabilityDispo=()=>{
    let result=1
    for(let composante in ObjetdisponibilityOfcomposant){
        result*=ObjetdisponibilityOfcomposant[composante]
    }
    return result.toFixed(5)
}

NumberOfCompasantSys()
ProbabilityDispo()
console.log(ArrayOfNumberOfComposantSys);
//console.log(TableOfObjetDisponibilityOfComposant);
console.log(ObjetdisponibilityOfcomposant);
console.log(finalProbabilityDispo());
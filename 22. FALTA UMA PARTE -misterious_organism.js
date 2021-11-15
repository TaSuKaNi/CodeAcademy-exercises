/*


##############################################################3
###############################################################

FALTA AINDA:
    * DESCOBRIR COMO NÃO REPETIR O MESMO SPECIMENNUM QUANDO CHAMO ALEATÓRIO
    * DESCOBRIR OS STRANDS QUE SÃO MAIS PARECIDOS DENTRO DE UM CONJUNTO

*/







// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  //-------------------  my code  -------------------------------


  // ************************************************************
  //****************  OBJECT  ***********************************
  //------------------------------------- to save all random strands

  const strands = {
      _types: [],
      addType (num,arr) {
            let newType = pAequorFactory(num,arr)
            if (newType.willLikelySurvive()) {
                return this._types.push(newType)
           }
      }
  }

//********************************************************************
//*************************  FUNCTION  *******************************
//----------------------------------------------------- strand factory
let pAequor = []

function pAequorFactory (num,arr) {
  
    /* AINDA NAO ESTA FUNCIONANDO! PRECISO QUE OS NUM DE DUAS ESPECIES NAO SEJAM IGUAIS!



    for (i=0; i < pAequor.length; i++) {
        let a=num
        while (pAequor[i].specimenNum == a) {
            a = Math.floor(Math.random()*5)
        }
        num=a
        pAequor.push(num)
    }
    */
    
    return {
                
                specimenNum: num ,
                dna: arr ,

                mutate () {
                    let newBase = this.dna[Math.floor(Math.random()*15)];
                    let indexNewBase = this.dna.indexOf(newBase);
                    let returned;
                    do { returned = returnRandBase() } while (returned == newBase);
                    this.dna.splice(indexNewBase,1,returned);
                    return this.dna
                } ,

                compareDna (pAequor) {
                    let arrLength= this.dna.length;
                    let count=0;
                    for (i=0; i<arrLength; i++) {
                        this.dna[i] == pAequor.dna[i] ? count++ :count
                    };
                    console.log("Compatibility of DNA:"  + Math.round(count/arrLength*100) + "%");
                } ,

                willLikelySurvive() {
                    count=0;
                    this.dna.forEach( base => {
                        base =="C" || base =="G" ? count++ : count;
                    });
                    return count/this.dna.length >= 0.6 
                    
                } , 

                complementStrand () {
                    let complementary =[];
                    this.dna.forEach(element => {
                        switch(element) {
                            case "A": complementary.push("T"); break;
                            case "T": complementary.push("A"); break;
                            case "C": complementary.push("G"); break;
                            case "G": complementary.push("C"); break; 
                        }
                    })
                    return complementary

                }


          
    } 
}

//----------- selecting 30 random strands that are likely to survive 
//            (.willLikelySurvive > 60%) and saving it at the object strands
 
do {
    strands.addType(Math.floor(Math.random()*100),mockUpStrand())
 } while (strands._types.length <30)


 // UNCOMMENT /* ... */ TO TEST

/*

let a =pAequorFactory(Math.floor(Math.random()*30),mockUpStrand())
let b= pAequorFactory(4,mockUpStrand())

// -- USING .MUTATE()
console.log(`The array before: \n ${a.dna}`)
console.log(`The array after mutation: \n ${a.mutate()}`)

//-- USING .COMPARE(arr)
a.compareDna(b)

//-- USING WILLLIKELYSURVIVE ()
console.log(a.willLikelySurvive())

//--- Object of 30 strands likely to survive
console.log(strands)

//--- USING COMPLEMENTSTRND ()
console.log(a.dna)
console.log(a.complementStrand())

*/
 

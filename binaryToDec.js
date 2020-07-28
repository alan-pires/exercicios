const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function convert(){
    rl.question('Entre com um número binario de até 8 dígitos: ', function(bin){
        if(bin.length > 8){
            console.log('Somente até 8 dígitos.')
            rl.close()
            return
        }
         let binA = Array.from(bin)
        for(let i=0; i<binA.length; i++){
            if(binA[i] != '0' && binA[i] != '1' ){
                console.log('O número precisa ser binário.')               
                rl.close()
                return
            }
        }
        let result = parseInt(bin, 2)
        console.log('O número '+bin+' em decimal é: '+result)
        rl.close()
    })    
}

convert()

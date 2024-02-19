battle(101, 0);

function battle(wins,loss){
    console.log(`Número de vitórias: ${wins}`)
    console.log(`Número de derrotas: ${loss}`)
    let balanceRanking = wins - loss
    console.log("Seu saldo de batalhas é: " + balanceRanking)

    let level = "outro nível"

    if (balanceRanking <= 10){
        level = "ferro";
    }
        else if(balanceRanking > 10 && balanceRanking <=21){
            level = "bronze";
         }
            else if(balanceRanking > 20 && balanceRanking <=50){
                level = "prata";
            }
                else if(balanceRanking > 50 && balanceRanking <=80){
                    level = "ouro";          
                }
                    else if(balanceRanking > 80 && balanceRanking <=90){
                        level = "Diamante";
                }
                    else if(balanceRanking > 90 && balanceRanking <=100){
                        level = "lendário";
                    }
                        else {
                            level = "imortal";
                        }








console.log(`O herói tem o saldo de ${balanceRanking} e está no nível ${level}!`)

}


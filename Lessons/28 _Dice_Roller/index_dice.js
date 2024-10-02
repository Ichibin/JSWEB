

function rollDice(){
    const numDice = document.getElementById('numDice').value;
    const diceResult =  document.getElementById('diceResult');
    const diceImgs =  document.getElementById('diceImgs');

    const values = [];
    const images =[];

<<<<<<< HEAD
    // for(let i = 0; i < numDice;i++){
        // const value = Math.floor(Math.random() *6)+1;
        // // console.log(value);
        // values.push(value);

        while(values.length+1 <= numDice){
            const value = Math.floor(Math.random() *6)+1;
            
            if(values.includes(value)){
                continue;
            }
            else{
                console.log(values.length);
                values.push(value);
                images.push(`<img src ="Dice_imgs/D${value}.png" alt="Dice Number ${value}">`)
            }

        }

    
        

    // }
=======
    for(let i = 0; i < numDice;i++){
        const value = Math.floor(Math.random() *6)+1;
        // console.log(value);
        values.push(value);
        images.push(`<img src ="Dice_imgs/D${value}.png" alt="Dice Number ${value}">`)

    }
>>>>>>> b732262a8417f88446951cea68589bfca02acec4

    diceResult.textContent = `Dice: ${values.join(', ')}`;

    diceImgs.innerHTML = images.join('');

} 

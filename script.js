
// Array.from(boxes).forEach((element =>{
//     let text  = document.querySelector('.boxText');
//     text.addEventListener('click',(e)=>{
//         if(e.innerText === '')
//         return turn;
//         changeTurn();
//         checkWin(); 
//     }) 
// }))
let turn ='X';
let count = 0;

 function changeTurn(){
    if(turn==='X'){
        turn = 'O';
    }

    else
    {
        turn = 'X';
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    console.log(" Welcome to game ");

    

// Gain Logic
// let boxes = document.querySelectorAll('.box');

    document.querySelector('.box1').onclick = () =>{
        document.querySelector('.boxText1').innerHTML = turn;
        changeTurn();
        win();
    }
    document.querySelector('.box2').onclick = () =>{
        document.querySelector('.boxText2').innerHTML = turn;
        changeTurn();
        win();
    }
    document.querySelector('.box3').onclick = () =>{
        document.querySelector('.boxText3').innerHTML = turn;
        changeTurn();
        win();
    }
    document.querySelector('.box4').onclick = () =>{
        document.querySelector('.boxText4').innerHTML = turn;
        changeTurn();
        win();
    }
    document.querySelector('.box5').onclick = () =>{
        document.querySelector('.boxText5').innerHTML = turn;
        changeTurn();
        win();

    }
    document.querySelector('.box6').onclick = () =>{
        document.querySelector('.boxText6').innerHTML = turn;
        changeTurn();
        win();

    }
    document.querySelector('.box7').onclick = () =>{
        document.querySelector('.boxText7').innerHTML = turn;
        changeTurn();
        win();

    }
    document.querySelector('.box8').onclick = () =>{
        document.querySelector('.boxText8').innerHTML = turn;
        changeTurn();
        win();

    }
    document.querySelector('.box9').onclick = () =>{
        document.querySelector('.boxText9').innerHTML = turn;
        changeTurn();
        win();

    }

    document.querySelector('.reset').onclick = () =>{
        // let temp1 = document.querySelector('.boxText1');
        // console.log(temp1.value);
        document.querySelector('.boxText1').innerHTML = '';
        document.querySelector('.boxText2').innerHTML = '';
        document.querySelector('.boxText3').innerHTML = '';
        document.querySelector('.boxText4').innerHTML = '';
        document.querySelector('.boxText5').innerHTML = '';
        document.querySelector('.boxText6').innerHTML = '';
        document.querySelector('.boxText7').innerHTML = '';
        document.querySelector('.boxText8').innerHTML = '';
        document.querySelector('.boxText9').innerHTML = '';
        document.querySelector('.update').innerHTML = '';
        document.querySelector('.panda69').innerHTML = '';
    }

    function win(){
        let temp1 = document.querySelector('.boxText1');
        let temp2 = document.querySelector('.boxText2');
        let temp3 = document.querySelector('.boxText3');
        let temp4 = document.querySelector('.boxText4');
        let temp5 = document.querySelector('.boxText5');
        let temp6 = document.querySelector('.boxText6');
        let temp7 = document.querySelector('.boxText7');
        let temp8 = document.querySelector('.boxText8');
        let temp9 = document.querySelector('.boxText9');
        
        if((temp1.innerHTML === temp2.innerHTML && temp2.innerHTML===temp3.innerHTML && temp1.innerHTML !=='') ||
           (temp4.innerHTML === temp5.innerHTML && temp5.innerHTML===temp6.innerHTML && temp4.innerHTML !=='') ||
           (temp7.innerHTML === temp8.innerHTML && temp8.innerHTML===temp9.innerHTML && temp7.innerHTML !=='') ||
           (temp1.innerHTML === temp4.innerHTML && temp4.innerHTML===temp7.innerHTML && temp1.innerHTML !=='') ||
           (temp2.innerHTML === temp5.innerHTML && temp5.innerHTML===temp8.innerHTML && temp2.innerHTML !=='') ||
           (temp3.innerHTML === temp6.innerHTML && temp6.innerHTML===temp9.innerHTML && temp3.innerHTML !=='') ||
           (temp3.innerHTML === temp5.innerHTML && temp5.innerHTML===temp7.innerHTML && temp3.innerHTML !=='') ||
           (temp1.innerHTML === temp5.innerHTML && temp5.innerHTML===temp9.innerHTML && temp1.innerHTML !=='') 
           ) 
        {
            document.querySelector('.update').innerHTML = 'You won TopG';
            document.querySelector('.panda69').innerHTML= '<img src="dancingPanda.gif" class="panda">';
        }
        // if()
    }

});
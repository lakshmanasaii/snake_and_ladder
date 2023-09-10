var start = document.querySelector ('.start');
var startclass = document.querySelector('#startclass');
var startplayer1 = document.querySelector('.startplayer1');
var startplayer2 = document.querySelector('.startplayer2');
var player1 = document.querySelector('.player1')
var player2 = document.querySelector('.player2')
var dice = document.querySelector('.dice')
var score1= document.querySelector('.score1')
var score2 = document.querySelector('.score2')
var diceimg = document.querySelector('.diceimg')
var newgame = document.querySelector('.newgame')
var player1win = document.querySelector('.player1win')
var player2win = document.querySelector('.player2win')
var snake1 = document.querySelector('.snake1')
var ladder1 = document.querySelector('.ladder1')
var snake2 = document.querySelector('.snake2')
var ladder2 = document.querySelector('.ladder2')
var rightside = document.querySelector('.rightside')
var leftside = document.querySelector('.leftside')
var overlay = document.querySelector('.overlay');
var num=0
var val=0
var n1=0
var n2=0

//starting condition
score1.textContent= 0;
score2.textContent= 0;
diceimg.classList.add('hidden');
dice.classList.add('hidden');
player1win.classList.add('hidden')
player2win.classList.add('hidden')
ladder1.classList.add('hidden')
snake1.classList.add('hidden')
ladder2.classList.add('hidden')
snake2.classList.add('hidden')
rightside.classList.add('hidden')
leftside.classList.add('hidden')




//start button clock
start.addEventListener('click',function(){
    overlay.classList.remove('hidden');
    startclass.classList.remove('hidden');
    
})


// hidden start class
startplayer1.addEventListener('click',function(){
    val = true
    startclass.classList.add('hidden');
    dice.classList.remove('hidden');
    overlay.classList.add('hidden');
})
startplayer2.addEventListener('click',function(){
    
    startclass.classList.add('hidden');
    dice.classList.remove('hidden');
    overlay.classList.add('hidden');
})

//new game
newgame.addEventListener('click',function(){
    diceimg.classList.add('hidden');
    score1.textContent= 0;
    score2.textContent= 0;
    dice.classList.add('hidden');
    player1win.classList.add('hidden')
    player2win.classList.add('hidden')
    ladder1.classList.add('hidden')
    snake1.classList.add('hidden')
    ladder2.classList.add('hidden')
    snake2.classList.add('hidden')
    rightside.classList.add('hidden')
    leftside.classList.add('hidden')
    n1 = 0
    n2 = 0
    val=false
    
})

//dice function
dice.addEventListener('click',function(){
    num=Math.trunc(Math.random()*6)+1;
    ladder1.classList.add('hidden')
    snake1.classList.add('hidden')
    ladder2.classList.add('hidden')
    snake2.classList.add('hidden')
    rightside.classList.add('hidden')
    leftside.classList.remove('hidden')
    if (player1=val){
    diceimg.classList.remove('hidden');
    diceimg.src=`dice.${num}.jpg`;
    
        if((n1+num)<=100){
            n1=n1+num;
            switch (n1){
                case 1:
                    n1=38
                    ladder1.classList.remove('hidden')
                    break
                case 4:
                    n1=14
                    ladder1.classList.remove('hidden')
                    break
                case 9:
                    n1=31
                    ladder1.classList.remove('hidden')
                    break
                case 21:
                    n1=42
                    ladder1.classList.remove('hidden')
                    break
                case 28:
                    n1=84
                    ladder1.classList.remove('hidden')
                    break 
                case 51:
                    n1=67
                    ladder1.classList.remove('hidden')
                    break
                case 72:
                    n1=91
                    ladder1.classList.remove('hidden')
                    break
                case 80:
                    n1=99
                    ladder1.classList.remove('hidden')
                    break    
                case 17:
                    n1=7
                    snake1.classList.remove('hidden')
                    break
                case 54:
                    n1=34
                    snake1.classList.remove('hidden')
                    break    
                case 62:
                    n1=19
                    snake1.classList.remove('hidden')
                    break
                case 64:
                    n1=60
                    snake1.classList.remove('hidden')
                    break
                case 87:
                    n1=36
                    snake1.classList.remove('hidden')
                    break
                case 93:
                    n1=73
                    snake1.classList.remove('hidden')
                    break   
                case 95:
                    n1=75
                    snake1.classList.remove('hidden')
                    break
                case 98:
                    n1=79
                    snake1.classList.remove('hidden')
                    break         
                    
            }
            score1.textContent=n1;
        }
    val=false

    if (score1.textContent==100){
        player1win.classList.remove('hidden')
        overlay.classList.remove('hidden');
    }
    }
    else{
        diceimg.classList.remove('hidden');
        diceimg.src=`dice.${num}.jpg`;
        rightside.classList.remove('hidden')
        leftside.classList.add('hidden')
        if ((n2+num)<=100){
            n2=n2+num
            switch (n2){
                case 1:
                    n2=38
                    ladder2.classList.remove('hidden')
                    break
                case 4:
                    n2=14
                    ladder2.classList.remove('hidden')
                    break
                case 9:
                    n2=31
                    ladder2.classList.remove('hidden')
                    break
                case 21:
                    n2=42
                    ladder2.classList.remove('hidden')
                    break
                case 28:
                    n2=84
                    ladder2.classList.remove('hidden')
                    break 
                case 51:
                    n2=67
                    ladder2.classList.remove('hidden')
                    break
                case 72:
                    n2=91
                    ladder2.classList.remove('hidden')
                    break
                case 80:
                    n2=99
                    ladder2.classList.remove('hidden')
                    break    
                case 17:
                    n2=7
                    snake2.classList.remove('hidden')
                    break
                case 54:
                    n2=34
                    snake2.classList.remove('hidden')
                    break    
                case 62:
                    n2=19
                    snake2.classList.remove('hidden')
                    break
                case 64:
                    n2=60
                    snake2.classList.remove('hidden')
                    break
                case 87:
                    n2=36
                    snake2.classList.remove('hidden')
                    break
                case 93:
                    n2=73
                    snake2.classList.remove('hidden')
                    break   
                case 95:
                    n2=75
                    snake2.classList.remove('hidden')
                    break
                case 98:
                    n2=79
                    snake2.classList.remove('hidden')
                    break            
                    
            }
            score2.textContent=n2
        }
        val=true
        if (score2.textContent==100){
            player2win.classList.remove('hidden')
            overlay.classList.remove('hidden');
        }
    }    
})
overlay.addEventListener('click',function(){
    overlay.classList.add('hidden');
    player1win.classList.add('hidden')
    player2win.classList.add('hidden')
    startclass.classList.add('hidden');
})
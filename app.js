function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var backgroundImage = new Image();
    var naveImage   = new Image(); // Player(pato)
    var enemiespic1  = new Image(); // enemigo 1
    var enemiespic2 = new Image(); // enemigo 2
    var bullet      = new Image(); // Bullet

    // backgroundIMG,BulletsIMG and PlayerIMG
    backgroundImage.src = "images/BACKGROUNDpat2-03.jpg"; //Canvas 
    naveImage.src       = "images/PATO.png"; //Player 
    bullet.scr          = "images/BULLET2.png";//Bullet
    // Enemigos Imgs
    enemiespic1.src     = "images/enemigo3.png";
    enemiespic2.src     = "images/enemigo4.png"; 
    
    // Canvas from index
    var cW = ctx.canvas.width; 
    var cH = ctx.canvas.height;

    // template for enemies
    var enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }

    // WAVES total count ()
    var enemies = [

                    //  1 WAVE
                   new enemyTemplate({id: "enemy1", x: 100, y: -20, w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy2", x: 250, y: -20, w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy3", x: 400, y: -20, w: 80, h: 30, image: enemiespic2 }),
                   new enemyTemplate({id: "enemy1003", x: 400, y: -20, w: 80, h: 30, image: enemiespic2 }),
                   new enemyTemplate({id: "enemy4", x:100,  y:-70,  w:80,  h: 30}),
                   new enemyTemplate({id: "enemy5", x:250,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy6", x:400,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy7", x:550,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy8", x:700,  y:-70,  w:80,  h: 30}),
                   new enemyTemplate({id: "enemy9", x:550,  y:-20,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy10",x: 700, y: -20, w: 50, h: 30}),
                   new enemyTemplate({id: "enemy11",x: 850, y: -20, w: 50, h: 30}),
                   new enemyTemplate({id: "enemy12",x: 850, y: -70, w: 50, h: 30}),
                   new enemyTemplate({id: "enemy13",x: 1000, y: -20, w: 50, h: 30}),
                   new enemyTemplate({id: "enemy14",x: 1000, y: -70, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({id: "enemy1014",x: 1000, y: -70, w: 50, h: 30, image: enemiespic2 }),

                   // 2 WAVE
                   new enemyTemplate({ id: "enemy15", x: 100, y: -270, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy16", x: 250, y: -220, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy17", x: 400, y: -220, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy18", x: 100, y: -220, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy19", x: 250, y: -270, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy20", x: 400, y: -270, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy21", x: 550, y: -270, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy22", x: 700, y: -270, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy23", x: 550, y: -200, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy24", x: 700, y: -200, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy25", x: 850, y: -270, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy26", x: 850, y: -200, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy27", x: 1000, y: -270, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy28", x: 1000, y: -200, w: 50, h: 30 }),

                   // 3 WAVE
                   new enemyTemplate({ id: "enemy29", x: 100, y: -470, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy30", x: 250, y: -420, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy31", x: 400, y: -420, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy32", x: 100, y: -420, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy33", x: 250, y: -470, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy34", x: 400, y: -470, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy35", x: 550, y: -470, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy36", x: 700, y: -470, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy37", x: 550, y: -400, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy38", x: 700, y: -400, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy39", x: 850, y: -470, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy29", x: 850, y: -400, w: 80, h: 50 }),
                   new enemyTemplate({ id: "enemy40", x: 1000, y: -470, w: 50, h: 30 }),
                   new enemyTemplate({ id: "enemy41", x: 1000, y: -400, w: 50, h: 30 }),

                  ];

    // This allows for more enemies to be rendered without needing a function per set of enemies.
    // This also forces enemies to check if THEY are hitting the player 
    var renderEnemies = function (enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .27, enemyList[i].w, enemyList[i].h);
            // Detects when ships hit lower level
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    }

    function Launcher(){
        // bullet location 
        this.y = 750, 
        this.x = cW*.5-85, 
        this.w = 100, 
        this.h = 100,   
        this.direccion, 
        this.bg = "blue",
        this.image = bullet, // bullet color 
        this.misiles = [];
        this.score = 0;

         // Font for gamestatus
         this.gameStatus = {
            over: false, 
            message: "",
            fillStyle: 'red',
            font: 'italic bold 36px Arial, sans-serif',//descargable
        }

        this.render = function () {
            if(this.direccion === 'left'){
                this.x-=6;
            } else if(this.direccion === 'right'){
                this.x+=6;
            //}else if(this.direccion === "downArrow"){   // NO need UP & DOWN KEY
                //this.y+=5;
            //}else if(this.direccion === "upArrow"){
                //this.y-=5;
            }
            ctx.fillStyle = this.bg;
            ctx.drawImage(backgroundImage, 0, 0); // background image
            ctx.drawImage(naveImage,this.x,this.y, 100, 100); // we need to make sure spaceship is at the same location as the bullets

            for(var i=0; i < this.misiles.length; i++){
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y-=5, m.w, m.h); // bullet direction
                this.hitDetect(this.misiles[i],i);
                if(m.y <= 0){ // Detectar limites
                    this.misiles.splice(i,1); // Eliminar bullet
                }
            }
            // This happens if you win
            if (enemies.length === 0) {
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = 'yellow';
                ctx.font = this.gameStatus.font;
                ctx.fillText('You win!', cW * .5 - 80, 50);
            }

        }
        // Detectar impacto de bullet (bala)
        this.hitDetect = function (m, mi) {
            console.log('crush');
            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if(m.x+m.w >= e.x && 
                   m.x <= e.x+e.w && 
                   m.y >= e.y && 
                   m.y <= e.y+e.h){
                    
                    (this.score += 1);
                    this.misiles.splice(this.misiles[mi],1); // Remove the missile
                    enemies.splice(i, 1); // Remove the enemy that the missile hit
                    document.querySelector('.barra').innerHTML = "Score: "+ this.score+ " ";//Print Score
                }
            }
        }
        // Ask player ship if an enemy has passed or has hit the player ship
        this.hitDetectLowerLevel = function(enemy){
            // LOWER LVL
            if(enemy.y > 750){
                this.gameStatus.over = true;
                this.gameStatus.message = 'Enemy(s) have passed!';
            }
            // Esto detecta un choque de la nave con enemigos
            //console.log(this);
            // this.y -> where is spaceship location
            if(enemy.id === 'enemy3'){
                //console.log(this.y);
                console.log(this.x);
            }
            // a) If enemy y is greater than this.y - 25 => then we know there's a collision
            // b) If enemy x is gless than this.x + 45 && enemy x > this.x - 45 then we know theres a collision
            if ((enemy.y < this.y + 8 && enemy.y > this.y - 8) &&
                (enemy.x < this.x + 70 && enemy.x > this.x - 70)) { // Checking if enemy is on the left or right of spaceship
                    this.gameStatus.over = true;
                    this.gameStatus.message = 'GAME OVER'
                    //ctx.drawImage(bullet,100,100);
                }
                //Gamestatus over
            if(this.gameStatus.over === true){  
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = this.gameStatus.fillStyle; // set color to text
                ctx.font = this.gameStatus.font;
                // To show text on canvas
                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50); // text x , y
            }
        }
    }
    
    var launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies);
    }
    var animateInterval = setInterval(animate, 7);
    
    var left_btn  = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn  = document.getElementById('fire_btn'); 

   document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) // left arrow
        {
         launcher.direccion = 'left';  
            if(launcher.x < 0){
                launcher.x=0;
                launcher.direccion = '';
            };
       }    
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 37)
        {
         launcher.x-=0;
         launcher.direccion = '';
        }
    }); 

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 39) // right arrow
        {
         launcher.direccion = 'right';
         if(launcher.x > cW-110){
            launcher.x= cW-110;
            launcher.direccion = '';
         }
        
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 39) // right arrow
        {
         launcher.x-=0;   
         launcher.direccion = '';
        }
    }); 

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 38) // up arrow
         {
           launcher.direccion = 'upArrow';  
           if(launcher.y < cH*.2-80){
              launcher.y += 0;
              launcher.direccion = '';
            }
         }
    });

    document.addEventListener('keyup', function(event){
         if(event.keyCode == 38) // up arrow
         {
           launcher.y -= 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 40) // down arrow
         {
           launcher.direccion = 'downArrow';  
          if(launcher.y > cH - 110){
            launcher.y -= 0;
            launcher.direccion = '';
           }
         }
    });
    document.addEventListener('keyup', function(event){
         if(event.keyCode == 40) // down arrow
         {
           launcher.y += 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 82) // restart game
         {
          location.reload();
         }
    });

    // control buttons
    left_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'left'
        if(launcher.x < 0){
                launcher.x=0;
                launcher.direccion = '';
            };
    });

    left_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });

    right_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'right';
        if(launcher.x > cW-110){
            launcher.x= cW-110;
            launcher.direccion = '';
         }
    });

    right_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });
    //This code below fires bullets (balas)
    fire_btn.addEventListener('mousedown', function(event) {
        launcher.misiles.push({x: launcher.x + launcher.w*.7, y: launcher.y, w: 7, h: 14});
    });
    // This fires when clicking on space button from keyboard
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 32) {
           launcher.misiles.push({x: launcher.x + launcher.w*.7, y: launcher.y, w: 7, h: 14, image:launcher.image});
            //ctx.drawImage(naveImage,x.m,y.m,100,100);
        }
    });
}

window.addEventListener('load', function(event) {
    initCanvas();
});

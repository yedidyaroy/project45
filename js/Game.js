class Game{
    constructor(){}
    start(){
        if (gameState===0){
            background(bgImg1); 
            player=new Player();
            form=new Form();
            form.display();
        }
        pikachu=createSprite(200,600,10,10);
        pikachu.addAnimation("running",pikachuImg);
       // drawSprites();
    }

    play(){
        background(bgImg2); 
        drawSprites();
    }
}
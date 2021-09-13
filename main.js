var canvas=new fabric.Canvas("myCanvas");

player_y=6;
player_x=6;

blockImageWidth=30;
blockImageHeight=30;

playerObject="";
blockObject="";

function PlayerUpdate(){

    fabric.Image.fromURL("player.png",function(Img){

        playerObject=Img;
        playerObject.scaleToHeight(150);
        playerObject.scaleToWidth(150);

        playerObject.set({

            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}



function BlockUpdate(get_img){

    fabric.Image.fromURL(get_img,function(Img){

        blockObject=Img;
        blockObject.scaleToHeight(blockImageHeight);
        blockObject.scaleToWidth(blockImageWidth);

        blockObject.set({

            top:player_y,
            left:player_x
        });
        canvas.add(blockObject);
    });
}
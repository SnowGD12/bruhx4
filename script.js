function loop(){
    var song = document.getElementById("song");
    if(document.getElementById("loop").checked)
        {
            song.loop=true;
        }
        else
        {
            song.loop=false; 
        }
}

setInterval(loop, 0.1);
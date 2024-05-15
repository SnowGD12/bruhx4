function loop(){
    var song = document.getElementById("song");
    if(document.getElementById("loop").checked)
        {
            song.loop=true;
        }
}

setInterval(loop, 0.1);
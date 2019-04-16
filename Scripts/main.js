window.addEventListener('scroll', function(e){
    let pos = 0;
    var loga = document.getElementById("loga");
    var logb = document.getElementById("logb");
    var nb = document.getElementById("nb");

    pos = window.scrollY;
    console.log(pos.toString());

    if(pos > 900){
        loga.style.display = "none";
        logb.style.display = "initial";
        nb.style.backgroundColor = "rgba(255,255,255,0.8)";
    }else{
        loga.style.display = "initial";
        logb.style.display = "none";
        nb.style.backgroundColor = "rgba(255,255,255,0)";
    }
});

window.addEventListener('scroll', function(e){
    let pos = 0;
    var log = document.getElementById("log");
    var nb = document.getElementById("nb");

    pos = window.scrollY;
    console.log(pos.toString());

    if(pos > 900){
        log.src = "../Landing Page/Images/logo_s.png";
        log.width = "200px";
        nb.style.backgroundColor = "white";
    }else{
        log.src = "../Landing Page/Images/logo_en.png";
        log.width = "150px";
        nb.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
});

var hud = false

$(function() {

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (event.data.type == "base") {
            if (hud == false) {
                if (item.Style == 1) {
                    var panel = document.createElement("div")
                    var idplayer = document.createElement("h1")
                    panel.id = "panel"
                    panel.style.left = item.left + "vh";
                    panel.style.position = "fixed";
                    panel.style.top = item.top + "vh";
                    panel.style.width = "9vh";
                    panel.style.height = "5vh";
                    panel.style.borderLeft = "0.2vh solid " + item.bordercolor;
                    panel.style.backgroundColor = "rgba(0,0,0,0.7)";
                    panel.style.borderTopRightRadius = "1vh";
                    panel.style.borderBottomRightRadius = "1vh";

                    idplayer.id = "id"
                    idplayer.style.position = "absolute";
                    idplayer.style.top = "-0vh";
                    idplayer.style.left = "2vh";
                    idplayer.style.fontSize = "2vh";
                    idplayer.style.color = "white";
                    idplayer.style.fontFamily = "arial";
                    idplayer.style.fontWeight = "bold";
                    
                    document.getElementById('container').appendChild(panel)
                    document.getElementById('panel').appendChild(idplayer)
                }
                if (item.Style == 2) {
                    var idplayer = document.createElement("h1")

                    idplayer.id = "id"
                    idplayer.style.position = "fixed";
                    idplayer.style.top = item.top + "vh";
                    idplayer.style.left = item.left + "vh";
                    idplayer.style.fontSize = "1.2vh";
                    idplayer.style.color = "white";
                    idplayer.style.fontFamily = "arial";
                    idplayer.style.fontWeight = "bold";
                    
                    document.getElementById('container').appendChild(idplayer)
                }
                if (item.Style == 3) {
                    var idplayer = document.createElement("h1")
                    var circle = document.createElement("div")

                    circle.id = "circle";
                    circle.style.position = "fixed";
                    circle.style.width = "5vh";
                    circle.style.height = "5vh";
                    circle.style.top = item.top + "vh"
                    circle.style.left = item.left + "vh"
                    circle.style.borderRadius = "10vh";
                    circle.style.backgroundColor = item.circlecolor;
                    circle.style.border = "1px solid black";

                    idplayer.id = "id"
                    idplayer.style.position = "absolute";
                    idplayer.style.top = "1vh";
                    idplayer.style.left = "1.2vh";
                    idplayer.style.fontSize = "1.2vh";
                    idplayer.style.color = "white";
                    idplayer.style.fontFamily = "arial";
                    idplayer.style.fontWeight = "bold";
                    
                    document.getElementById('container').appendChild(circle)
                    document.getElementById('circle').appendChild(idplayer)
                }
                if (item.Style == 4) {
                    var idplayer = document.createElement("h1")

                    idplayer.id = "id"
                    idplayer.style.position = "fixed";
                    idplayer.style.top = item.top + "vh";
                    idplayer.style.left = item.left + "vh";
                    idplayer.style.fontSize = "2vh";
                    idplayer.style.color = "white";
                    idplayer.style.fontFamily = "arial";
                    idplayer.style.fontWeight = "bold";
                    
                    document.getElementById('container').appendChild(idplayer)
                }
            hud = true
            }
            document.getElementById('id').innerHTML = "ID: " + item.id;
        }
    })
});

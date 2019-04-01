function swapStyleSheet(sheet, type) {
 document.getElementById(type).setAttribute("href", sheet);  
}

function initate() {
    var color0 = document.getElementById("color0");
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");
    var theme0 = document.getElementById("theme0");
    var theme1 = document.getElementById("theme1");
    var theme2 = document.getElementById("theme2");

    color0.onclick = function(){
    swapStyleSheet("css/color-orange.css", "color");
    }
    
    color1.onclick = function(){
    swapStyleSheet("css/color-red.css", "color");
    }
  
    color2.onclick = function(){
    swapStyleSheet("css/color-dark.css", "color");
    }

    theme0.onclick = function(){
    swapStyleSheet("css/layout-tabbed.css", "layout");
    }

    theme1.onclick = function(){
    swapStyleSheet("css/layout-plain.css", "layout");
    }

    theme2.onclick = function(){
    swapStyleSheet("css/layout-min.css", "layout");
    }
}

window.onload = initate;
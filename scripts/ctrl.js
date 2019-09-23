/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {

    var imgs=document.querySelector(".slideloop").childNodes;
    $(imgs[1]).css("left","0");
    $(imgs[3]).css("left","16%");
    $(imgs[5]).css("left","32%");
    $(imgs[7]).css("left","48%");
    $(imgs[9]).css("left","64%");
    $(imgs[11]).css("left","80%");
    $(imgs[13]).css("left","96%");
    $(imgs[15]).css("left","112%");
    
    var ind=-1;
    var sliding= function(){
        for(var i=1;i<imgs.length;i+=2){
            $(imgs[i]).animate({
                left: "-=16%"
            },5000,'linear');
        }
        ind+=2;
        if(ind>16)
            ind=1;
        $(imgs[ind]).animate({
            left: "+=128%"
        },0,'linear',sliding);
    };
    
    sliding();
    $(".home_img").fadeOut(3000);
    
});

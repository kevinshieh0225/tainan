var music=0;
var sound=0;
console.log('setting ready')
$(document).ready(function() { 
    $("#previous").click(function(){
        $('body').load('./index_play.html');
    })
    var x=function(){
        if(music==0){
            //document.getElementById("open1").style.opacity='1';
            $( "#open1" ).animate({
                opacity: "1",
                marginLeft: "5.4vw"
                
            }, 100)
            //document.getElementById("open1").style.marginLeft='5.4vw';
            console.log('open1')
            music++;
        }
        else{
            //document.getElementById("open1").style.opacity='0.5';
            //document.getElementById("open1").style.marginLeft='0vw';
            $( "#open1" ).animate({
                opacity: "0.5",
                marginLeft: "0vw"
                
            }, 100)
            console.log('open2');
            music--;
        }
    }
    var y=function(){
        if(sound==0){
            //document.getElementById("open2").style.opacity='1';
            //document.getElementById("open2").style.marginLeft='5.4vw';
            $( "#open2" ).animate({
                opacity: "1",
                marginLeft: "5.4vw"
                
            }, 100)
            console.log('open3')
            sound++;
        }
        else{
            //document.getElementById("open2").style.opacity='0.5';
            //document.getElementById("open2").style.marginLeft='0vw';
            $( "#open2" ).animate({
                opacity: "0.5",
                marginLeft: "0vw"
                
            }, 100)
            console.log('open4')
            sound--;
        }
    }
    $("#Adjustment_frame1").click(x)
    $("#Adjustment_frame2").click(y)
    $("#ok_buttom").click(function(){
        $('body').load('./index_play.html');
    })
})

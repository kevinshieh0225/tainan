console.log('choose ready')
$(document).ready(function() {  
    $("#top_line").animate(function(){

    })
    $("#setting_icon").click(function(){
        $('body').load('./index_setting.html');
    })
    $("#ok_buttom_setting").click(function(){
        $('body').load('./index_play.html');
    })
})
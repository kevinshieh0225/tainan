var mission_select=0;
console.log('mission ready')
$(document).ready(function() {  

    var picture_anping=document.getElementById("picture_anping");
    var mission_anping_page1_display=$(".mission_anping_page1").css("display");
    var mission_anping_page2_display=$(".mission_anping_page2").css("display");
    var mission_anping_page3_display=$(".mission_anping_page3").css("display");
    var picture_anping1_2=document.getElementById("picture_anping1_2");

    $("#detail_info_bottom1").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./app/back_buttom)';
        picture_anping.src='app/mission/anping1.JPG';
        mission_page=2;
        mission_select=1;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom2").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./app/back_buttom)';
        picture_anping.src='app/mission/anping2.JPG';
        mission_page=2;
        mission_select=2;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom3").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./app/back_buttom)';
        picture_anping.src='app/mission/anping3.JPG';
        mission_page=2;
        mission_select=3;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom4").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./app/back_buttom)';
        picture_anping.src='app/mission/anping4.JPG';
        mission_page=2;
        mission_select=4;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom5").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./app/back_buttom)';
        picture_anping.src='app/mission/anping5.JPG';
        mission_page=2;
        mission_select=5;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#upload_buttom").click(function(){
        $(".mission_anping_page2").css("display","none");
        $(".mission_anping_page3").css("display","inline-block");
        if(mission_select==1) picture_anping1_2.src='app/mission/anping1.JPG';
        else if(mission_select==2) picture_anping1_2.src='app/mission/anping2.JPG';
        else if(mission_select==3) picture_anping1_2.src='app/mission/anping3.JPG';
        else if(mission_select==4) picture_anping1_2.src='app/mission/anping4.JPG';
        else if(mission_select==5) picture_anping1_2.src='app/mission/anping5.JPG';
        mission_page=3;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    })


})
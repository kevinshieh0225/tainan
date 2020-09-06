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
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        picture_anping.src='pic/mission/anping1.JPG';
        mission_page=2;
        mission_select=1;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom2").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        picture_anping.src='pic/mission/anping2.JPG';
        mission_page=2;
        mission_select=2;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom3").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        picture_anping.src='pic/mission/anping3.JPG';
        mission_page=2;
        mission_select=3;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom4").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        picture_anping.src='pic/mission/anping4.JPG';
        mission_page=2;
        mission_select=4;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#detail_info_bottom5").click(function(){
        $(".mission_anping_page1").css("display","none");
        $(".mission_anping_page2").css("display","inline-block");
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom)';
        picture_anping.src='pic/mission/anping5.JPG';
        mission_page=2;
        mission_select=5;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#upload_buttom").click(function(){
        $(".mission_anping_page2").css("display","none");
        $(".mission_anping_page3").css("display","inline-block");
		    $(".mission_anping_page3_word").css("display","inline-block");
        if(mission_select==1){ 
          picture_anping1_2.src='pic/mission/anping1.JPG';
          document.getElementById("story_picture1_buttom").src="./pic/story/done_picture1_buttom.png";
          console.log('change story picture');
        }
        else if(mission_select==2) picture_anping1_2.src='pic/mission/anping2.JPG';
        else if(mission_select==3) picture_anping1_2.src='pic/mission/anping3.JPG';
        else if(mission_select==4) picture_anping1_2.src='pic/mission/anping4.JPG';
        else if(mission_select==5) picture_anping1_2.src='pic/mission/anping5.JPG';
        mission_page=3;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    })
	  $("#choose_buttom1").click(function(){
		    $(".mission_anping_page3_word").css("display","none");
		    $(".mission_anping_page4_word").css("display","inline-block");
		    $("#choose_buttom1").css("display","none");
        $("#choose_buttom2").css("display","none");
        mission_page=4;
        mission_select=1;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    })

})

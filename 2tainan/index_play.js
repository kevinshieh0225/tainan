
var mission_page=0;
var story_page=0;
var friend_page=0;
var anping=1;
var chihkan=0;
var confucious=0;
var audio = document.getElementById("midi");
var audio2 = document.getElementById("midi2");
console.log('main ready')
$(document).ready(function() {
    //音樂
    document.addEventListener("click", function(){
        audio2.play();
        });
        if(music_open==0){audio.pause();
        }else{audio.play();}
        if(sound_open==0){audio2.src="#";
        }else{audio2.src="sound.mp3";}
    
    function friend_close(){
        if(friend_page==0){
            document.getElementById("friend_buttom").src='pic/friend_buttom_enter.png';
            $("#friend_background").animate({
                bottom:'12vw'
            },300)
            setTimeout(()=>{
                $(".buttom_friend").animate({
                    top:'-7.2vw'
                },300)
            },300)
            setTimeout(()=>{
                friend_page=1;
                $('#friend_state_page').fadeIn(300)
                console.log('friend_page:',friend_page)
            },600)
        }//打開
        else{
            document.getElementById("friend_buttom").src='pic/friend_buttom.png';
            $(".buttom_friend").animate({
                top:'0'
            },300)
            setTimeout(()=>{
                $("#friend_background").animate({
                    bottom:'-120vw'
                },300)
            },300)
            setTimeout(()=>{
                friend_page=0;
                document.getElementById('friend_state_buttom').style.display='none'
                document.getElementById('friend_state_buttom_enter').style.display='block'
                document.getElementById('friend_search_buttom').style.display='block'
                document.getElementById('friend_search_buttom_enter').style.display='none'
                document.getElementById('friend_state_page').style.display='block'
                document.getElementById('friend_search_page').style.display='none'
                console.log('friend_page:',friend_page)
            },600)
        }
    }  
    function mission_close(){
        
    }
    if(road==1){
        $('mission').not('#mission_anping').css("display","none");
        $('story').not('#story_chihkan').css("display","none");
        document.getElementById("story_anping_buttom").style.display='none';
        document.getElementById("story_anping_buttom_enter").style.display='block';
        document.getElementById("story_chihkan_buttom").style.display='block';
        document.getElementById("story_chihkan_buttom_enter").style.display='none';
        document.getElementById("story_confucius_buttom").style.display='block';
        document.getElementById("story_confucius_buttom_enter").style.display='none';
    }
    else if(road==2){
        $('mission').not('#mission_chihkan').css("display","none");
        $('story').not('#story_chihkan').css("display","none");
        document.getElementById("story_anping_buttom").style.display='block';
        document.getElementById("story_anping_buttom_enter").style.display='none';
        document.getElementById("story_chihkan_buttom").style.display='none';
        document.getElementById("story_chihkan_buttom_enter").style.display='block';
        document.getElementById("story_confucius_buttom").style.display='block';
        document.getElementById("story_confucius_buttom_enter").style.display='none';
    }
    else if(road==3){
        $('mission').not('#mission_confucious').css("display","none");
        $('story').not('#story_chihkan').css("display","none");
        document.getElementById("story_anping_buttom").style.display='block';
        document.getElementById("story_anping_buttom_enter").style.display='none';
        document.getElementById("story_chihkan_buttom").style.display='block';
        document.getElementById("story_chihkan_buttom_enter").style.display='none';
        document.getElementById("story_confucius_buttom").style.display='none';
        document.getElementById("story_confucius_buttom_enter").style.display='block';
    }
    console.log('road:',road)
    var story_back_buttom=document.getElementById("story_back_buttom");
    setTimeout(function(){
        $('#top_line').animate({
            marginTop:'0'
        },500)
        $('#bottom_line').animate({
            bottom:'0'
        },500,function(){
            $('#google_map').fadeIn(400)
            $('#distance').fadeIn(400)
        })
    },500)
    

//下面那一排
    $("#mission_buttom").click(function(){
        if(road==1){
            $('mission').not('#mission_anping').css("display","none");
            document.getElementById("story_anping_buttom").style.display='none';
            document.getElementById("story_anping_buttom_enter").style.display='block';
            document.getElementById("story_chihkan_buttom").style.display='block';
            document.getElementById("story_chihkan_buttom_enter").style.display='none';
            document.getElementById("story_confucius_buttom").style.display='block';
            document.getElementById("story_confucius_buttom_enter").style.display='none';
        }
        else if(road==2){
            $('mission').not('#mission_chihkan').css("display","none");
            document.getElementById("story_anping_buttom").style.display='block';
            document.getElementById("story_anping_buttom_enter").style.display='none';
            document.getElementById("story_chihkan_buttom").style.display='none';
            document.getElementById("story_chihkan_buttom_enter").style.display='block';
            document.getElementById("story_confucius_buttom").style.display='block';
            document.getElementById("story_confucius_buttom_enter").style.display='none';
        }
        else if(road==3){
            $('mission').not('#mission_confucious').css("display","none");
            document.getElementById("story_anping_buttom").style.display='block';
            document.getElementById("story_anping_buttom_enter").style.display='none';
            document.getElementById("story_chihkan_buttom").style.display='block';
            document.getElementById("story_chihkan_buttom_enter").style.display='none';
            document.getElementById("story_confucius_buttom").style.display='none';
            document.getElementById("story_confucius_buttom_enter").style.display='block';
        }
        document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
        document.getElementById("story_buttom").src='pic/story_buttom.png';
        document.getElementById("friend_buttom").src='pic/friend_buttom.png';
        $("story").fadeOut(300);
        setTimeout(function(){
            $("#story_background").animate({
                bottom:'12vw'
            },300,function(){
                $(".buttom_road").animate({
                    top:'-8vw'
                },300)
                if(road==1)$('#mission_anping').fadeIn(300);
                else if(road==2)$('#mission_chihkan').fadeIn(300);
                else if(road==3)$('#mission_confucious').fadeIn(300);
            });
        },300)
        
        mission_page=1;
        story_page=0;
        
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#story_buttom").click(function(){
        if(road==1){
            $('story').not('#story_anping').css("display","none");
            document.getElementById("story_anping_buttom").style.display='none';
            document.getElementById("story_anping_buttom_enter").style.display='block';
            document.getElementById("story_chihkan_buttom").style.display='block';
            document.getElementById("story_chihkan_buttom_enter").style.display='none';
            document.getElementById("story_confucius_buttom").style.display='block';
            document.getElementById("story_confucius_buttom_enter").style.display='none';
        }
        else if(road==2){
            $('story').not('#story_chihkan').css("display","none");
            document.getElementById("story_anping_buttom").style.display='block';
            document.getElementById("story_anping_buttom_enter").style.display='none';
            document.getElementById("story_chihkan_buttom").style.display='none';
            document.getElementById("story_chihkan_buttom_enter").style.display='block';
            document.getElementById("story_confucius_buttom").style.display='block';
            document.getElementById("story_confucius_buttom_enter").style.display='none';
        }
        else if(road==3){
            $('story').not('#story_confucious').css("display","none");
            document.getElementById("story_anping_buttom").style.display='block';
            document.getElementById("story_anping_buttom_enter").style.display='none';
            document.getElementById("story_chihkan_buttom").style.display='block';
            document.getElementById("story_chihkan_buttom_enter").style.display='none';
            document.getElementById("story_confucius_buttom").style.display='none';
            document.getElementById("story_confucius_buttom_enter").style.display='block';
        }
        document.getElementById("story_buttom").src='pic/story_buttom_enter.png';
        document.getElementById("friend_buttom").src='pic/friend_buttom.png';
        document.getElementById("mission_buttom").src='pic/mission_buttom.png';
        if(friend_page!=0){
            friend_close()
            setTimeout(()=>{

            },600)
        }
        $("mission").fadeOut(300);
        $("#story_background").animate({
            bottom:'12vw'
        },300,function(){
            $(".buttom_road").animate({
                top:'-8vw'
            },300)
            if(road==1)$('#story_anping').fadeIn(300);
            else if(road==2)$('#story_chihkan').fadeIn(300);
            else if(road==3)$('#story_confucious').fadeIn(300);
        });
        story_page=1;
        mission_page=0;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#friend_buttom").click(function(){
        document.getElementById("friend_buttom").src='pic/friend_buttom_enter.png';
        document.getElementById("story_buttom").src='pic/story_buttom.png';
        document.getElementById("mission_buttom").src='pic/mission_buttom.png';
        friend_close();
    })

//下面那一排
$("#friend_back_buttom").click(function(){
    friend_close();
})
//返回鍵
$("#story_back_buttom").click(function(){
    if(mission_page!=0){
        if(mission_page==2){
            $("#mission_page2_dot").fadeOut(300);
            $("#mission_page2_choice").fadeOut(300);
            $('#mission_page').fadeOut(500,function(){
                if(road==1)$('#mission_anping').fadeIn(500);
                else if(road==2)$('#mission_chihkan').fadeIn(500);
                else if(road==3)$('#mission_confucious').fadeIn(500);
            });
            setTimeout(()=>{
                buttom_road()
            },1000)
            story_back_buttom.style.backgroundImage='url(pic/delete_buttom.png)';
            mission_page=1;
            mission_select=0;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
            console.log(story_back_buttom.style.backgroundImage)

            
        }
        else if(mission_page==4){
            console.log(road,'road')
            if(road==1&&anping_mission[1]>0&&anping_mission[2]>0&&anping_mission[3]>0&&anping_mission[4]>0&&anping_mission[5]>0&&anping_mission[6]==0){
                anping_mission[6]=anping_mission[5]
                if(anping_mission[6]==1){
                    document.getElementById("mission_page5_picture").src='./pic/ending_tool/Anping_endingA_tool.png'
                    $("#mission_page5_title").text('珍鮮')
                    document.getElementById("anping_lock_story").src='./pic/ending_tool/Anping_endingA_tool_font.png'
                }
                else{
                    document.getElementById("mission_page5_picture").src='./pic/ending_tool/Anping_endingB_tool.png'
                    $("#mission_page5_title").text('鴉片')
                    document.getElementById("anping_lock_story").src='./pic/ending_tool/Anping_endingB_tool_font.png'
                }
                $(".mission_page3").fadeOut(300)
                $(".mission_page4").fadeOut(300)
                setTimeout(()=>{
                    $(".mission_page5").fadeIn(300)
                },300)
            }
            else if(road==2&&chihkan_mission[1]>0&&chihkan_mission[2]>0&&chihkan_mission[3]>0&&chihkan_mission[4]>0&&chihkan_mission[5]>0&&chihkan_mission[6]==0){
                chihkan_mission[6]=chihkan_mission[5]
                if(chihkan_mission[6]==1){
                    document.getElementById("mission_page5_picture").src='./pic/ending_tool/Chihkan_endingA_tool.png'
                    document.getElementById("chihkan_lock_story").src='./pic/ending_tool/Chihkan_endingA_tool_font.png'
                    $("#mission_page5_title").text('臥')
                }
                else{
                    document.getElementById("mission_page5_picture").src='./pic/ending_tool/Chihkan_endingB_tool.png'
                    document.getElementById("chihkan_lock_story").src='./pic/ending_tool/Chihkan_endingB_tool_font.png'
                    $("#mission_page5_title").text('井')
                }
                $(".mission_page3").fadeOut(300)
                $(".mission_page4").fadeOut(300)
                setTimeout(()=>{
                    $(".mission_page5").fadeIn(300)
                },300)
            }
            else if(road==3&&confucious_mission[1]>0&&confucious_mission[2]>0&&confucious_mission[3]>0&&confucious_mission[4]>0&&confucious_mission[5]>0&&confucious_mission[6]==0){
                console.log(road,'road')
                confucious_mission[6]=confucious_mission[5]
                if(confucious_mission[6]==1){
                    document.getElementById("mission_page5_picture").src='./pic/ending_tool/ConfuciusTemple_endingA_tool.png'
                    $("#mission_page5_title").text('真相')
                    document.getElementById("confucious_lock_story").src='./pic/ending_tool/ConfuciusTemple_endingA_tool_font.png'
                }
                else{
                    document.getElementById("mission_page5_picture").src='./pic/ending_tool/ConfuciusTemple_endingB_tool.png'
                    $("#mission_page5_title").text('黨國')
                    document.getElementById("confucious_lock_story").src='./pic/ending_tool/ConfuciusTemple_endingB_tool_font.png'
                }
                $(".mission_page3").fadeOut(300)
                $(".mission_page4").fadeOut(300)
                setTimeout(()=>{
                    $(".mission_page5").fadeIn(300)
                },300)
            }
            else{
                console.log('backtime11')
                $("#bottom_line").animate({
                    bottom: '0'
                },300);

                $("#mission_page").animate({
                    height:'110vw',
                    bottom:'0'
                },300);
    
                console.log('why')
                $("#story_background").animate({
                    height:'120vw',
                    bottom:'12vw'
                },300,function(){
                    $("#story_background").animate({
                        bottom:'-120vw'
                    },300);
                    console.log('backtime')
                    document.getElementById("mission_buttom").src='pic/mission_buttom.png';
                    $("mission").css("display","none");
                    $(".mission_anping_page1").css("display","inline-block");
                    $(".mission_page4").css("display","none");
                    $(".mission_page5").css("display","none");
                    $(".mission_page3").css("display","none");
                    $(".mission_page2").css("display","inline-block");
                });
    
              mission_page=0;
              console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
            }
            
        }

        else{
            
            document.getElementById("mission_buttom").src='pic/mission_buttom.png';
            mission_page=0;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
            $(".buttom_road").animate({
                top:'0'
            },300,function(){
                $("#story_background").animate({
                    bottom:'-120vw'
                },300,function(){
                    $("story").css("display","none");
                })
            });
        }
    }
    else if(story_page!=0){
        if(story_page==1){
            
            document.getElementById("story_buttom").src='pic/story_buttom.png';
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
            story_page=0;
            $(".buttom_road").animate({
                top:'0'
            },300,function(){
                $("#story_background").animate({
                    bottom:'-120vw'
                },300,function(){
                    $("story").css("display","none");
                })
            });
        }
        else if(story_page==2){
            story_back_buttom.style.backgroundImage='url(pic/delete_buttom.png)';
            $('#story_page2').fadeOut(500,function(){
                if(road==1) $('#story_anping').fadeIn(500);
                else if(road==2) $('#story_chihkan').fadeIn(500);
                else if(road==3) $('#story_confucious').fadeIn(500);
                
            });
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
            story_page=1;
            document.getElementById("story_choose").style.display='inline-block'
            document.getElementById("story_display_article_2").style.display='inline-block'
        }
    }
}) 

//上面三個路線按鈕
$("#story_anping_buttom").click(function(){
    document.getElementById("story_anping_buttom").style.display='none';
    document.getElementById("story_anping_buttom_enter").style.display='block';
    document.getElementById("story_chihkan_buttom").style.display='block';
    document.getElementById("story_chihkan_buttom_enter").style.display='none';
    document.getElementById("story_confucius_buttom").style.display='block';
    document.getElementById("story_confucius_buttom_enter").style.display='none';
    if(story_page==1){
        document.getElementById("story_anping").style.display='block';
        document.getElementById("story_chihkan").style.display='none';
        document.getElementById("story_confucious").style.display='none';
    }
    else if(mission_page==1){
        document.getElementById("mission_anping").style.display='block';
        document.getElementById("mission_chihkan").style.display='none';
        document.getElementById("mission_confucious").style.display='none';
    }
    anping=1;
    chihkan=0;
    confucious=0;
    console.log('anping=',anping,'chihkan=',chihkan,'confucious=',confucious);
})
$("#story_chihkan_buttom").click(function(){
    document.getElementById("story_anping_buttom").style.display='block';
    document.getElementById("story_anping_buttom_enter").style.display='none';
    document.getElementById("story_chihkan_buttom").style.display='none';
    document.getElementById("story_chihkan_buttom_enter").style.display='block';
    document.getElementById("story_confucius_buttom").style.display='block';
    document.getElementById("story_confucius_buttom_enter").style.display='none';
    if(story_page==1){
        document.getElementById("story_anping").style.display='none';
        document.getElementById("story_chihkan").style.display='block';
        document.getElementById("story_confucious").style.display='none';
    }
    else if(mission_page==1){
        document.getElementById("mission_anping").style.display='none';
        document.getElementById("mission_chihkan").style.display='block';
        document.getElementById("mission_confucious").style.display='none';
    }
    anping=0;
    chihkan=1;
    confucious=0;
    console.log('anping=',anping,'chihkan=',chihkan,'confucious=',confucious);
})
$("#story_confucius_buttom").click(function(){
    document.getElementById("story_anping_buttom").style.display='block';
    document.getElementById("story_anping_buttom_enter").style.display='none';
    document.getElementById("story_chihkan_buttom").style.display='block';
    document.getElementById("story_chihkan_buttom_enter").style.display='none';
    document.getElementById("story_confucius_buttom").style.display='none';
    document.getElementById("story_confucius_buttom_enter").style.display='block';
    if(story_page==1){
        document.getElementById("story_anping").style.display='none';
        document.getElementById("story_chihkan").style.display='none';
        document.getElementById("story_confucious").style.display='block';
    }
    else if(mission_page==1){
        document.getElementById("mission_anping").style.display='none';
        document.getElementById("mission_chihkan").style.display='none';
        document.getElementById("mission_confucious").style.display='block';
    }
    anping=0;
    chihkan=0;
    confucious=1;
    console.log('anping=',anping,'chihkan=',chihkan,'confucious=',confucious);
})
/////////////////////

    $("#previous").click(function(){
        $('#distance').fadeOut(400)
        $('#story_background').animate({
            bottom:'-130vw'
        })
        $('#google_map').fadeOut(400,function(){
            $('#top_line').animate({
                marginTop:'-14vw'
            },500)
            $('#bottom_line').animate({
                bottom:'-12vw'
            },500,function(){
                $('body').load('./choosepage.html');
            })
        })
    })

//設定
    $("#setting").click(function(){
        $('#distance').fadeOut(400)
        $('#story_background').animate({
            bottom:'-130vw'
        })
        //$('#google_map').fadeOut(400,function(){
        setTimeout(()=>{
            $('#top_line').animate({
                marginTop:'-14vw'
            },500)
            $('#bottom_line').animate({
                bottom:'-12vw'
            },500,function(){
                $('body').load('./index_setting.html');
            })
        })
    })
})

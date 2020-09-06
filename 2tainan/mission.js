/*$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
}*/
var mission_select=0;
var mission_page2_switch=1;
console.log('mission ready')

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});

function buttom_road(){
    if($('.buttom_road').css('top')=="0px"){
        $(".buttom_road").animate({
            top:'-8vw'
        },300);
        console.log('do1')
    }
    else{
        $(".buttom_road").animate({
            top:'0'
        },300);
        console.log('do2')
    }
}
$(document).ready(function() {  
    var mission_picture=document.getElementById("mission_picture");
    var mission_page3_picture=document.getElementById("mission_page3_picture");
    var change=document.getElementById("mission_page");
    var manager = new Hammer(change);
    var flag=0;
    $(function(){
        manager.on("swipeleft", function(ev) { 
            if(mission_page==2){
                if(mission_page2_switch<4){
                    if(mission_page2_switch==1){
                        $(".mission_page2_intro:first").animate({opacity: "0.5",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(2)").animate({opacity: "1",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(3)").animate({opacity: "0.5",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(4)").animate({opacity: "0.5",left: "-=100vw"}, 500)
                    }
                    else if(mission_page2_switch==2){
                        $(".mission_page2_intro:first").animate({opacity: "0.5",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(2)").animate({opacity: "0.5",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(3)").animate({opacity: "1",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(4)").animate({opacity: "0.5",left: "-=100vw"}, 500)
                    }
                    else if(mission_page2_switch==3){
                        $(".mission_page2_intro:first").animate({opacity: "0.5",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(2)").animate({opacity: "0.5",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(3)").animate({opacity: "0.5",left: "-=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(4)").animate({opacity: "1",left: "-=100vw"}, 500)
                    }
                    $("#mission_page2_dot").animate({left: "+=4vw"}, 500)  
                    //$(".mission_page2_intro").animate({left: "-=100vw"}, 500) 
                    $("#story_back_buttom").fadeOut(200)
                    mission_page2_switch++;
                    console.log('mission_page2_switch:',mission_page2_switch) 
                }
            }
                    
        }); 
        manager.on("swiperight", function(ev) {  
            if(mission_page==2){
                if(mission_page2_switch>1){
                    if(mission_page2_switch==2){
                        $(".mission_page2_intro:first").animate({opacity: "1",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(2)").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(3)").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(4)").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                    }
                    else if(mission_page2_switch==3){
                        $(".mission_page2_intro:first").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(2)").animate({opacity: "1",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(3)").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(4)").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                    }
                    else if(mission_page2_switch==4){
                        $(".mission_page2_intro:first").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(2)").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(3)").animate({opacity: "1",left: "+=100vw"}, 500) 
                        $(".mission_page2_intro:nth-child(4)").animate({opacity: "0.5",left: "+=100vw"}, 500) 
                    }
                    $("#mission_page2_dot").animate({left: "-=4vw"}, 500)  
                    //$(".mission_page2_intro").animate({left: "+=100vw"}, 500) 
                    setTimeout(()=>{
                        if(--mission_page2_switch==1)$("#story_back_buttom").fadeIn(300)
                    },500)
                    console.log('mission_page2_switch:',mission_page2_switch)
                }
            }
        });  
    }) 
    $("#detail_info_bottom1").click(function(){
        if(anping_mission[1]>0) alert("該故事已完成");
        else if(road!=1) alert("先全力完成安平線吧");
        else{
            mission_picture.src='pic/anping_picture/anping1_picture1.jpg';
            $('.mission_page2_title').text("德記洋行、安平樹屋");
            $('#mission_page2_word').html(`◆ 週一至週日08:00~18:00 <br>◆ 708 臺南市安平區古堡街108號<br>◆ 06-3913901<br>`);
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping1_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping1_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping1_picture1.jpg';
            $('#mission_page2_intro_word1').text("位在安平樹屋旁，有著純白色外觀的洋式建築就是英商德記洋行，是英商德記洋行在安平開港後於台南安平所設立的據點，為當時的五大洋行之一，早期港運尚能通行時，位在港邊的德記洋行主要業務是出口糖、樟腦與茶葉，並輸入鴉片，是繁盛一時的重要商業據點。");
            $('#mission_page2_intro_word2').text("樹屋位於德記洋行後面，原是德記洋行的倉庫，大約建於十九世紀末及日治初期，此處曾做為「大日本鹽業株式會社」出張所倉庫，現況規模即為日本人增建。");
            $('#mission_page2_intro_word3').text("經百餘年歲月滄桑後，倉庫牆面滿佈榕樹盤據的氣根，高聳的榕樹茂密的樹冠彷彿成為倉庫的屋頂，也讓安平樹屋擁有難得一見的外觀及神秘氣息，形成特有的屋樹共生奇景。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_anping").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=1;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
    }) 
    $("#detail_info_bottom2").click(function(){
        if(anping_mission[2]>0) alert("該故事已完成");
        else if(road!=1) alert("先全力完成安平線吧");
        else{
            mission_picture.src='pic/anping_picture/anping2_picture1.jpg';
            $('.mission_page2_title').text("王雞屎洋樓");
            $('#mission_page2_word').html(`◆ 開放時間︰私宅僅開放外觀<br>◆ 地址︰708 臺南市安平區國勝路35巷2號<br>◆ 電話︰06-2281382（安平旅客服務中心）`);
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping2_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping2_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping2_picture1.jpg';
            $('#mission_page2_intro_word1').text("許多遊客來到安平總會被王雞屎洋樓這個名字給逗笑，思索著為何如此漂亮的老屋會有著這麼鄉土的名字，建於1937年的王雞屎洋樓是當時安平最為豪華的宅邸，在一片閩式平房建築中有如鶴立雞群般的獨特，會得此名稱就是因為屋主的名字就是王雞屎，王雞屎先生在日治時期承攬日本鹽業會社的搬運工作致富，遂建此洋樓居住。");
            $('#mission_page2_intro_word2').text("兩層樓的建築已是當時安平的最高建物，後來二戰爆發，為避免洋樓顯眼的外觀成為盟軍轟炸對象，日人將洋樓以柏油漆成黑色，至今還能稍微見到當初的漆痕。");
            $('#mission_page2_intro_word3').text("洋樓旁特別的石椅，是早期往來黑水溝的船隻的壓艙石，在安平常見這樣的壓艙石，有的拿來當石階、踏板，有的隨意擺在庭院，讓遊客逛累了，可以在上面稍作休息。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_anping").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=2;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
    $("#detail_info_bottom3").click(function(){
        if(anping_mission[3]>0) alert("該故事已完成");
        else if(road!=1) alert("先全力完成安平線吧");
        else{
            mission_picture.src='pic/anping_picture/anping3_picture1.jpg';
            $('.mission_page2_title').text("夕遊出張所");
            $('#mission_page2_word').html(`◆ 平日︰10:00~18:00、假日︰10:00~19:00<br>◆ 708臺南市安平區安平路古堡街196號<br>◆ 06-3911088`);
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping3_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping3_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping3_picture1.jpg';
            $('#mission_page2_intro_word1').text("夕遊出張所位於鹽神白沙灘公園後方，佔地約百坪。原為臺灣總督府專賣局台南支局所成立的安平支局，後因組織精簡之故改名為「臺灣總督府專賣局台南支局安平分室」，在鹽業興盛時期這李是相當重要的一處據點。");
            $('#mission_page2_intro_word2').text("東向為煎熬鹽試驗工廠；北面有儲藏室、真空鹽工場及高大的煙囪；西向則是鹽區倉庫，在光復初期事務室更改為宿舍，提供鹽務總局的家屬住宿。");
            $('#mission_page2_intro_word3').text("出張所內擺設的366種顏色的生日彩鹽是許多遊客慕名而來的最大因素，在繽紛的色彩之中尋找自己的專屬彩鹽是一大樂趣。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_anping").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=3;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
    }) 
    $("#detail_info_bottom4").click(function(){
        if(anping_mission[4]>0) alert("該故事已完成");
        else if(road!=1) alert("先全力完成安平線吧");
        else{
            mission_picture.src='pic/anping_picture/anping4_picture1.jpg';
            $('.mission_page2_title').text("開台天后宮");
            $('#mission_page2_word').html(`◆ 06:30~21:30，全年開放<br>◆ 708 臺南市安平區國勝路33號<br>◆ 06-2238695`);
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping4_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping4_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping4_picture1.jpg';
            $('#mission_page2_intro_word1').text("開台天后宮為安平區最大的廟宇，相傳天后宮媽祖是罕見的軟身神像(意旨神像關節可活動)，隨鄭成功船隊由湄洲來台並建廟祭祀，所以有開台之稱，是台灣媽祖信仰的主要中心之一，傳承著禮俗文化與信仰禮儀。");
            $('#mission_page2_intro_word2').text("每四年舉辦一次的安平迓媽祖活動是天后宮最大的活動，另外宮內的特殊信仰為側殿的石將軍文昌信仰，許多考生在考試前會到石將軍前抱抱佛腳，希望能有個好成績。");
            $('#mission_page2_intro_word3').text("安平天后宮牌樓，「牌樓」是一般民間的說法，在佛教則稱呼為「山門」。牌樓獨立於廟宇建築前，作為空間的區隔，進到牌樓以內也代表進入了寺廟的神聖空間。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_anping").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=4;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
    $("#detail_info_bottom5").click(function(){
        if(anping_mission[5]>0) alert("該故事已完成");
        else if(road!=1) alert("先全力完成安平線吧");
        else{
            mission_picture.src='pic/anping_picture/anping5_picture1.jpg';
            $('.mission_page2_title').text("安平古堡");
            $('#mission_page2_word').html(`◆ 週一至週日08:30~17:30<br>◆ 708 臺南市安平區國勝路82號<br>◆ 06-2267348（台南市政府文化局古蹟營運科）`);
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping5_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping5_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping5_picture1.jpg';
            $('#mission_page2_intro_word1').text("安平古堡，又稱為熱蘭遮城，最初建於1624年，是臺灣最早的要塞建築。自建城以來，曾是荷蘭人統治臺灣的中樞，也曾是鄭氏王朝統治者的住處。圖中為日治時代所建的瞭望臺，後由國民政府重建。1975年台南市政府在瞭望台上加了屋頂，牆面漆成白色，就是現在我們看見的安平古堡的模樣。");
            $('#mission_page2_intro_word2').text("熱蘭遮城因清兵破壞與英國軍艦炮轟炸毀。真正屬於荷蘭時期的遺跡，僅剩古堡前方外城南垣「紅毛土」的磚牆殘壁。牆與老榕樹共生，見證著盡400年來的台江的歷史。");
            $('#mission_page2_intro_word3').text("這口古井與「紅毛土」的磚牆殘壁一樣屬於荷蘭時期的遺跡，相傳赤崁樓古井能通向此古井。後證實根本沒有秘道，200多年來的傳說，只是成為茶餘飯後的趣聞。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_anping").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=5;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
//////////////////////
    $("#detail_info_bottom6").click(function(){
        if(chihkan_mission[1]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan1_picture1.jpg';
            $('.mission_page2_title').text("赤崁樓");
            $('#mission_page2_word').html(`◆ 週一至週日8:30~21:30<br>◆ 700 臺南市中西區民族路二段212號<br>◆ 06-2205647 (台南市政府文化局)`);
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan1_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan1_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan1_picture4.jpg';
            $('#mission_page2_intro_word1').text("1652年荷蘭人在此建立普羅民遮城，至此奠定了台南行政商業中心的位置，歷經300多年來幾經整修改建，始有現今的樣貌。");
            $('#mission_page2_intro_word2').text("移自大南門城邊的九塊御碑，由狀似石龜的贔屭所乘載，傳說贔屭為九龍生子之一，生性喜歡負重，也因為贔屭而讓赤嵌樓增添不少傳說故事。");
            $('#mission_page2_intro_word3').text("19世紀後半葉，大士殿、海神廟、蓬壺書院、文昌閣、五子祠等建築，先後蓋在赤崁樓的原址上，為赤崁城址增添壯偉氣勢。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_chihkan").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=6;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
    $("#detail_info_bottom7").click(function(){
        if(chihkan_mission[2]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan2_picture1.jpg';
            $('.mission_page2_title').text("祀典武廟");
            $('#mission_page2_word').html(`◆ 05:00~21:00 (初一、十五至22:00)，全年開放<br>◆ 700 臺南市中西區永福路二段229號<br>◆ 06-2202390`);
            
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan2_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan2_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan2_picture4.jpg';
            $('#mission_page2_intro_word1').text("「重簷歇山」式屋頂配上一整面的紅牆是許多人對祀典武廟的印象。祀典武廟約建於1665年，是台灣最早關帝廟，裡面祀奉關聖帝君，也被稱為大關帝廟。");
            $('#mission_page2_intro_word2').text("雍正三年（1725年），清廷奉旨舉辦春秋二祭，成為全臺規模最大，也是唯一擁有「祀典」尊崇的武廟，並與「全臺首學」之臺南孔子廟並列，享有「祀典武廟」之稱。");
            $('#mission_page2_intro_word3').text("來到祀典武廟一定要看的重點就是各種匾額，完美形容了關公在人民心中的形象。匾額上的年代與提頒匾額者都是值得留意的地方。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_chihkan").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=7;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
    $("#detail_info_bottom8").click(function(){
        if(chihkan_mission[3]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan3_picture1.jpg';
            $('.mission_page2_title').text("大井頭");
            $('#mission_page2_word').html(`◆ 全年開放<br>◆ 700 臺南市中西區民權路二段225號<br>◆ 06-2267151 (中西區公所)`);
            
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan3_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan3_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan3_picture4.jpg';
            $('#mission_page2_intro_word1').text("大井頭一帶是昔日進入臺灣府城的重要碼頭所在地，雖然「大井頭」之名原意為大井旁的碼頭，是一個地名，但現在也用以指稱「大井」本身。");
            $('#mission_page2_intro_word2').text("大井頭應該可說是台南市區內最貼近大家的古蹟了，也是很多人常會忽略的重要古蹟，因為就位在車流量大的民權路馬路上，以鑄鐵蓋蓋著井口，令人難以注意。");
            $('#mission_page2_intro_word3').text("大井頭是當時離港口最近的一口淡水井，水源豐沛甘甜，當時就傳著：「吃大井頭水，沒肥也媠」，後來此地居民也開始使用這口井水，可見其重要性。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_chihkan").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=8;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
    $("#detail_info_bottom9").click(function(){
        if(chihkan_mission[4]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan4_picture1.jpg';
            $('.mission_page2_title').text("開基武廟、新美街");
            $('#mission_page2_word').html(`◆ 週一~週日07:00~21:00 全年開放<br>◆ 700 臺南市中西區新美街116號<br>◆ 06-2214671\n`);
            
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan4_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan4_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan4_picture4.jpg';
            $('#mission_page2_intro_word1').text("開基武廟供奉主神關聖帝君，是1669年所建全台灣首座關帝廟，故原名為「開基武廟」。又因與祀典武廟都祭祀關公，且面積較小，因此稱此廟為小關帝廟。");
            $('#mission_page2_intro_word2').text("新美街舊稱米街，從清朝存在至今，因賣米店家林立聞名。隨著歷史變遷，米店一戶戶搬離，街道隨之沒落，惟當年風華遺韻猶存。");
            $('#mission_page2_intro_word3').text("新美街內金紙店的昭玄堂燈籠、隆興亞鉛店、天福玩具、新協益紙行皆是40至50年的老店。另外米街金香紙、玉泉金紙莊更具百年歷史。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_chihkan").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=9;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
    $("#detail_info_bottom10").click(function(){
        if(chihkan_mission[5]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan5_picture1.jpg';
            $('.mission_page2_title').text("祀典大天后宮");
            $('#mission_page2_word').html(`◆ 全年開放<br>◆ 700臺南市中西區永福路二段227巷18號<br>◆ 06-2211178`);
            
            story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan5_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan5_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan5_picture4.jpg';
            $('#mission_page2_intro_word1').text("為台灣最早官建的媽祖廟，原為寧靖王朱術桂府邸。1683年，施琅率軍大敗鄭克塽，為收復民心，特奏請清廷將靖寧王府改建為天妃宮供奉媽祖，後加封為天后，「大天后宮」廟名由此而來。");
            $('#mission_page2_intro_word2').text("大天后宮經歷雖多次修整，但仍然保持明代王府的建築特色，擁有四進建築，包括三川殿、拜殿、正殿、後殿四部分。");
            $('#mission_page2_intro_word3').text("廟中的「平台紀略碑」是現在台灣所保存的最早清碑，書寫攻台之經過、安撫民心及善後處理的方法。廟內也有許多既珍貴又有意義的石碑，值得細心觀察。");
            buttom_road()
            setTimeout(()=>{
                $("#mission_chihkan").fadeOut(500,function(){
                    console.log('done')
                    $("#mission_page").fadeIn(500);
                    $("#mission_page2_dot").fadeIn(500);
                    $("#mission_page2_choice").fadeIn(500);
                })
            },500)
            mission_page=2;
            mission_select=10;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
    }) 
//////////////////////
$("#detail_info_bottom11").click(function(){
    if(chihkan_mission[1]>0) alert("該故事已完成");
    else if(road!=3) alert("先全力完成選擇的吧吧");
    else{
        mission_picture.src='pic/confucious_picture/confucious1picture1.jpg';
        $('.mission_page2_title').text("台灣文學館");
        $('#mission_page2_word').html(`◆ 09:00-18:00<br>◆ 700 台南市中西區中正路1號<br>◆ 06-2217201`);
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious1picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious1picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious1picture4.jpg';
        $('#mission_page2_intro_word1').text("1652年荷蘭人在此建立普羅民遮城，至此奠定了台南行政商業中心的位置，歷經300多年來幾經整修改建，始有現今的樣貌。");
        $('#mission_page2_intro_word2').text("移自大南門城邊的九塊御碑，由狀似石龜的贔屭所乘載，傳說贔屭為九龍生子之一，生性喜歡負重，也因為贔屭而讓赤嵌樓增添不少傳說故事。");
        $('#mission_page2_intro_word3').text("19世紀後半葉，大士殿、海神廟、蓬壺書院、文昌閣、五子祠等建築，先後蓋在赤崁樓的原址上，為赤崁城址增添壯偉氣勢。");
        buttom_road()
        setTimeout(()=>{
            $("#mission_confucious").fadeOut(500,function(){
                console.log('done')
                $("#mission_page").fadeIn(500);
                $("#mission_page2_dot").fadeIn(500);
                $("#mission_page2_choice").fadeIn(500);
            })
        },500)
        mission_page=2;
        mission_select=11;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
    
}) 
$("#detail_info_bottom12").click(function(){
    if(chihkan_mission[2]>0) alert("該故事已完成");
    else if(road!=3) alert("先全力完成選擇的吧吧");
    else{
        mission_picture.src='pic/confucious_picture/confucious2picture1.jpg';
        $('.mission_page2_title').text("孔廟");
        $('#mission_page2_word').html(`◆ 週一至週日08:30~17:30 (除夕公休)<br>◆ 700 台南市中西區南門路2號<br>◆ 06-2214647 (財團法人孔廟文化基金會)`);
        
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious2picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious2picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious2picture4.jpg';
        $('#mission_page2_intro_word1').text("「重簷歇山」式屋頂配上一整面的紅牆是許多人對祀典武廟的印象。祀典武廟約建於1665年，是台灣最早關帝廟，裡面祀奉關聖帝君，也被稱為大關帝廟。");
        $('#mission_page2_intro_word2').text("雍正三年（1725年），清廷奉旨舉辦春秋二祭，成為全臺規模最大，也是唯一擁有「祀典」尊崇的武廟，並與「全臺首學」之臺南孔子廟並列，享有「祀典武廟」之稱。");
        $('#mission_page2_intro_word3').text("來到祀典武廟一定要看的重點就是各種匾額，完美形容了關公在人民心中的形象。匾額上的年代與提頒匾額者都是值得留意的地方。");
        buttom_road()
        setTimeout(()=>{
            $("#mission_confucious").fadeOut(500,function(){
                console.log('done')
                $("#mission_page").fadeIn(500);
                $("#mission_page2_dot").fadeIn(500);
                $("#mission_page2_choice").fadeIn(500);
            })
        },500)
        mission_page=2;
        mission_select=12;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
    
}) 
$("#detail_info_bottom13").click(function(){
    if(chihkan_mission[3]>0) alert("該故事已完成");
    else if(road!=3) alert("先全力完成選擇的吧吧");
    else{
        mission_picture.src='pic/confucious_picture/confucious3picture1.jpg';
        $('.mission_page2_title').text("林百貨、土地銀行");
        $('#mission_page2_word').html(`◆ 每日11:00-22:00<br>◆ 700 台南市中西區忠義路二段63號<br>◆ 06-2213000`);
        
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious3picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious3picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious3picture4.jpg';
        $('#mission_page2_intro_word1').text("土地銀行，在日治時代稱為勸業銀行，外觀建築風格獨特，採用希臘神殿式的圓柱，整齊排列在兩側，給人非常沉穩的感覺。");
        $('#mission_page2_intro_word2').text("林百貨在1932年開幕，台南人稱「五棧樓仔」，有著當時最先進的流籠（電梯），電梯樓層顯示是旋轉指針式的，對當時台南人來說「去林百貨坐流籠」是新奇時髦的休閒活動。");
        $('#mission_page2_intro_word3').text("林百貨頂樓的神社稱「末廣社」，為侍奉會社主護神的神社，完成於開幕之後半年，神社並非林百貨對外開放區域，為現今台灣僅存的店舖建築內的空中神社。");
        buttom_road()
        setTimeout(()=>{
            $("#mission_confucious").fadeOut(500,function(){
                console.log('done')
                $("#mission_page").fadeIn(500);
                $("#mission_page2_dot").fadeIn(500);
                $("#mission_page2_choice").fadeIn(500);
            })
        },500)
        mission_page=2;
        mission_select=13;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
    
}) 
$("#detail_info_bottom14").click(function(){
    if(chihkan_mission[4]>0) alert("該故事已完成");
    else if(road!=3) alert("先全力完成選擇的吧吧");
    else{
        mission_picture.src='pic/confucious_picture/confucious4picture1.jpg';
        $('.mission_page2_title').text("武德殿");
        $('#mission_page2_word').html(`◆ 平日上課時間內部不開放參觀，開放時間為六日<br>◆ 700 台南市中西區忠義路二段2號<br>◆ 06-2222768(忠義國小)`);
        
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious4picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious4picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious4picture4.jpg';
        $('#mission_page2_intro_word1').text("開基武廟供奉主神關聖帝君，是1669年所建全台灣首座關帝廟，故原名為「開基武廟」。又因與祀典武廟都祭祀關公，且面積較小，因此稱此廟為小關帝廟。");
        $('#mission_page2_intro_word2').text("新美街舊稱米街，從清朝存在至今，因賣米店家林立聞名。隨著歷史變遷，米店一戶戶搬離，街道隨之沒落，惟當年風華遺韻猶存。");
        $('#mission_page2_intro_word3').text("新美街內金紙店的昭玄堂燈籠、隆興亞鉛店、天福玩具、新協益紙行皆是40至50年的老店。另外米街金香紙、玉泉金紙莊更具百年歷史。");
        buttom_road()
        setTimeout(()=>{
            $("#mission_confucious").fadeOut(500,function(){
                console.log('done')
                $("#mission_page").fadeIn(500);
                $("#mission_page2_dot").fadeIn(500);
                $("#mission_page2_choice").fadeIn(500);
            })
        },500)
        mission_page=2;
        mission_select=14;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
    
}) 
$("#detail_info_bottom15").click(function(){
    if(chihkan_mission[5]>0) alert("該故事已完成");
    else if(road!=3) alert("先全力完成選擇的吧吧");
    else{
        mission_picture.src='pic/confucious_picture/confucious5picture1.jpg';
        $('.mission_page2_title').text("台南法院博物館");
        $('#mission_page2_word').html(`◆ 9:00-17:00，週一休館<br>◆ 700 台南市中西區府前路一段307號<br>◆ 06-2147173`);
        
        story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious5picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious5picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious5picture4.jpg';
        $('#mission_page2_intro_word1').text("台南法院博物館，前身為台南地方法院，是日治時期所建的法院，被譽為日治時期台灣三大建築之一，是全臺台現存歷史最悠久的大型法院建築，見證了台灣的司法歷史。");
        $('#mission_page2_intro_word2').text("大天后宮經歷雖多次修整，但仍然保持明代王府的建築特色，擁有四進建築，包括三川殿、拜殿、正殿、後殿四部分。");
        $('#mission_page2_intro_word3').text("廟中的「平台紀略碑」是現在台灣所保存的最早清碑，書寫攻台之經過、安撫民心及善後處理的方法。廟內也有許多既珍貴又有意義的石碑，值得細心觀察。");
        buttom_road()
        setTimeout(()=>{
            $("#mission_confucious").fadeOut(500,function(){
                console.log('done')
                $("#mission_page").fadeIn(500);
                $("#mission_page2_dot").fadeIn(500);
                $("#mission_page2_choice").fadeIn(500);
            })
        },500)
        mission_page=2;
        mission_select=15;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
    
}) 
//////////////////////
    
    $("#finish_mission_buttom").click(function(){
	/*	
		//p1資料處理
		var c1= document.getElementById("canvas");
		var ctx1=c1.getContext('2d');
		var img1 = document.getElementById("mission_picture")
		ctx1.drawImage(img1,0,0);
		var p1 = ctx1.getImageData(0,0,100,100);

		//p2資料處理
		//
		var c2= document.getElementById("canvas");
		var ctx2=c2.getContext('2d');
		var img2 = document.getElementById("blah")
		ctx2.drawImage(img2,0,0);
		var p2 = ctx2.getImageData(0,0,100,100);
	
			///測試
		var count =0;
				for(var i=0;i<40000;){
				if( p2.data[i]>p1.data[i]-10 && p2.data[i]<p1.data[i]+10){
				count++;
			}				if( p2.data[i+1]>p1.data[i+1]-10 && p2.data[i+1]<p1.data[i+1]+10){
				count++;
			}				if( p2.data[i+2]>p1.data[i+2]-10 && p2.data[i+2]<p1.data[i+2]+10){
				count++;
			}i=i+4;
		}		
		
		alert(" count ="+count+" 相似度= "+ count/300 +"%");
    */
    count = 30000;
    if( count/300 < 50){alert(" 照片相似度布達50趴請重傳");}
		else{
        mission_page=3;
        story_back_buttom.style.display='none';
    //anping road
        if(mission_select==1){ 
            mission_page3_picture.src='pic/tool/Anping_Tree_House_tool.png';
            $('#mission_page3_title').html(`德記洋行、安平樹屋`);
            $('#mission_page3_word').text('在清代，樟腦是洋行賺錢的商品之一，不願看到洋人獨佔好處的清朝也要分一杯羹，於是改行專賣制度，這造成洋行龐大的利益損失。身為英商德記洋行秘書的你，在這種情況下要如何建議上司呢？');
            document.getElementById("mission_choose_buttom1").src="pic/choosebuttom/anping/Anping_Tree_House_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/choosebuttom/anping/Anping_Tree_House_choose2_buttom.png";
            document.getElementById("story_anping_picture1_buttom").src="./pic/tool/Anping_Tree_House_tool_font.png";
            console.log('change story picture');
            anping_mission[1]=1;
        }
        else if(mission_select==2){
            mission_page3_picture.src='pic/tool/wang_building_tool.png';
            $('#mission_page3_title').html(`王雞屎洋樓`);
            $('#mission_page3_word').text('「日本人這批鹽需要約一百個搬運鹽工，我一下子去哪裡找這麼多人阿？」安平運鹽大亨王雞屎苦惱地說。王雞屎因為運鹽而致富，卻遇到了人手短缺的難題，但這筆生意又不忍心被別人白白搶走⋯⋯。請問要怎麼做才能順利出貨呢？');
            document.getElementById("mission_choose_buttom1").src="pic/choosebuttom/anping/wang_building_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/choosebuttom/anping/wang_building_choose2_buttom.png";
            document.getElementById("story_anping_picture2_buttom").src="./pic/tool/Wang_building_tool_font.png";
            console.log('change story picture');
            anping_mission[2]=1;
        } 
        else if(mission_select==3){
            mission_page3_picture.src='pic/tool/Sio_tool.png';
            $('#mission_page3_title').html(`夕遊出張所<br>`);
            $('#mission_page3_word').text('夕遊出張所原是日治時代安平製鹽工廠的辦公室，為應付日本二戰時的需求成立的實驗工廠。當時國際情勢混亂，鹽工廠的三根大煙囪易成為美軍轟炸的目標。身為日本製鹽會社最高負責人的你，要如何面對這場災難呢？');
            document.getElementById("mission_choose_buttom1").src="pic/choosebuttom/anping/Sio_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/choosebuttom/anping/Sio_choose2_buttom.png";
            document.getElementById("story_anping_picture3_buttom").src="./pic/tool/Sio_tool_font.png";
            console.log('change story picture');
            anping_mission[3]=1;
        } 
        else if(mission_select==4){
            mission_page3_picture.src='pic/tool/Kaitai_Matsu_Temple_tool.png';
            $('#mission_page3_title').html(`開台天后宮`);
            $('#mission_page3_word').text('光緒21年（1895年）馬關條約，清朝將台灣割讓給日本，日軍登台大肆破壞，並與安平的清兵交戰。安平的清兵打不過實力堅強的日軍，只好逃跑。一群清兵來到了天后宮附近，眼看日軍就要追來了⋯⋯，若你是清兵，究竟該怎麼辦才好呢？');
            document.getElementById("mission_choose_buttom1").src="pic/choosebuttom/anping/Kaitai_Matsu_Temple_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/choosebuttom/anping/Kaitai_Matsu_Temple_choose2_buttom.png";
            document.getElementById("story_anping_picture4_buttom").src="./pic/tool/Kaitai_Matsu_Temple_tool_font.png";
            console.log('change story picture');
            anping_mission[4]=1;
        } 
        else if(mission_select==5){
            mission_page3_picture.src='pic/tool/Anping_Castle_tool.png';
            $('#mission_page3_title').html(`安平古堡`);
            $('#mission_page3_word').text('鄭成功攻打台灣並成功佔領赤崁樓後，他把目標轉移到另一個要塞熱蘭遮城，荷蘭人得知此事後，把熱蘭遮城附近的物資與人力全數遷入城內。無奈熱蘭遮城易守難攻，此時鄭成功部將糧食短缺，如果你是鄭成功的部下，會如何建議他呢？');
            document.getElementById("mission_choose_buttom1").src="pic/choosebuttom/anping/Anping_Castle_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/choosebuttom/anping/Anping_Castle_choose2_buttom.png";
            document.getElementById("story_anping_picture5_buttom").src="./pic/tool/Anping_Castle_tool_font.png";
            console.log('change story picture');
            anping_mission[5]=1;
        } 
//////////////
        else if(mission_select==6){
            mission_page3_picture.src='pic/chihkan/Chihkan_Tower_tool2.png';
            $('#mission_page3_title').html(`赤崁樓`);
            $('#mission_page3_word').text('荷蘭人打聽漢人消息，得知國姓爺鄭成功即將攻台，於是想出若是能打通普羅民遮城（赤崁樓）與熱蘭遮城（安平古堡）之間的密道，不僅能夠運送物資，也能夠作為避難的地下通道，實在是一個好主意！不過在技術層面上仍需要很大的突破，甚至可能會有人員的傷亡，身為當時荷蘭人參謀長的你，該如何決定呢？');
            document.getElementById("mission_choose_buttom1").src="pic/chihkan/Chihkan_Tower_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/chihkan/Chihkan_Tower_choose2_buttom.png";
            document.getElementById("story_chihkan_picture1_buttom").src="./pic/chihkan/Chihkan_Tower_tool.png";
            console.log('change story picture');
            chihkan_mission[1]=1;
        } 
        else if(mission_select==7){
            mission_page3_picture.src='pic/chihkan/Wu_Temple_tool2.png';
            $('#mission_page3_title').html(`祀典武廟`);
            $('#mission_page3_word').text('祀典武廟建於明鄭時期，在當地人民心目中地位崇高，並且在當時是官拜的祀典廟宇。日治時期，祀典武廟不再列入官方廟宇，又遇到日本人對台南的市街改正，為了要拓寬永福路，因此引起拆遷的爭議。做為當時賣肉圓的你，會支持或反對拓寬呢？');
            document.getElementById("mission_choose_buttom1").src="pic/chihkan/Wu_Temple_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/chihkan/Wu_Temple_choose2_buttom.png";
            document.getElementById("story_chihkan_picture2_buttom").src="./pic/chihkan/Wu_Temple_tool.png";
            console.log('change story picture');
            chihkan_mission[2]=1;
        } 
        else if(mission_select==8){
            mission_page3_picture.src='pic/chihkan/Daijingtou_tool2.png';
            $('#mission_page3_title').html(`大井頭`);
            $('#mission_page3_word').text('康熙二十三年（1684年），清朝正式開海，准許百姓對外貿易，當時候的你不畏黑水溝的惡名，堅持要到台灣闖闖事業。終於，船開到了台江內海，靠岸時水淺，所以改搭乘牛車登岸，來到了大井頭。大井頭是著名的渡口，俗語說「飲大井水，沒肥也美」，令附近市集住宅林立，初到台灣的你，會選擇哪裡作為你新生活的起點呢？');
            document.getElementById("mission_choose_buttom1").src="pic/chihkan/Dajingtou_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/chihkan/Dajingtou_choose2_buttom.png";
            document.getElementById("story_chihkan_picture3_buttom").src="./pic/chihkan/Daijingtou_tool.png";
            console.log('change story picture');
            chihkan_mission[3]=1;
        } 
        else if(mission_select==9){
            mission_page3_picture.src='pic/chihkan/Xinmei_St_tool2.png';
            $('#mission_page3_title').html(`開基武廟、新美街`);
            $('#mission_page3_word').text('開基武廟的關帝公相傳是鄭成功的部下從福州恭請過來的，因為靈驗，再加上位處在關帝港，商業活動發達，求籤問卜的人也絡繹不絕，因此在廟旁有不少相士開館擺攤，你也跟上了這股潮流，找了一個安靜的小攤子幫人解解籤詩、占占卜。不過，隨著關帝港河道淤積，風光不再，雖然還是有許多人會到抽籤巷解籤，但生意仍然大受影響。在這種情況下的你，該如何面對呢？');
            document.getElementById("mission_choose_buttom1").src="pic/chihkan/Xinmei_St_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/chihkan/Xinmei_St_choose2_buttom.png";
            document.getElementById("story_chihkan_picture4_buttom").src="./pic/chihkan/Xinmei_St_tool.png";
            console.log('change story picture');
            chihkan_mission[4]=1;
        } 
        else if(mission_select==10){
            mission_page3_picture.src='pic/chihkan/Tianhou_Palace_tool2.png';
            $('#mission_page3_title').html(`祀典大天后宮`);
            $('#mission_page3_word').text('寧靖王朱術桂是朱元璋的九世孫，他受到鄭經的邀請，到台灣延續反清復明的志業，鄭經為表示禮遇，便修建一座王府給他居住。後來鄭克塽繼位，在施琅攻台時決定不戰而降，如果你是寧靖王，得知這個悲慘的消息後，復明無望，你會怎麼做？');
            document.getElementById("mission_choose_buttom1").src="pic/chihkan/Tianhou_Palace_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/chihkan/Tianhou_Palace_choose2_buttom.png";
            document.getElementById("story_chihkan_picture5_buttom").src="./pic/chihkan/Tianhou_Palace_tool.png";
            console.log('change story picture');
            chihkan_mission[5]=1;
        } 
        //////////////////////////
        else if(mission_select==11){
            mission_page3_picture.src='pic/confucious/National_Museum_of_Taiwan_Literature_tool.png';
            $('#mission_page3_title').html(`台灣文學館`);
            $('#mission_page3_word').text('在日治時期台灣文學館曾經是台南州廳，是當時台南州的最高行政中心。在二戰期間受到美軍的轟炸，導致嚴重受損，屋頂及木構造部分接近全毀，僅餘外牆矗立。國民政府隨意修復後，將此地作為空軍後勤供應部使用，而當時的台南市政府則位於今天的建興國中(原南門尋常小學)裡辦公。在國小裡辦公似乎不是一個長久之計，於是就有搬遷的聲音出現。如果你是當時台南市政府的官員，經過討論過後認為台南州廳最為適合，但目前有空軍作為使用，你該怎麼做選擇呢？');
            document.getElementById("mission_choose_buttom1").src="pic/confucious/National_Museum_of_Taiwan_Literature_choose1_bottom-01.png";
            document.getElementById("mission_choose_buttom2").src="pic/confucious/National_Museum_of_Taiwan_Literature_choose2_bottom-01.png";
            document.getElementById("story_confucious_picture1_buttom").src="./pic/confucious/National_Museum_of_Taiwan_Literature_tool_buttom.png";
            console.log('change story picture');
            confucious_mission[1]=1;
        } 
        else if(mission_select==12){
            mission_page3_picture.src='pic/confucious/Confucius_Temple_tool.png';
            $('#mission_page3_title').html(`孔廟`);
            $('#mission_page3_word').text('在清朝道光年間，有位名叫陳守娘的姑娘，在丈夫死後守節堅持不嫁，不料卻被婆婆與小姑強迫賣身，守娘寧死不從，卻被她們折磨至死。鄉民們得知這個消息後欲告官，不過官方卻欲擺平此事，鄉民們忿忿不平，府城也雞犬不寧，夜半叫喊聲不斷⋯⋯，有冤魂作祟一說。此時鄉民們都認為是守娘顯靈，紛紛祭拜她，若你是當時的縣太爺，你將會如何看待這件事？');
            document.getElementById("mission_choose_buttom1").src="pic/confucious/Confucius_Temple_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/confucious/Confucius_Temple_choose2_buttom-01.png";
            document.getElementById("story_confucious_picture2_buttom").src="./pic/confucious/Confucius_Temple_tool_buttom.png";
            console.log('change story picture');
            confucious_mission[2]=1;
        } 
        else if(mission_select==13){
            mission_page3_picture.src='pic/confucious/HAYASHI_Shop_tool.png';
            $('#mission_page3_title').html(`林百貨、土地銀行`);
            $('#mission_page3_word').text('夜幕低垂，燈光照亮末廣町二丁目，閃亮熱鬧，台南銀座不浪得虛名，林百貨是台南人稱的「五棧樓仔」，是當時最高的建築物。當你畢業時，便進到這間最摩登的百貨公司工作，因為表現良好，而破格被升為二樓主管。然而，在1941年因太平洋戰爭而令台灣物資受到統制，日本進口的商品有一定的配額，令林百貨的營業額受到嚴重影響，這時候的你該如何因應呢？');
            document.getElementById("mission_choose_buttom1").src="pic/confucious/HAYASHI_Shop_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/confucious/HAYASHI_Shop_choose2_buttom.png";
            document.getElementById("story_confucious_picture3_buttom").src="./pic/confucious/HAYASHI_Shop_tool_buttom.png";
            console.log('change story picture');
            confucious_mission[3]=1;
        } 
        else if(mission_select==14){
            mission_page3_picture.src='pic/confucious/BUTOKUDEN_tool.png';
            $('#mission_page3_title').html(`武德殿`);
            $('#mission_page3_word').text('武德殿是日本人宣揚武道精神的場所，在日治後期更是作戰準備的地方，也時常舉辦警察官武道大會。身為台籍警察的你，劍道技如神，不過卻受不到平等的待遇，升官也遭阻饒、同工不同酬等等⋯⋯。明天就是武道大會，你獲得這次參加的機會，在武德殿裡的武道場上，你將會如何表現？');
            document.getElementById("mission_choose_buttom1").src="pic/confucious/BUTOKUDEN_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/confucious/BUTOKUDEN_choose2_buttom.png";
            document.getElementById("story_confucious_picture4_buttom").src="./pic/confucious/BUTOKUDEN_tool_buttom.png";
            console.log('change story picture');
            confucious_mission[4]=1;
        } 
        else if(mission_select==15){
            mission_page3_picture.src='pic/confucious/The_Judicial_Museum_tool.png';
            $('#mission_page3_title').html(`台南法院博物館`);
            $('#mission_page3_word').text('台南法院博物館是日治時期所建的法院，在光復後依然是作為地方法院使用。在二二八事件發生後，你剛獲得一份法院的秘書工作，在整理法院判決書的過程當中，你發現一疊耐人尋味的文件檔案，當中還夾著人權律師湯德章等人的軍事審判判決書，上頭沒有審判法官的名字、案號以及日期，與正式的判決書不同⋯⋯。涉世未深的你該如何做呢？');
            document.getElementById("mission_choose_buttom1").src="pic/confucious/The_Judicial_Museum_choose1_buttom.png";
            document.getElementById("mission_choose_buttom2").src="pic/confucious/The_Judicial_Museum_choose2_buttom.png";
            document.getElementById("story_confucious_picture5_buttom").src="./pic/confucious/The_Judicial_Museum_tool_buttom.png";
            console.log('change story picture');
            confucious_mission[5]=1;
        } 
    //anping road
        $("#mission_page2_dot").fadeOut(300);
        $("#mission_page2_choice").fadeOut(300);
        $(".mission_page2").fadeOut(300)
        setTimeout(()=>{
            $("#mission_page").animate({
                height: '130vw',
                bottom: '5vw'
            },300)
            setTimeout(function(){
                $("#story_background").animate({
                    height: '140vw',bottom:'0'
                },300)
                $("#bottom_line").animate({
                    bottom:'-12vw'
                },300)
            },300)
            setTimeout(function(){
                $(".mission_page3").fadeIn(300);
            },1000)
        },300)
        
        mission_page=3;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    
	
		}//這個是大於10的if
		
	})
  //選擇選項一
	$("#mission_choose_buttom1").click(function(){
        mission_page=4;
        document.getElementById("story_back_buttom").style.backgroundImage='url(pic/delete_buttom.png)';
    //anping road
        if(mission_select==1){
            anping_mission[1]=1;
            $("#mission_page4_word").text('英國領事館接受商人的請求後，希望清朝撤回此項政策，但皆被拒。1868年10月與清廷的再次談判失敗，英方決定訴諸武力以求談判。駐香港英國司令接獲領事館的要求後派兵前往安平港，並向安平港開砲，打算攻佔安平。此時，清廷立即派兵支援但被擊敗。後來清廷被迫重啟談判，訂定《樟腦條約》，廢除樟腦官辦、傳教自由等附加條件。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/1A.jpg')
            /*anping_toggle(mission_select);
            console.log("     anping_toggle");
            changemysql(mission_select);
            console.log("     changemysql");*/
        }
        else if(mission_select==2){
            anping_mission[2]=1;
            $("#mission_page4_word").text('王雞屎每天都會舉辦流水席，不僅只對自己的搬運工，他對於所有苦力者都給予飽餐一頓，因此受到工人們的愛戴，願意為王雞屎工作的人絡繹不絕、盡得人心，事業蒸蒸日上。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/2A.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==3){
            anping_mission[3]=1;
            $("#mission_page4_word").text('成功射下美軍轟炸機，保留了製鹽工廠實驗室的珍貴研究成果，對日後臺灣的製鹽技術有一大貢獻。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/3A.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==4){
            anping_mission[4]=1;
            $("#mission_page4_word").text('五十六名清兵與日本軍在天后宮廟埕大戰，直到最後一刻，但保護了天后宮這神聖的殿堂不被血洗。後人為紀念這些英勇的清兵而在天后宮內祭拜他們，成為安平天后宮特有的五十六官將。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/4A.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==5){
            anping_mission[5]=1;
            $("#mission_page4_word").text('鄭成功駐守熱蘭遮城附近的大員市街，長期圍困熱蘭遮城，同時也派部隊到各地囤墾以解決糧食不足的問題。在日後，也有約20艘糧食補給船從泉州前來支援。在九個月後成功逼退荷蘭人。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/5A.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==6){
            chihkan_mission[1]=1;
            $("#mission_page4_word").text('因為技術方面上不能開挖經過台江內海的海底地道，於是放棄這個主意。不過卻意外地開鑿了一口水井，提供了豐富的乾淨水源。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/1A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==7){
            chihkan_mission[2]=1;
            $("#mission_page4_word").text('日本人成功拆遷武廟，使永福路拓寬，交通改善，不過卻無因此讓人潮增加（當時赤崁樓為學生宿舍、醫院，並非觀光區），又因為流失來武廟拜拜的客人，肉圓攤生意大受影響，無奈只好忍痛歇業。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/2A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==8){
            chihkan_mission[3]=1;
            $("#mission_page4_word").text('大井頭擁有豐富的淡水資源，也是臨近台江內海的渡口，附近住宅非常密集，因此在康熙五十三年時，大井頭發生的火災輕易漫延數百房屋。這場惡火將你辛苦打拼的基業燒毀，讓你無家可歸，還差點命喪火場。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/3AB.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==9){
            chihkan_mission[4]=1;
            $("#mission_page4_word").text('你的生意蒸蒸日上，因為是關帝港附近首家買賣香、祭品和金紙的店家，壟斷開基武廟的香客生意。不過，原本隔壁攤的算命先生也開始賣起了金紙，因為金紙生意被搶，你與算命先生結仇。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/4A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==10){
            chihkan_mission[5]=1;
            $("#mission_page4_word").text('為了保住明朝的最後的血脈，寧靖王決定一把火燒掉自己的宅邸，製造自己死亡的假象，他帶著五位妃子逃亡，過著隱姓埋名的生活。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/5A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        
    //anping road
        else if(mission_select==11){
            confucious_mission[1]=1;
            $("#mission_page4_word").text('後來在民國57年(1968年)，臺南市政府函請空軍供應司令部遷讓臺南州廳建築，並補償新臺幣900萬元，再耗資200萬修復。你滿心歡喜的整理辦公的雜物，準備搬進較雄偉氣派的台南州廳。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/1A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==12){
            confucious_mission[2]=1;
            $("#mission_page4_word").text('守娘不願屈服，她變成厲鬼，將小販的銀紙變成紙錢，傳說還讓官府的物品飛動⋯⋯。她不願自己的不幸就此被世人遺忘，陳守娘在半夜在你的床邊現身⋯⋯。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/2A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==13){
            confucious_mission[3]=1;
            $("#mission_page4_word").text('雖然有很多反對的聲音出現，但你仍然堅持這個決定，認為在日ㄊ本人開的百貨賣台灣商品也不是壞事。引入一些台灣精美商品後，受到許多上層社會人士的喜愛，讓營業額稍微回升，但還是在1945年太平洋戰爭後，日本戰敗，林百貨仍然結束營業。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/3A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==14){
            confucious_mission[4]=1;
            $("#mission_page4_word").text('在日本同事田中先生顯露出弱點時，你刻意不擊破，反而是讓他搶先一步對你使出反擊。田中先生很清楚你都在讓著他，於是對你產生更濃厚的敵意，認為你看不起他。在日後的工作中中，他處處刁難著你⋯⋯。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/4A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==15){
            confucious_mission[5]=1;
            $("#mission_page4_word").text('你公開了這幾份文件，為湯德章等人被迫害增添了一項有利證據，讓原本憤怒的民眾更加憎恨國民政府。政府清算相關人員之後，發現就是你將判決書洩漏給報社，於是你就被冠上一個「顛覆國家政權罪」而判處死刑。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/5A.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        $(".mission_page3").fadeOut(300);
        setTimeout(()=>{
            $("#mission_page4_picture").fadeIn(300)
            $("#mission_choose_buttom2").fadeIn(300)
            $("#mission_page4_word").fadeIn(300)
            $("#story_back_buttom").fadeIn(300)
        },300)
        
        
    })
    //選擇選項二
    $("#mission_choose_buttom2").click(function(){
        mission_page=4;
        document.getElementById("story_back_buttom").style.backgroundImage='url(pic/delete_buttom.png)';
        if(mission_select==1){
            anping_mission[1]=2;
            $("#mission_page4_word").text('出口台灣茶葉到澳門，轉口至世界各地，奠定了德記洋行出口茶葉的市場基礎，在後來的一百多年仍然獨佔鰲頭。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/1B.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==2){
            anping_mission[2]=2;
            $("#mission_page4_word").text('雖然成功解決這次的事件，但王雞屎付出更多成本，當王雞屎無力負擔豐厚薪酬時，這些工人不願繼續為王雞屎工作。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/2B.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==3){
            anping_mission[3]=2;
            $("#mission_page4_word").text('美軍果然對鹽工廠進行空襲，三個煙囪灰飛煙滅，造成重大損失，但所幸無太多人員傷亡。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/3B.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==4){
            anping_mission[4]=2;
            $("#mission_page4_word").text('日軍發現躲在天后官的清兵，五十六名清兵慘遭屠殺，日軍把他們潦草埋葬於廟後空地，因神聖廟堂為血腥所濺，又有冤魂出沒的傳說，於是香火冷落，後來廟宇便荒廢了。後來在民國55年才被重建。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/4B.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==5){
            anping_mission[5]=2;
            $("#mission_page4_word").text('鄭成功宣布退回赤崁樓後，不料因水土不服而體弱多病。這時鄭軍也在赤崁地區大量囤田，不料卻與平埔族有大量的衝突，又造成人員的傷亡。荷蘭人的援軍已從巴達維亞到達安平，鄭成功的處境日漸危險，於是下令撤兵、返回泉州。');
            $("#mission_page4_picture").attr('src', 'pic/collect/anping/5B.jpg')
            /*anping_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==6){
            chihkan_mission[1]=2;
            $("#mission_page4_word").text('荷蘭人不需費勁地設計通往熱蘭遮城的地道，省下許多人力資源。你將調動這批人到赤崁地區搜刮糧食及補給品，以對付鄭成功。這麼一來若鄭成功進行圍城，就有較多的資源可應付。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/1B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==7){
            chihkan_mission[2]=2;
            $("#mission_page4_word").text('憤慨的你集結附近的神像店、幾個小吃攤商，一起向日本政府抗議，拒絕武廟的拆遷。經過雙方的協商之後，最後以道路轉折，只拆除廟左外牆及當廳而解決，成功保存了大部分的祀典武廟。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/2B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==8){
            chihkan_mission[3]=2;
            $("#mission_page4_word").text('你買了一隻牛和一台牛車，披荊斬棘，尋找適合耕種的土地，不料卻誤入西拉雅族的領土範圍，不幸地被茅射死。在康熙61年（1722年）起，因為太多像你一樣的漢人被殺害，開始採漢番隔離政策，以立碑、立界方式來規範漢人生活區域，嚴禁漢人超越其區域。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/3AB.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==9){
            chihkan_mission[4]=2;
            $("#mission_page4_word").text('雖然生意並不穩定，卻尚能稱得上是一份養家活口的工作。有一次替人解籤占卜，進而幫助了一位落魄商人東山再起，獲得不筆不小的財富，你將攤子重新裝潢，以便吸引更多生意。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/4B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==10){
            chihkan_mission[5]=2;
            $("#mission_page4_word").text('「艱辛避海外，總為數莖髮；於今事畢矣，祖宗應容納。」傷心的寧靖王決定跟隨明朝一同走向滅亡，以表示自己的愛國之心，他就與五位妃子和家僕們一起在家中上吊自殺，將宅邸贈送給與自己友好的僧人，便成為了日後天后宮的原型。');
            $("#mission_page4_picture").attr('src', 'pic/collect/chihkan/5B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==11){
            confucious_mission[1]=2;
            $("#mission_page4_word").text('台南市議會決議後，決定不要花錢修復日本人蓋的房子，自己另造一棟新的現代化大樓，於是將地點選在當時的臺灣省立成功大學附近建地，耗資新台幣1100萬，將台南市政治中心遷往東邊。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/1B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==12){
            confucious_mission[2]=2;
            $("#mission_page4_word").text('你與其他官員討論後，決定賜封守娘，讓世人繼續記得她的貞節與故事。你在府城孔廟的節孝祠安排了一個位子給陳守娘，牌上寫著「欽褒節烈邑民人林壽妻陳守娘神位」，以供後人祭拜。守娘因此不再作怪。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/2B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==13){
            confucious_mission[3]=2;
            $("#mission_page4_word").text('要做裁員這個決定你也很不捨，做了這項決定後減少了員工的向心力，對林百貨的認同感降低。營業時間的減少更影響了營業額。1945太平洋戰爭後，日本戰敗，林百貨終究結束營業。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/3B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==14){
            confucious_mission[4]=2;
            $("#mission_page4_word").text('這是一個難得的好機會，因為比武的結果會定期刊登在台灣警察組織出版的相關刊物中，你過關斬將地拿下良好的成績，受到警物局長的青睞，破格升官。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/4B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        else if(mission_select==15){
            confucious_mission[5]=2;
            $("#mission_page4_word").text('你將這疊判決書抄寫過一份後，將原稿收進保險庫的最深處，這份文件不見天日，而你對於政府的腐敗黑暗感到無力，於是便辭去這份法院秘書的工作，隱居到南投日月潭，過著遠離世俗的生活。');
            $("#mission_page4_picture").attr('src', 'pic/collect/confucious/5B.jpg')
            /*chihkan_toggle(mission_select);
            changemysql(mission_select);*/
        }
        $(".mission_page3").fadeOut(300);
        setTimeout(()=>{
            $("#mission_page4_picture").fadeIn(300)
            $("#mission_choose_buttom2").fadeIn(300)
            $("#mission_page4_word").fadeIn(300)
            $("#story_back_buttom").fadeIn(300)
        },300)
    })
})

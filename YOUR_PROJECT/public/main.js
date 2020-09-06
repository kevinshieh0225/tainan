$(document).ready(function() {  
    $("#ajax_btn1").click(function(){
        console.log('into')
        event.preventDefault();//取消reload
        $.ajax({
            method: "post",
            url: "./ajax_apply",
            data: {
                name: $("#ajax_apply input[name='name']").val(),
                id: $("#ajax_apply input[name='id']").val(),
            },
            success: function(data) {
                $("#ajax_content1").text(data)
            },
            error: function(){
                alert("fail");
            }
          })
    })  

    $("#ajax_btn2").click(function(){
        console.log('into2')
        event.preventDefault();//取消reload
        $.ajax({
            method: "post",
            url: "./ajax_search",
            data: {
                id1: $("#ajax_search input[name='id1']").val(),
                id2: $("#ajax_search input[name='id2']").val()
            },
            success: function(data) {
                $("#ajax_content2").text(data)
            },
            error: function(){
                alert("fail");
            }
          })
    }) 
})

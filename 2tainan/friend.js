console.log('friend ready')
$(document).ready(function() {  
    $('#friend_state_buttom').click(()=>{
        document.getElementById('friend_state_buttom').style.display='none'
        document.getElementById('friend_state_buttom_enter').style.display='block'
        document.getElementById('friend_search_buttom').style.display='block'
        document.getElementById('friend_search_buttom_enter').style.display='none'
        $('#friend_search_page').fadeOut(500)
        setTimeout(()=>{
            $('#friend_state_page').fadeIn(500)
        },500)
    })
    $('#friend_search_buttom').click(()=>{
        document.getElementById('friend_state_buttom').style.display='block'
        document.getElementById('friend_state_buttom_enter').style.display='none'
        document.getElementById('friend_search_buttom').style.display='none'
        document.getElementById('friend_search_buttom_enter').style.display='block'
        $('#friend_state_page').fadeOut(500)
        setTimeout(()=>{
            $('#friend_search_page').fadeIn(500)
        },500)
    })
})
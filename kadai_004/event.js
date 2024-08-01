$(window).on('load', function() {
     // window load時に
    console.log('loadイベントが発生しました');
    });

$(function(){
    $(window).on('scroll', function() {
         // scrollイベントが発生したら実行 
        console.log('scrollイベントが発生しました');
    });
});


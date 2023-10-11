//header & footer and body-------------------------------------------------------

var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});



$(".language").click(function(){
    $(".lanbox").slideUp(300);
    $(this).children(".lanbox").stop().slideToggle(300);
});



// header gnb
$(".gnb > li").on("mouseover focusin",function(){
    if(bw>800){
        $(this).addClass("on").siblings().removeClass();
        var box = $(this).index();

        $(".gnbbox > ul").eq(box).addClass("on").siblings().removeClass();
        $(".navbox").css({"background":"#5f0830"});
    }
});

$("#tophed").on("mouseleave focusout",function(){
    if(bw>800){
        $(".gnbbox > ul").removeClass();
        $(".navbox").css({"background":"none"});
    }
});


//모든네비창 열기 누르면 토글클래스에 html에 스크롤 없애고 픽스드
$("#menuicon").click(function(){
    $("#allnav").slideToggle(100);
    $("html").toggleClass("fix");
});





// 최하단푸터 학원학교 링크박스
$(".ft2 > div > a").click(function(){
    $(".hanyanglink").addClass("on").toggle();
});


//모바일 헤드 글로벌 네비게이션
$(window).scroll(function(){
    if(bw < 800)
    var st = $(this).scrollTop();
    if(st > 1){
        $("#hed").addClass("on");
    }
    else{
        $("#hed").removeClass("on")
    }


})


//main script @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//좌우스크롤 메인섹션 영역
$(function() {
    if(bw >= 800)
    $(".bone").mousewheel(function(event, delta) {

       this.scrollLeft -= (delta * 30);
       event.preventDefault();
    });
 });


//메인 텍스트 업다운 슬라이드 
var ups = 0;
function upsauto (){
    ups++;
    if(ups >= 4) {ups = 0}
    $(".upslide").animate({"top":-38 + ups},500,function(){
        $(this).append($(".upslide li:first-child")).css({"top":"0"})
    })
    $(".upslide").children("li:nth-of-type(3)").addClass("select").siblings().removeClass()
};

var uptimer = setInterval("upsauto()",4000);


//일시정지
$(".upbtn3").click(function(){
    clearInterval(uptimer)
    $(".upbtn4").css({"display":"inline-block"})
    $(".upbtn3").css({"display":"none"})
});

$(".upbtn4").click(function(){
    uptimer = setInterval("upsauto()",4000);
    $(".upbtn3").css({"display":"inline-block"})
    $(".upbtn4").css({"display":"none"})
});

//업다운버튼
$(".upbtn1").click(function(){
    $(".upslide").animate({"top":"-38px"},500,function(){
        $(this).append($(".upslide li:first-child")).css({"top":"0"})
    });
    
    $(".upslide").children("li:nth-of-type(3)").addClass("select").siblings().removeClass()
})

$(".upbtn2").click(function(){
    $(".upslide").css({"top":"-38px"},500).prepend($(".upslide li:last-child")).animate({"top":"0"},500);
    $(".upslide").children("li:nth-of-type(2)").addClass("select").siblings().removeClass();
});



//메인 공지사항 텍스트 
$(".notcat li").click(function(){
    $(this).addClass("select").siblings().removeClass();

    var not = $(this).index() -1;
    $(".nottext").eq(not).addClass("on").siblings().removeClass("on");
})



//학사안내 
$(".bacnum li").click(function(){
    $(this).addClass("select").siblings().removeClass();

    var ins =  $(this).index();
    
    $(".ins1").animate({"left":-240 * ins},300)
});



//한양사이버대 뉴스

$(".newsdot li").click(function(){
    var lin = $(".news li").width();
   if(bw >= 800){
    var news =  $(this).index();
    
    $(".news").animate({"left":-490 * news},300)
   }
   else{
    var news =  $(this).index();
    
    $(".news").animate({"left":-lin*news},300)
}

    $(this).addClass("select").siblings().removeClass();

});


//전공소개 슬라이드
$(".itmbtn1").click(function(){
    if(bw >= 800){
    $(".itmbox").css({"left":"-490px"},300).prepend($(".itmbox > div:last-child")).animate({"left":"0"},300)
    }
    else{
        $(".itmbox").css({"left":-100 + "%"},300).prepend($(".itmbox > div:last-child")).animate({"left":"0"},300)
    }
});

$(".itmbtn2").click(function(){
    if(bw >= 800){
    $(".itmbox").stop().animate({"left":"-490px"},300,function(){
        $(this).append($(".itmbox > div:first-child")).css({"left":"0"})
    })
    }
    else{
    $(".itmbox").stop().animate({"left":-100 + "%"},300,function(){
        $(this).append($(".itmbox > div:first-child")).css({"left":"0"},300)
    })
    }
});


//우수논문 슬라이드
$(".tsdot li").click(function(){
    var liw = $(".tss li").width();
   if(bw >= 800){
    var ts =  $(this).index();
    
    $(".tss").animate({"left":-490 * ts},300)
   }
   else{
    var ts =  $(this).index();
    
    $(".tss").animate({"left":-liw*ts},300)
    }

    $(this).addClass("select").siblings().removeClass();

});


//동아리 슬라이드
$(".clubdot li").click(function(){
    var cliw = $(".clubs li").width();
   if(bw >= 800){
    var club =  $(this).index();
    
    $(".clubs").animate({"left":-490 * club},300)
   }
   else{
    var club =  $(this).index();
    
    $(".clubs").animate({"left":-cliw*club},300)
    }

    $(this).addClass("select").siblings().removeClass();

});


//학교자랑 슬라이드
$(".scdot li").click(function(){
    var scliw = $(".scs li").width();
   if(bw >= 800){
    var sc =  $(this).index();
    
    $(".scs").animate({"left":-490 * sc},300)
   }
   else{
    var sc =  $(this).index();
    
    $(".scs").animate({"left":-scliw*sc},300)
    }

    $(this).addClass("select").siblings().removeClass();

});
















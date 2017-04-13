/**
 * Created by yxq on 2017/2/21.
 */
window.onload = function () {




    //$(".banner-btn>li").css({"width":10,"height":10,"background-color":"red","opacity":12});

    var lunBo = document.getElementById("link-lunbo");

    var ul = lunBo.children[0];

    var imgArr = ul.getElementsByTagName("img");

    ul.appendChild(imgArr[0].cloneNode(true));
    console.log(ul);

    var timer = null;
    var num = 0;
    timer = setInterval(autoP, 50);
    function autoP() {
        num--;
        num <= -1110 ? num = 0 : num;
        ul.style.left = num + "px";
        ul.onmouseover = function () {
            clearInterval(timer);
        }
        ul.onmouseout = function () {
            timer = setInterval(autoP, 50);
        }


    }
//手风琴开始
    var exhibition = document.getElementById("exhibition");
    var exUl = exhibition.getElementsByTagName("ul")[0];
    var exLi = exUl.children;


    for (var i = 0; i < exLi.length; i++) {

        exLi[i].onmouseover = function () {
            for(var j=0;j<exLi.length;j++){
                fn1(exLi[j],{"width":100});

            }
            fn1(this,{"width":600});


        }

    }

    exhibition.onmouseout = function () {
        for(var i=0;i<exLi.length;i++){
            fn1(exLi[i],{"width":210});
        }

    }

//手风琴结束

}












//meau-nav 开始

$(function () {
    $(".meau-nav-list div").mouseenter(function () {
        $(this).children("ul").stop().fadeIn(400).siblings( $(this).children("ul").children("div")).hide();
    });
    $(".meau-nav-list div").mouseleave(function () {
        $(this).children("ul").stop().fadeOut();
    });

//meau-nav 结束

//二维码
    $(".ewma").on("mouseover", function () {
        $(this).find("img").show();
    });
    $(".ewma").on("mouseout", function () {
        $(".ewma").children("img").hide();
    });
//二维码


    //大图渐变 开始
    jianBian();
    function jianBian(){
    var aArr = $(".banner a");
            var timer = null;
            var index =0;
          timer = setInterval(function () {
                index++;
                if(index>3){
                    index=0;
                }
                $(aArr).eq(index).fadeIn("slow").siblings("a").fadeOut("slow");
                $(".banner-btn li").eq(index).css({"width":15,"height":15,"border-radius":7,"top":-3}).siblings("li").css({"width":10,"height":10,"border-radius":5,"top":0});

            },3000);


        }



    //大图渐变 结束




    //intro  开始
    $(".intro-left-top>div").mouseover(function () {
        var index = $(this).index();
        if($(this).hasClass("cur1")){
            $(this).siblings("div").removeClass("cur1");

        }else {
            $(this).addClass("cur1").siblings("div").removeClass("cur1");
        }
        $(".intro-left-bottom a").eq(index).fadeIn().siblings("a").fadeOut();
    });

    $(".intro-right-top>div").mouseover(function () {
        var index = $(this).index();
        if($(this).hasClass("cur1")){
            $(this).siblings("div").removeClass("cur1");
        }else {
            $(this).addClass("cur1").siblings("div").removeClass("cur1");
        }
        $(".intro-right-bottom a").eq(index).fadeIn().siblings("a").fadeOut();
    });
    //intro  结束

   //famous 开始

        var famLi = $(".famous>li");
        for(var i=0;i<famLi.length;i++) {
            var index = $(famLi).index();
            setInterval(function () {
                index++;
                if(index>1){
                    index=0;
                }
                $(famLi).eq(index).css({"opacity": "1", "z-index": "1"}).next("li").css({"opacity": "0", "z-index": "1"});


            }, 500);

        }

   //famous 结束


    $(".hjian").on("click", function () {

        var timer = null;
        timer = setInterval(function () {
            var leader = document.body.scrollTop;
            //获取步长
            var step = (0 - leader)/15;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(0 === leader){
                clearInterval(timer);
            }
        },30)


    })



   //famous 开始
    famous();
    function famous(){
        var index = 0;
        setInterval(function () {
            index++;
            if(index>1){
                index=0;
            }
            $(".famous-ul li").eq(index).fadeIn("1000").next("li").fadeOut("1000");

        },1000);

    }

   //famous 结束







});


















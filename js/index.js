$(function(){
    $(".wjs-dh-ul li").on("click",function(){
        $(this).siblings().removeClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });
    $(window).on("resize",function(){
      // 1.1 获取窗口的宽度
        let clientW = $(window).width();
        // console.log(clientW);
    
        // 1.2 设置临界值
        let isShowBigImage = clientW >= 768;
    
        // 1.3 获取所有的item
        let $allItems = $(".wjs_banner .item");
    
        // 1.4 遍历
        $allItems.each(function (index, item) {
            // 1.4.1 取出图片的路径
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            
            // 1.4.3 设置img标签
            if(!isShowBigImage){
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            }else {
                $(item).empty();
                let imgUrl = 'url("' + src +'")';
                // 1.4.2 设置背景
                $(item).css({
                backgroundImage: imgUrl
            });
            }
    
        });
    });
    
    $(window).trigger("resize");
	
	 // 移动端触屏事件
    // 拿到轮播图对象
    var carousel= $(".carousel")[0];
    var startX = 0;//滑动的起始位置
    var endX = 0;//滑动的结束位置
    // 开始触摸手机屏幕 监听
    carousel.addEventListener('touchstart',function(event){
        
        startX = event.targetTouches[0].clientX;
        console.log("开始位置",startX);
    });

    // 手指离开手机屏幕 是 监听
    carousel.addEventListener('touchend',function(event){
        endX=event.changedTouches[0].clientX;
        console.log("结束位置",endX);
        if(endX - startX >0){
            $('.carousel').carousel("prev");
        }else {
            $('.carousel').carousel("next");
        }
    });


    
    $('[data-toggle="tooltip"]').tooltip();

    var myScroll = new IScroll('#wrapper',{
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
    });
    //标签页
    // $('#myTabs a').click(function (e) {
    //     e.preventDefault()
    //     $(this).tab('show')
    //     $('#myTabs a:last').tab('show')
    //   })





	  // 2. 工具提示
//     $('[data-toggle="tooltip"]').tooltip();
// 
//     // 3. 动态处理宽度
//     $(window).on("resize", function () {
//          let $ul = $("#lk_product .nav");
//          let $allLis = $("[role='presentation']", $ul);
//          // console.log($allLis);
// 
//          // 3.1 遍历
//         let totalW = 0;
//         $allLis.each(function (index, item) {
//              totalW += $(item).width();
//         });
// 
//         // console.log(totalW);
// 
//         let parentW = $ul.parent().width();
// 
//         // 3.2 设置宽度
//         if(totalW > parentW){
//             $ul.css({
//                 width: totalW + "px"
//             })
//         }else {
//             $ul.removeAttr("style");
//         }
//     });
// 
//     
//     // 4. 导航处理
//     let allLis = $("#lk_nav li");
//     
//     $(allLis[2]).on("click", function () {
//         $("html,body").animate({ scrollTop: $("#lk_hot").offset().top }, 1000);
//     });
// 
// 
//     $(window).trigger("resize");
})
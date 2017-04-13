/**
 * Created by yxq on 2017/2/15.
 */

function fn1(ele,json,fn){
    //要用定时器，先清定时器
    clearInterval(ele.timer);

    ele.timer = setInterval(function () {
        //利用 for..in 遍历所有属性，按单个属性操作
        var flag = true;
        for(var k in json){
            var lader = parseFloat(getStyle(ele,k));
            //先获取步长
            var step = (json[k]-lader)/10;
            //重新定义步长
            step = step>0?Math.ceil(step):Math.floor(step);
            //赋值
            lader = lader + step;
            ele.style[k] = lader + "px";
            console.log(1);
            if(json[k] != lader){
                flag = false;

            }
            if(flag){
                ele.style[k] = json[k] + "px";
                clearInterval(ele.timer);

                if(fn){
                    fn();
                }

            }

        }
        //判断

//           if(Math.abs(json[k]-lader)<=Math.abs(step)){
//
//                ele.style[k] = json[k] + "px";
//                clearInterval(ele.timer);
//
//            }

    },8);

}

function getStyle(ele,attr){
    if(window.getComputedStyle != undefined){
        return window.getComputedStyle(ele,null)[attr];

    }else{
        return ele.currentStyle[attr];
    }

}

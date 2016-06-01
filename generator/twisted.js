/**
 * Created by houlina02 on 16/5/31.
 */
(function main(){
    console.log("~~the yield() and next()~~");
    var wuxing= wuXing("金");
    var nex_re= wuxing.next();
    console.log("after the first next")
    if(typeof nex_re.value =="function"){
        var re= nex_re.value().next("木");
        console.log("after the second next")
        console.log(re.value)
    }
    var re=wuxing.next("火");
    console.log("after the third next")
    console.log(re.value)
})();

function* wuXing(ele){
    console.log(ele)
    var re= yield wuXing1;//yield 的时候,不能带参数,否则 返回值 nex_re.value instanceOf Function == false,切记!!!
    var re1= yield wuXing1(re);
    console.log(re1);
    console.log(`Has the ${re1} any relationship with the return value of shui?`);
    return "土";
}

function* wuXing1() {
    console.log("木");
    return "水";
}
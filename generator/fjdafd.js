/**
 * Created by houlina02 on 16/5/31.
 */
(function main(){
    console.log("~~the yield() and next()~~");
    var gen= wuXing();
    var nex_re= gen.next();
    console.log("after the first next")
    if(typeof nex_re.value =="function"){
        var re= nex_re.value().next();
        console.log("after the second next")
        console.log(re.value)
    }
    var re=gen.next("火");
    console.log("after the third next")
    console.log(re.value)
})();

function* wuXing(){
    console.log("金")
    var re= yield shui;
    console.log(re);
    console.log(`Has the ${re} any relationship with the return value of shui?`);
    return "土";
}

function* shui() {
    console.log("木");
    return "水";
}
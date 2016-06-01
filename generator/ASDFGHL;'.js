/**
 * Created by houlina02 on 16/5/31.
 */

var main=function(){
    console.log("~~the pure next():~~");
    var gen=wuXing();
    var nex_re=gen.next();
    console.log(`the return value of next()-->${nex_re.value}`);
    console.log(`the return value of next()-->${gen.next().value}`);
    console.log(`the return value of next()-->${gen.next().value}`);
    console.log(`the return value of next()-->${gen.next().value}`);
    console.log("~~ the end ~~")
}();

function* wuXing(){
    yield "金";
    yield "木";
    return "无";
}



var stdin = process.openStdin();
const fillMap = function () {
const map = new Map();
    for (var i=32;i<128;++i) {
        map.set(i, String.fromCharCode(i))
    }
    return map
}
 const renderMap = function (map) {
    for (i=0 ;i<6; i++){
        let str = ''
        for(j=0; j<16; j++){
            const val = map.get(i *16 + j + 32);
                str = val ? str + map.get(i *16 + j + 32) : str
        }
        console.log(str)
    }
}
const masterMap = fillMap();
renderMap(masterMap);
stdin.addListener("data", function(d) {
    renderMap(masterMap.set(d.toString().charCodeAt(0), ' ')
    );
});

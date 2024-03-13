
function generateResourceData(startId, endId, text) {
    var data = [];
    var colors = [
        '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c', '#fdd835', '#748ffc',
        '#9775fa', '#df5286', '#7fa900', '#fec200', '#5978ee', '#00bdae', '#ea80fc'
    ];
    for (var a = startId; a <= endId; a++) {
        var n = Math.floor(Math.random() * colors.length);
        data.push({ Id: a, Text: text + ' ' + a, Color: colors[n] });
    }
    return data;
}
export default generateResourceData;

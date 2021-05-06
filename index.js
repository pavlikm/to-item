String.prototype.toInt = function (){
    let key = this.toString();
    let h = 0, i = key.length;
    while (i > 0) {
        h = (h << 5) - h + key.charCodeAt(--i) | 0;
    }
    return Math.abs(h);
}

String.prototype.to = function (map){
    if(typeof map === "undefined") return this.toString();
    let int = this.toString().toInt();
    let nodes = Array.from(map).sort((a, b) => a - b);

    return nodes[int % nodes.length];
}

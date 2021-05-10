Object.defineProperty(Object.prototype, 'toInt', {
    value: function (){
        let key = this.toString();
        if(parseInt(key).toString() === key) return Math.abs(parseInt(key));
        let h = 0, i = key.length;
        while (i > 0) {
            h = (h << 5) - h + key.charCodeAt(--i) | 0;
        }
        return Math.abs(h);
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'to', {
    value: function (map){
        if(typeof map === "undefined") return this.toString();
        let int = this.toString().toInt();
        let nodes = Array.from(map).sort((a, b) => a - b);

        return nodes[int % nodes.length];
    },
    enumerable: false
});

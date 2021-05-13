Object.defineProperty(Object.prototype, 'to', {
    value: function (map){

        function toInt(key){
            if(parseInt(key).toString() === key) return Math.abs(parseInt(key));
            let h = 0, i = key.length;
            while (i > 0) {
                h = (h << 5) - h + key.charCodeAt(--i) | 0;
            }
            return Math.abs(h)
        }

        function toString(obj){
            let str = '';
            for (const property in obj) {
                if(obj.hasOwnProperty(property)){
                    str += `${property}: ${obj[property]}`;
                }
            }
            return str;
        }

        if(typeof map === "undefined") return this.toString();
        let int = toInt(toString(this));
        let nodes = Array.from(map).sort((a, b) => a - b);

        return nodes[int % nodes.length];
    },
    enumerable: false
});


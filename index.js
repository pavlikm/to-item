Object.defineProperty(Object.prototype, 'to', {
    value: function (map) {

        function toInt(key) {
            key = toString(key);
            let h = 0, i = key.length;
            while (i > 0) {
                h = (h << 5) - h + key.charCodeAt(--i) | 0;
            }
            return Math.abs(h)
        }

        function toString(obj) {
            let str = '';
            for (let property in obj) {
                if (obj.hasOwnProperty(property)) {
                    str += `${property}: ${obj[property]}`;
                }
            }
            return str || str.toString();
        }

        if (typeof map === "undefined") return this;
        let int = toInt(toString(this));
        let nodes = Array.from(map).sort((a, b) => a - b);

        return nodes[int % nodes.length];
    },
    enumerable: false
});


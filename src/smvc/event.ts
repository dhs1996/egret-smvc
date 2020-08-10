module smvc {
    class _Event {
        private map: any;

        constructor() {
            this.map = {};
        }

        public emit(type: string, data?: any) {
            for (let k in this.map[type]) {
                let v = this.map[type][k];
                if (v.f) {
                    (v.f as Function).call(v.o, data);
                }
            }
        }

        public on(type: string, listener: Function, thisObject = null) {
            if (!type || type == '' || !listener) return;
            this.map[type] = this.map[type] || [];
            this.map[type].push({ 'f': listener, 'o': thisObject });
        }

        public cut(type: string, listener: Function, thisObject = null) {
            if (!type || type == '' || !listener) return;
            for (let k in this.map[type]) {
                let v = this.map[type][k];
                if (v.f == listener && v.o == thisObject) {
                    this.map[type].splice(k, 1);
                }
            }
        }
    }
    export let Event = new _Event();
}
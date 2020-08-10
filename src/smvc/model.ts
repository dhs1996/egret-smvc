module smvc {
    export class model {
        public DATA;
        public id: string;
        constructor(id: string) {
            this.id = id;
            this.DATA = {}
        }

        public write(path: string, v: any, data?) {
            if (path.indexOf('.') == -1) {
                this.DATA[path] = v;
            } else {
                let d;
                let arg = path.split('.');
                if (data) {
                    let key = arg.shift();
                    if (!d[key]) d[key] = {};
                    d = data[key];
                } else {
                    let key = arg.shift();
                    if (!this.DATA[key]) this.DATA[key] = {};
                    d = this.DATA[key];
                }
                if (arg.length == 1) {
                    d[arg[0]] = v;
                } else {
                    this.write(arg.join('.'), v, d)
                }
            }
        }

        public read(path: string, data?) {
            if (path.indexOf('.') == -1) {
                return this.DATA[path];
            } else {
                let d;
                let arg = path.split('.');
                if (data) {
                    d = data[arg.shift()];
                } else {
                    d = this.DATA[arg.shift()];
                }
                if (arg.length == 1) {
                    return d[arg[0]];
                } else {
                    return this.read(arg.join('.'), d);
                }
            }
        }

        public viewDataChange(obj: { key: string, data: any }) {
            Event.emit(this.id + '_view_event', obj);
        }
    }
}
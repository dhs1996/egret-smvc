module test {
    export class page2Model extends smvc.model {
        constructor(id) {
            super(id)
        }

        public getData() {
            let data1 = this.read('data1') || 1;
            this.viewDataChange({ key: 'data1', data: data1 });
            this.write('data1', data1 + 1);
        }
    }
}
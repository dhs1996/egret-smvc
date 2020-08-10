module test {
    export class page2View extends smvc.view {
        constructor(id) {
            super(id);
        }

        public setData(obj: { key: string, data: any }) {
            switch (obj.key) {
                case 'data1':
                    this['label1'].text = obj.data;
                    break;
                default:
                    break;
            }
        }
    }
}
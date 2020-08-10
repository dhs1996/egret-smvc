module test {
    export class page1 extends smvc.windowController {
        constructor() {
            super('page1');
            this.view = new page1View('page1')
            this.model = new page1Model('page1');
        }

        public onCreated(){
            (<page1Model>this.model).setData();
            let view = <page1View>this.view;
            (<eui.Button>view['btn_goto']).addEventListener('touchTap',()=>{
                smvc.winMgr.show('page2');
            },this);
        }
    }

    class page1Model extends smvc.model {
        constructor(id) {
            super(id);
        }

        public setData() {
            this.viewDataChange({
                key: 'image',
                data: '1_png'
            });
        }
    }

    class page1View extends smvc.view {
        constructor(id) {
            super(id);
        }

        public setData(obj: { key: string, data: any }) {
            switch (obj.key) {
                case 'image':
                    this['image'].source = obj.data;
                    break;
                default:
                    break;
            }
        }
    }
}
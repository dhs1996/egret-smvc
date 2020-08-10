module test {
    export class page3 extends smvc.popController {
        constructor() {
            super('page3');
            this.view = new page3View('page3')
            this.model = new page3Model('page3');
        }

        public onCreated(){
            (<page3Model>this.model).setData();
            let view = <page3View>this.view;
            (<eui.Button>view['btn_goto']).addEventListener('touchTap',()=>{
                smvc.winMgr.remove('page3');
            },this);
        }
    }

    class page3Model extends smvc.model {
        constructor(id) {
            super(id);
        }

        public setData() {
            
        }
    }

    class page3View extends smvc.view {
        constructor(id) {
            super(id);
        }

        public setData(obj: { key: string, data: any }) {

        }
    }
}
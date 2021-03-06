module test {
    export class page2 extends smvc.windowController {
        constructor() {
            super('page2');
            this.view = new page2View('page2')
            this.model = new page2Model('page2');
            this.init();
        }

        private init() {
        }

        public onCreated() {
            let view = <page2View>this.view;
            (<eui.Button>view['btn_goto']).addEventListener('touchTap', () => {
                smvc.winMgr.show('page1');
            }, this);
            (<eui.Button>view['btn_goto0']).addEventListener('touchTap', () => {
                (<page2Model>this.model).getData();
                smvc.winMgr.show('page3');
            }, this);
        }
    }
}
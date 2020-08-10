module test {
    export class page2 extends smvc.windowController {
        constructor(){
            super('page1');
            this.view = new page2View('page1')
            this.model = new page2Model('page1');
            this.init();
        }

        private init(){
            (<page2Model>this.model).getData();
        }
    }
}
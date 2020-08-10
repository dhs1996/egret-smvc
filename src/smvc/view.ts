module smvc {
    export class view extends eui.Component {
        public id: string;
        constructor(id) {
            super();
            this.skinName = id;
            this.initEvents();
        }

        private initEvents() {
            Event.on(this.id + '_view_event', this.setData, this);
        }

        public setData(obj:{key:string,data:any}) {
            
        }

        public $onRemoveFromStage() {
            this.remove();
        }

        public remove() {
            Event.cut(this.id + '_view_event', this.setData, this);
        }
    }
}
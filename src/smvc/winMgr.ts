module smvc {
    export class _winMgr {
        public stage: egret.Stage;
        public winLists;
        constructor(stage) {
            this.stage = stage;
            this.winLists = {};
        }

        public show(id, obj?) {
            if (!this.winLists[id]) {
                this.winLists[id] = new test[id](obj);
                this.stage.addChild(this.winLists[id].view);
                this.winLists[id].onCreated();
                for (var key in this.winLists) {
                    if (this.winLists[id].winType == 'pop') {
                        return;
                    }
                    if (key != id && this.winLists[key]) {
                        this.winLists[key].onRemoved();
                        this.remove(key)
                    }
                }
            }
        }

        public remove(id) {
            if (this.winLists[id]) {
                this.winLists[id].onRemoved();
                this.stage.removeChild(this.winLists[id].view)
                this.winLists[id] = null;
            }
        }
    }
}
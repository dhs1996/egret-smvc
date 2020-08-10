module smvc{
    export class controller {
        public id:string;
        public view:view;
        public model:model;
        public winType:string;
        constructor(id:string){
            this.id=id;
        }

        public onCreated(){

        }

        public onRemoved(){

        }
    }
}
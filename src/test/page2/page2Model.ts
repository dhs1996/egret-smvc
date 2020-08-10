module test {
    export class page2Model extends smvc.model {
        constructor(id){
            super(id)
        }

        public getData(){
            this.write('data1',100);
        }
    }
}
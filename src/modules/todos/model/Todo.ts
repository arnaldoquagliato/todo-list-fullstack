import { v4 as uuidV4 } from "uuid";

class Todo {
    id?: string;
    description?: string

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }

    }
}

export {Todo}
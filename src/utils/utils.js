import axios from "axios";
import {URL} from "./config";
import {useStore} from "vuex";

export const Delete = (elements, path)=>{
    const store = useStore()
    let id = []
    elements.value.forEach(element=>{element.to_delete?id.push(element.id):''})
    axios({
        method: "POST",
        url: URL+path,
        data:{
            id: id
        }
    }).then(()=>{
        store.commit('changeReload')
    })
}
import { ActionCreator, createReducer, on } from "@ngrx/store";
import { SiteActions } from "./site.action";
import { item } from "../model/item.model";

const initial_cart : item[] = [];

export const SiteReducer = createReducer(
    initial_cart ,
    on(SiteActions.addCart,(state,{item})=> 
    { 
        let index = state.findIndex(u=> u.id == item.id)
        let cart_save =[]
        let cart_new =[]
        let quantite = 0
        
       if(index==-1)
       {
        return state.concat(item)
       }
       else
       {
        quantite = state[index].quantite;
        cart_save = state.filter(u => u.id !== item.id)
        cart_new =[{
            id : item.id,
            prix : item.prix,
            image : item.image,
            quantite : quantite +1,
            texte : item.texte
        }]
        return cart_save.concat(cart_new)
       }
        
         
    
    }
    ),
    on(SiteActions.deleteCart,(_state)=> {return []})
)



import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { item } from "../model/item.model";


  export const SiteActions =  createActionGroup({
    source : 'Cart',
    events : {
        'Add Cart': props<{item : item}>(),
        'Delete Cart': props<{id_item : number}>()
    }
  })
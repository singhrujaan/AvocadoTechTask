import { createSlice } from "@reduxjs/toolkit";



const TableSlice = createSlice({
    name:"tables",
    initialState:{
        table:[]
},
reducers: {
    addTable: (state,action) => {
      state.table = [...state.table,{id:action.payload.id,Name:action.payload.Name,Capacity:action.payload.Capacity,Layout:action.payload.Layout,Status:action.payload.Status}]
      console.log(action.payload.Status,"fromadd")
    },
    delTable: (state,action) => {
     state.table =state.table.filter((items,index)=>{
        if (index!==action.payload) 
        {return (items)} else{return null}
    })
    },
    updateTable: (state,action) => {
        const{id,updateName,updateCapacity} = action.payload
        console.log(id ,updateCapacity,"from updateslice")
        
        state.table.map((item,index)=>{
            console.log(item.id ,item.Name,"from eslice")
            if(item.id == id){
                item.Name= updateName
                item.Capacity=updateCapacity
            }
        })
        // const exist = state.table.find(item=>item.id===id)
        // if(exist){

        // }

    },
  },

    
})

export const { addTable,delTable,updateTable } = TableSlice.actions
export default TableSlice.reducer
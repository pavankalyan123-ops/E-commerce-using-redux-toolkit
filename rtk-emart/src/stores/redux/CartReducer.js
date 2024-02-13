import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartDetails:[],
    totalPrice:0,
}

const CartReducer=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
        addTocart:(state,action)=>{
            state.cartDetails.push(action.payload);
            let priceArray=state.cartDetails.map(obj=>+obj.price);
            state.totalPrice=priceArray.reduce((a,b)=>a+b);
        },
        deleteFromCart:(state,action)=>{
            let index=state.cartDetails.findIndex(obj=>obj.id===action.payload.id);
            if(index>-1)
            {
                state.cartDetails.splice(index,1);
                if(state.cartDetails.length===0)
                {
                    state.totalPrice=0;
                }else{
                    let priceArray=state.cartDetails.map(obj=>+obj.price);
            state.totalPrice=priceArray.reduce((a,b)=>a+b);
                }
            }else{
                alert("you have not added this product into your cart")
            }
        }
    }
})

export const{addTocart,deleteFromCart}=CartReducer.actions;
export default CartReducer.reducer;
import { AndroidArticle } from "./smartphones.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AndroidArr } from "../../api/AndroidArr";

export interface AnArticles {
    Anarticles: AndroidArticle[];
}

const initialState: AnArticles = {
    Anarticles: AndroidArr,
};

export const AndroidSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<AndroidArticle>) => {
            state.Anarticles.push(action.payload);
        }
    },
});
// also exported fetchUsers at the top

//export the reducer
export default AndroidSlice.reducer
import { IPhoneArticle } from "./smartphones.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoneArr } from "../../api/IPhoneArr";

export interface IPArticles {
    IParticles: IPhoneArticle[];
}

const initialState: IPArticles = {
    IParticles: IPhoneArr,
};

export const IPhoneSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<IPhoneArticle>) => {
            state.IParticles.push(action.payload);
        }
    },
});
// also exported fetchUsers at the top

//export the reducer
export default IPhoneSlice.reducer
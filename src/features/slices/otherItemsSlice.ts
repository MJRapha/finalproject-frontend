import { CarouselArticle } from "./smartphones.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarouselArr } from "../../api/OtherItemsArr";

export interface OIArticles {
    OIarticles: CarouselArticle[];
}

const initialState: OIArticles = {
    OIarticles: CarouselArr,
};

export const itemSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<CarouselArticle>) => {
            state.OIarticles.push(action.payload);
        }
    },
});
// also exported fetchUsers at the top

//export the reducer
export default itemSlice.reducer
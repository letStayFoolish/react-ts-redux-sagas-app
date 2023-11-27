import { type UserState } from "../../../types";

export const initialState: Array<UserState> = [];

// react-ts-redux-sagas-app/src/redux/slice/UsersSlice/constants.ts
// я вижу как ты записываешь данные просто в state - это не очень гибко,
// а если тебе придется расширять этот слайс? тогда во всех местах
// нужно будет менять перезапись в state, в таком случае сделай state.users

import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const jsonEditSliceName = "jsonEdit";

export interface JsonEditState {
  json: string;
  initialJson: string;
  fileName: string;
  isDirty: boolean;
}

export const initialState: JsonEditState = {
  json: "",
  initialJson: "",
  fileName: "",
  isDirty: false,
};

export const SET_JSON = "jsonEdit/setJson";
export const SET_INITIAL_JSON = "jsonEdit/setInitialJson";
export const SET_FILE_NAME = "jsonEdit/setFileName";
export const SET_IS_DIRTY = "jsonEdit/setIsDirty";
export const RESET = "jsonEdit/reset";
export const CLEAR = "jsonEdit/clear";

export const jsonEditSlice: Slice<any, SliceCaseReducers<any>, string> = createSlice({
  name: jsonEditSliceName,
  initialState,
  reducers: {
    [SET_INITIAL_JSON]: (state: JsonEditState, action: {payload: string}) => {
      state.initialJson = action.payload;
    },
    [SET_JSON]: (state: JsonEditState, action: {payload: string}) => {
      state.json = action.payload;
    },
    [SET_FILE_NAME]: (state: JsonEditState, action: {payload: string}) => {
      state.fileName = action.payload;
    },
    [SET_IS_DIRTY]: (state: JsonEditState, action: {payload: boolean}) => {
      state.isDirty = action.payload;
    },
    [RESET]: (state: JsonEditState) => {
      state.json = state.initialJson;
      state.isDirty = false;
    },
    [CLEAR]: () => {
      return initialState;
    }
  },
});

export const setJson = jsonEditSlice.actions[SET_JSON];
export const setInitialJson = jsonEditSlice.actions[SET_INITIAL_JSON];
export const setFileName = jsonEditSlice.actions[SET_FILE_NAME];
export const setIsDirty = jsonEditSlice.actions[SET_IS_DIRTY];
export const clear = jsonEditSlice.actions[CLEAR];
export const resetJson = jsonEditSlice.actions[RESET];

export const useJsonEdit = ():JsonEditState => {
  return useSelector((state:any) => state[jsonEditSliceName]);
}
export const useJson = ():string => {
  return useSelector((state:any) => state[jsonEditSliceName].json);
}
export const useFileName = ():string => {
  return useSelector((state:any) => state[jsonEditSliceName].fileName);
}
export const useIsDirty = ():boolean => {
  return useSelector((state:any) => state[jsonEditSliceName].isDirty);
}

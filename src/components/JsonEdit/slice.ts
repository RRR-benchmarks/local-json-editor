import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const jsonEditSliceName = "jsonEdit";

export interface JsonEditState {
  json: string;
  fileName: string;
  isDirty: boolean;
}

export const initialState: JsonEditState = {
  json: "",
  fileName: "",
  isDirty: false,
};

export const SET_JSON = "jsonEdit/setJson";
export const SET_FILE_NAME = "jsonEdit/setFileName";
export const SET_IS_DIRTY = "jsonEdit/setIsDirty";
export const RESET = "jsonEdit/reset";

export const jsonEditSlice: Slice<any, SliceCaseReducers<any>, string> = createSlice({
  name: jsonEditSliceName,
  initialState,
  reducers: {
    [SET_JSON]: (state: JsonEditState, action: {payload: string}) => {
      state.json = action.payload;
    },
    [SET_FILE_NAME]: (state: JsonEditState, action: {payload: string}) => {
      state.fileName = action.payload;
    },
    [SET_IS_DIRTY]: (state: JsonEditState, action: {payload: boolean}) => {
      state.isDirty = action.payload;
    },
    [RESET]: () => {
      return initialState;
    }
  },
});

export const setJson = jsonEditSlice.actions[SET_JSON];
export const setFileName = jsonEditSlice.actions[SET_FILE_NAME];
export const setIsDirty = jsonEditSlice.actions[SET_IS_DIRTY];
export const reset = jsonEditSlice.actions[RESET];

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

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  bucketlist: [
    { text: "공부하기", completed: false },
    { text: "밥먹기", completed: false },
    { text: "잠자기", completed: false },
    { text: "운동하기", completed: false },
    { text: "술먹기", completed: false },
  ],
};

export const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addBucket: (state, action) => {
      state.bucketlist.push(action.payload);
      console.log(current(state.bucketlist));
    },
    deleteBucket: (state, action) => {
      const newBucketList = current(state.bucketlist).filter((item, index) => {
        return action.payload !== item["text"];
      });
      state.bucketlist = newBucketList;
    },
    updateBucket: (state, action) => {
      //   state.bucketlist.map((item, index) => {
      //     console.log(item);
      //   });
      const new_bucket_list = current(state.bucketlist).map((item, index) => {
        if (item["text"] === action.payload) {
          return { ...item, completed: true };
        } else {
          return item;
        }
      });
      return { bucketlist: new_bucket_list };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBucket, deleteBucket, updateBucket } = bucketSlice.actions;

export default bucketSlice.reducer;

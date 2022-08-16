// import third-party modules
import { configureStore } from "@reduxjs/toolkit";
// import local modules
import collapsedSlice from "./modules/collapsedSlice";

export default configureStore({
  reducer: {
    collapsed: collapsedSlice,
  },
});

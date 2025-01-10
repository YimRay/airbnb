import { configureStore } from "@reduxjs/toolkit"
import mainRecuder from "./modules/main"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"

const store = configureStore({
  reducer: {
    main: mainRecuder,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store

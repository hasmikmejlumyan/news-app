import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Store
import { AppDispatch, RootState } from "./configureStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
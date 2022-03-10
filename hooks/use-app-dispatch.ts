import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/configure-store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

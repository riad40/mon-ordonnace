import store from "../store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`

type AppDispatch = typeof store.dispatch

const useAppDispatch = () => useDispatch<AppDispatch>()

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getUserInfos, getClinicInfos, updateUserInfos, updateClinicInfos } from "../../../services/profileServices"
import { User, Clinic } from "../../../@types"

interface ProfileState {
    user: User
    clinic: Clinic
    loading: boolean
    error: string | null
}

const initialState: ProfileState = {
    user: {
        _id: "",
        fullName: "",
        email: "",
        password: "",
        avatar: "",
        speciality: "",
        dateOfBirth: "",
        inpe: "",
        phone: "",
    },
    clinic: {
        _id: "",
        name: "",
        address: "",
        phone: "",
        email: "",
        fax: "",
        owner: "",
        city: "",
    },
    loading: false,
    error: null,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        // getUserInfos
        [getUserInfos.pending.type]: state => {
            state.loading = true
        },
        [getUserInfos.fulfilled.type]: (state, action) => {
            state.user = action.payload
            state.loading = false
        },
        [getUserInfos.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
            state.loading = false
        },
        // getClinicInfos
        [getClinicInfos.pending.type]: state => {
            state.loading = true
        },
        [getClinicInfos.fulfilled.type]: (state, action) => {
            state.clinic = action.payload
            state.loading = false
        },
        [getClinicInfos.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
            state.loading = false
        },
        // updateUserInfos
        [updateUserInfos.pending.type]: state => {
            state.loading = true
        },
        [updateUserInfos.fulfilled.type]: (state, action) => {
            state.user = action.payload
            state.loading = false
        },
        [updateUserInfos.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
            state.loading = false
        },
        // updateClinicInfos
        [updateClinicInfos.pending.type]: state => {
            state.loading = true
        },
        [updateClinicInfos.fulfilled.type]: (state, action) => {
            state.clinic = action.payload
            state.loading = false
        },
        [updateClinicInfos.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
            state.loading = false
        },
    },
})

export { profileSlice }

export default profileSlice.reducer

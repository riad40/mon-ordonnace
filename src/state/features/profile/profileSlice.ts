import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getUserInfos, getClinicInfos, updateUserInfos, updateClinicInfos, updateUserAvatar } from "../../../services/profileServices"
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
    extraReducers: builder => {
        // get user infos
        builder.addCase(getUserInfos.pending, state => {
            state.loading = true
        })
        builder.addCase(getUserInfos.fulfilled, (state, { payload }: PayloadAction<User>) => {
            state.loading = false
            state.user = payload
        })
        builder.addCase(getUserInfos.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // get clinic infos
        builder.addCase(getClinicInfos.pending, state => {
            state.loading = true
        })
        builder.addCase(getClinicInfos.fulfilled, (state, { payload }: PayloadAction<Clinic>) => {
            state.loading = false
            state.clinic = payload
        })
        builder.addCase(getClinicInfos.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // update user infos
        builder.addCase(updateUserInfos.pending, state => {
            state.loading = true
        })
        builder.addCase(updateUserInfos.fulfilled, (state, { payload }: PayloadAction<User>) => {
            state.loading = false
            state.user = payload
        })
        builder.addCase(updateUserInfos.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // update clinic infos
        builder.addCase(updateClinicInfos.pending, state => {
            state.loading = true
        })
        builder.addCase(updateClinicInfos.fulfilled, (state, { payload }: PayloadAction<Clinic>) => {
            state.loading = false
            state.clinic = payload
        })
        builder.addCase(updateClinicInfos.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // update user avatar
        builder.addCase(updateUserAvatar.pending, state => {
            state.loading = true
        })
        builder.addCase(updateUserAvatar.fulfilled, (state, { payload }: PayloadAction<User>) => {
            state.loading = false
            state.user = payload
        })
        builder.addCase(updateUserAvatar.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
    },
})

export { profileSlice }

export default profileSlice.reducer

import { PermissionsAndroid } from "react-native"

const requestReadExternalStoragePermission = async () => {
    let isGranted: boolean = false

    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
            title: "Images Permission",
            message: "App needs access to your images " + "so you can select your profile picture.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
        })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the images")
            isGranted = true
        } else {
            console.log("Images permission denied")
            isGranted = false
        }
    } catch (err) {
        console.warn(err)
    }

    return isGranted
}

export default requestReadExternalStoragePermission

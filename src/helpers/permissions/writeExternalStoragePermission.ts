import { PermissionsAndroid } from "react-native"

const requestWriteExternalStoragePermission = async () => {
    let isGranted: boolean = false

    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
            title: "External Storage Permission",
            message: "App needs access to your external storage " + "so you can save your prescriptions.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
        })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the external storage")
            isGranted = true
        } else {
            console.log("External storage permission denied")
            isGranted = false
        }
    } catch (err) {
        console.warn(err)
    }

    return isGranted
}

export default requestWriteExternalStoragePermission

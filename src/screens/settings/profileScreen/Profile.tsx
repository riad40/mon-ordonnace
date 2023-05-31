import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native"
import { NavBar, TextButton, DetailsCard, ProfileIcon } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import profileStyles from "./profileStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { getUserInfos, getClinicInfos } from "../../../services/profileServices"
import { RootState } from "../../../state/store"
import API_URL from "../../../configs/API_URL"
import Modal from "react-native-modal"
import Ionicons from "react-native-vector-icons/Ionicons"
import requestAccessCameraPermission from "../../../helpers/permissions/cameraPermission"
import requestReadAccessImagesPermission from "../../../helpers/permissions/readExternalStoragePermission"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { updateUserAvatar } from "../../../services/profileServices"
import AwesomeAlert from "react-native-awesome-alerts"

const Profile = ({ navigation }: { navigation: SettingsStackNavProps<"Profile">["navigation"] }): JSX.Element => {
    const dispatch = useAppDispatch()

    const [show, setShow] = useState(false)

    const { user, clinic, loading } = useAppSelector((state: RootState) => state.profile)

    useEffect(() => {
        dispatch(getUserInfos())
        dispatch(getClinicInfos())
    }, [dispatch, show])

    const updateAvatar = (uri: string, type: string) => {
        const formData = new FormData()

        formData.append("avatar", {
            uri: uri,
            name: "avatar",
            type: type,
        })

        dispatch(updateUserAvatar(formData))

        setShow(false)
    }

    console.log(API_URL + user.avatar)

    const handleUploadImage = async () => {
        const imagesPermission = await requestReadAccessImagesPermission()

        if (imagesPermission) {
            const options: any = {
                mediaType: "photo",
                quality: 0.5,
                maxWidth: 500,
                maxHeight: 500,
                includeBase64: true,
            }

            launchImageLibrary(options, (response: any) => {
                if (response.didCancel) return

                if (response.error || response.errorMessage) {
                    console.log(response.error || response.errorMessage)
                    return
                }

                const uri = response.assets[0].uri
                const type = "image/" + response.assets[0].fileName.split(".")[1].toLowerCase() || "jpg"

                updateAvatar(uri, type)
            })
        }
    }

    const handleTakePicture = async () => {
        const cameraPermission = await requestAccessCameraPermission()

        if (!cameraPermission)
            return (
                <AwesomeAlert
                    show={true}
                    showProgress={false}
                    title="Permission refusée"
                    message="Vous devez autoriser l'accès à la caméra pour pouvoir prendre une photo"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="OK"
                    confirmButtonColor="#18B1D4"
                    onConfirmPressed={() => {
                        setShow(false)
                    }}
                />
            )

        const options: any = {
            mediaType: "photo",
            quality: 0.5,
            maxWidth: 500,
            maxHeight: 500,
            includeBase64: true,
        }

        launchCamera(options, (response: any) => {
            if (response.didCancel) {
                setShow(false)
                return
            }
            const uri = response.assets[0].uri
            const type = response.assets[0].type
            updateAvatar(uri, type)
        })
    }

    if (loading)
        return (
            <View>
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: hp("10%"),
                        fontSize: 20,
                    }}>
                    Loading...
                </Text>
            </View>
        )

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={profileStyles.container}>
                    {user?.avatar ? <Image source={{ uri: API_URL + user?.avatar }} style={profileStyles.image} /> : <ProfileIcon firstName={user?.fullName.split(" ")[0] || "No"} lastName={user?.fullName.split(" ")[1] || "Name"} />}
                    <TextButton
                        text="Changer photo de profile"
                        onPress={() => {
                            setShow(!show)
                        }}
                    />
                    {/* modal */}
                    <Modal isVisible={show} onBackdropPress={() => setShow(false)} style={profileStyles.modal}>
                        <View style={profileStyles.modalContainer}>
                            {/* uplad from device */}
                            <TouchableOpacity style={profileStyles.modalButton} onPress={handleUploadImage}>
                                <Ionicons name="image-outline" size={30} color="#18B1D4" />
                            </TouchableOpacity>
                            {/* take a picture */}
                            <TouchableOpacity style={profileStyles.modalButton} onPress={handleTakePicture}>
                                <Ionicons name="camera-outline" size={30} color="#18B1D4" />
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                {/* General Infos */}
                <DetailsCard
                    heading="Informations générales"
                    edit={true}
                    details={[
                        {
                            title: "Nom du Compte",
                            value: user?.fullName,
                        },
                        {
                            title: "Spécialité",
                            value: user?.speciality,
                        },
                        {
                            title: "Email",
                            value: user?.email,
                        },
                        {
                            title: "Téléphone",
                            value: user?.phone,
                        },
                        {
                            title: "Date de naissance",
                            value: user?.dateOfBirth,
                        },
                        {
                            title: "INPE",
                            value: user?.inpe,
                        },
                    ]}
                    onPress={() => navigation.navigate("EditProfile", { user })}
                />
                {/* Cabinet */}
                <DetailsCard
                    heading="Cabinet"
                    edit={true}
                    details={[
                        {
                            title: "Nom",
                            value: clinic?.name,
                        },
                        {
                            title: "Email du cabinet",
                            value: clinic?.email,
                        },
                        {
                            title: "Adresse",
                            value: clinic?.address,
                        },
                        {
                            title: "Ville",
                            value: clinic?.city,
                        },
                        {
                            title: "Téléphone",
                            value: clinic?.phone,
                        },
                        {
                            title: "Fax",
                            value: clinic?.fax,
                        },
                    ]}
                    onPress={() => navigation.navigate("EditClinic", { clinic })}
                />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

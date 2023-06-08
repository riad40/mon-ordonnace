import { View, Image, ScrollView, SafeAreaView, Alert, TouchableOpacity, Text } from "react-native"
import { NavBar, TextButton, DetailsCard, ProfileIcon, Loading } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import profileStyles from "./profileStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useState, useEffect } from "react"
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

const Profile = ({ navigation }: { navigation: SettingsStackNavProps<"Profile">["navigation"] }): JSX.Element => {
    const dispatch = useAppDispatch()

    const [show, setShow] = useState(false)

    const { user, clinic, error } = useAppSelector((state: RootState) => state.profile)

    useEffect(() => {
        navigation.addListener("focus", () => {
            dispatch(getUserInfos())
            dispatch(getClinicInfos())
        })
    }, [navigation, dispatch, user])

    const updateAvatar = (uri: string, type: string) => {
        const formData = new FormData()

        formData.append("avatar", {
            uri: uri,
            name: "avatar",
            type: type,
        })

        dispatch(updateUserAvatar(formData))

        if (error)
            return Alert.alert("Erreur", "Une erreur est survenue lors de la mise à jour de votre photo de profile")

        setShow(false)
    }

    const handleUploadImage = async () => {
        const imagesPermission = await requestReadAccessImagesPermission()

        if (!imagesPermission) {
            const permission = await requestReadAccessImagesPermission()

            if (!permission) return setShow(false)
        }

        const options: any = {
            mediaType: "photo",
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200,
            includeBase64: true,
        }

        const response: any = await launchImageLibrary(options)

        if (response.didCancel) return setShow(false)

        if (response.errorMessage)
            return Alert.alert("Erreur", "Une erreur est survenue lors de la récupération de votre photo")

        const uri = response.assets[0].uri

        const type = response.assets[0].type

        updateAvatar(uri, type)
    }

    const handleTakePicture = async () => {
        const cameraPermission = await requestAccessCameraPermission()

        if (!cameraPermission) {
            const permission = await requestAccessCameraPermission()

            if (!permission) return setShow(false)
        }

        const options: any = {
            mediaType: "photo",
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200,
            includeBase64: true,
        }

        const response: any = await launchCamera(options)

        if (response.didCancel) return setShow(false)

        if (response.errorMessage) return Alert.alert("Erreur", "Une erreur est survenue lors de la prise de photo")

        const uri = response.assets[0].uri

        const type = response.assets[0].type

        updateAvatar(uri, type)
    }

    if (!user || !clinic) return <Loading />

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={profileStyles.container}>
                    {/* Profile Picture */}
                    {user?.avatar ? (
                        <Image
                            source={{
                                uri: API_URL + user?.avatar,
                                cache: "reload",
                                headers: { Pragma: "no-cache" },
                            }}
                            style={profileStyles.image}
                        />
                    ) : (
                        <ProfileIcon
                            firstName={user?.fullName.split(" ")[0] || "No"}
                            lastName={user?.fullName.split(" ")[1] || "Name"}
                            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                        />
                    )}

                    {/* change profile picture */}
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

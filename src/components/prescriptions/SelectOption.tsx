import { useState } from "react"
import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { PatientOption } from ".."

const SelectOption = ({
    initialValue,
    data,
    noImg,
}: {
    initialValue: string
    data?: { name: string }[]
    noImg: boolean
}): JSX.Element => {
    const [show, setShow] = useState<boolean>(false)

    const [value, setValue] = useState<{ name: string }>({ name: initialValue })

    const onSelect = (item: { name: string }) => {
        setValue(item)
        setShow(false)
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => setShow(!show)}>
                <PatientOption patietName={value.name} style={{ borderBottomWidth: 0 }} noImg={noImg} />
                <Ionicons name="chevron-down-outline" size={20} color="#DBDBDB" />
            </TouchableOpacity>
            {show && (
                <ScrollView nestedScrollEnabled={true} style={styles.options}>
                    {data?.map(item => (
                        <TouchableOpacity
                            onPress={() => {
                                onSelect(item)
                                setShow(false)
                            }}>
                            <PatientOption patietName={item.name} noImg={noImg} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 75,
        zIndex: 1,
    },
    options: {
        backgroundColor: "#FFFFFF",
        borderColor: "#C6C6C6",
        borderWidth: 1,
        borderRadius: 10,
        height: 150,
    },
})

export default SelectOption

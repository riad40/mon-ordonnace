import { useState } from "react"
import { TouchableOpacity, View, ScrollView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { PatientOption } from "../../.."
import selectOptionStyles from "./selectOptionStyles"

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
            <TouchableOpacity style={selectOptionStyles.button} onPress={() => setShow(!show)}>
                <PatientOption patietName={value.name} style={{ borderBottomWidth: 0 }} noImg={noImg} />
                <Ionicons name="chevron-down-outline" size={20} color="#DBDBDB" />
            </TouchableOpacity>
            {show && (
                <ScrollView nestedScrollEnabled={true} style={selectOptionStyles.options}>
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

export default SelectOption

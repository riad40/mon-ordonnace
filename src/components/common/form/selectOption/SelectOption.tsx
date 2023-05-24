import { useState } from "react"
import { TouchableOpacity, View, ScrollView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Option, SearchInput } from "../../../"
import selectOptionStyles from "./selectOptionStyles"
import Modal from "react-native-modal"
import Ionicos from "react-native-vector-icons/Ionicons"

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
                <Option patietName={value.name} style={{ borderBottomWidth: 0 }} noImg={noImg} />
                <Ionicons name="chevron-down-outline" size={20} color="#DBDBDB" />
            </TouchableOpacity>
            {show && (
                <Modal
                    isVisible={show}
                    onBackdropPress={() => setShow(false)}
                    onBackButtonPress={() => setShow(false)}
                    style={selectOptionStyles.modal}>
                    <View style={selectOptionStyles.modalContainer}>
                        <TouchableOpacity onPress={() => setShow(false)} style={selectOptionStyles.closeModal}>
                            <Ionicos name="chevron-down-circle-outline" size={30} color="#000" />
                        </TouchableOpacity>

                        <SearchInput placeholder="Rechercher" />
                        <ScrollView>
                            {data?.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => onSelect(item)}>
                                    <Option patietName={item.name} noImg={noImg} />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </Modal>
            )}
        </View>
    )
}

export default SelectOption

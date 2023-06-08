import { SelectOption, CustomContainer, CustomTextInput } from "../../../components"
import { Option } from "../../../@types"
import customContainerStyles from "../../common/form/customContainer/customContainerStyles"
import { Text, View } from "react-native"

const ProductInputs = ({
    onSelectedProduct,
    onDosageChange,
    onDurationChange,
    onlyProductsNames,
    dosage,
    duration,
    errors,
    index,
}: {
    onSelectedProduct?: (product: Option, index: number) => void
    onDosageChange?: (dosage: string, index: number) => void
    onDurationChange?: (duration: string, index: number) => void
    onlyProductsNames: Option[]
    dosage?: string
    duration?: string
    errors?: any
    index: number
}): JSX.Element => {
    return (
        <>
            {/* Select product */}
            <CustomContainer
                label="Produit"
                element={
                    <SelectOption
                        data={onlyProductsNames}
                        initialValue={onlyProductsNames && onlyProductsNames[0]}
                        onSelect={(item: Option) => onSelectedProduct && onSelectedProduct(item, index)}
                    />
                }
            />

            {/* Select dosage */}
            <View
                style={[
                    customContainerStyles.container,
                    {
                        borderColor: errors && errors.duration ? "#FF0000" : "#C6C6C6",
                    },
                ]}>
                <View style={customContainerStyles.labelContainer}>
                    <Text style={customContainerStyles.label}>Posologie</Text>
                </View>
                <CustomTextInput
                    placeholder="Posologie"
                    onChangeText={text => onDosageChange && onDosageChange(text, index)}
                />
                {errors && errors.dosage ? (
                    <View style={customContainerStyles.errorContainer}>
                        <Text style={customContainerStyles.errorText}>{errors.dosage}</Text>
                    </View>
                ) : null}
            </View>

            {/* Enter duration */}
            <View
                style={[
                    customContainerStyles.container,
                    {
                        borderColor: errors && errors.duration ? "#FF0000" : "#C6C6C6",
                    },
                ]}>
                <View style={customContainerStyles.labelContainer}>
                    <Text style={customContainerStyles.label}>Duration</Text>
                </View>

                <CustomTextInput
                    placeholder="Durée du traitement"
                    onChangeText={text => onDurationChange && onDurationChange(text, index)}
                />
                {errors && errors.duration ? (
                    <View style={customContainerStyles.errorContainer}>
                        <Text style={customContainerStyles.errorText}>{errors.duration}</Text>
                    </View>
                ) : null}
            </View>
        </>
    )
}

export default ProductInputs

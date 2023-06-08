import { SelectOption, CustomContainer, CustomTextInput } from "../../../components"
import { Option } from "../../../@types"
import { Text } from "react-native"

const ProductInputs = ({
    onSelectedProduct,
    onDosageChange,
    onDurationChange,
    onlyProductsNames,
    dosage,
    duration,
    isValid,
    index,
}: {
    onSelectedProduct?: (product: Option, index: number) => void
    onDosageChange?: (dosage: string, index: number) => void
    onDurationChange?: (duration: string, index: number) => void
    onlyProductsNames: Option[]
    dosage?: string
    duration?: string
    isValid?: { dosage?: string; duration?: string }
    index: number
    errors?: any
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
            <CustomContainer
                label="Posologie"
                validText={isValid?.dosage}
                element={
                    <CustomTextInput
                        placeholder="Posologie"
                        onChangeText={text => onDosageChange && onDosageChange(text, index)}
                    />
                }
            />

            {/* Enter duration */}
            <CustomContainer
                label="Durée du traitement"
                validText={isValid?.duration}
                element={
                    <CustomTextInput
                        placeholder="Durée du traitement"
                        onChangeText={text => onDurationChange && onDurationChange(text, index)}
                    />
                }
            />
        </>
    )
}

export default ProductInputs

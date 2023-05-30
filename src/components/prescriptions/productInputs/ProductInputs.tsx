import { SelectOption, CustomContainer, CustomTextInput } from "../../../components"
import { Option } from "../../../@types"

const ProductInputs = ({ onSelectedProduct, onDosageChange, onDurationChange, onlyProductsNames, dosage, duration }: { onSelectedProduct?: (product: Option) => void; onDosageChange?: (dosage: string) => void; onDurationChange?: (duration: string) => void; onlyProductsNames: Option[]; dosage?: string; duration?: string }): JSX.Element => {
    return (
        <>
            {/* Select product */}
            <CustomContainer label="Produit" element={<SelectOption data={onlyProductsNames} initialValue={onlyProductsNames && onlyProductsNames[0]} onSelect={(item: Option) => onSelectedProduct && onSelectedProduct(item)} />} />

            {/* Select dosage */}
            <CustomContainer label="Posologie" element={<CustomTextInput placeholder="Posologie" onChangeText={text => onDosageChange && onDosageChange(text)} value={dosage} />} />

            {/* Enter duration */}
            <CustomContainer label="Durée du traitement" element={<CustomTextInput placeholder="Durée du traitement" onChangeText={text => onDurationChange && onDurationChange(text)} value={duration} />} />
        </>
    )
}

export default ProductInputs

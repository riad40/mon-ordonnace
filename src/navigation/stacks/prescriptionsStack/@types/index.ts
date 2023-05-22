import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

/** ========================  PRESCREPTIONS STACK TYPES  ======================== */

export type PrescriptionsStackParamsList = {
    PrescriptionsList: undefined
    AddPrescription: undefined
    PrescriptionDetails: { prescriptionId: number | string }
}

export type PrescreptionsStackNavProps<T extends keyof PrescriptionsStackParamsList> = {
    navigation: StackNavigationProp<PrescriptionsStackParamsList, T>
    route: RouteProp<PrescriptionsStackParamsList, T>
}

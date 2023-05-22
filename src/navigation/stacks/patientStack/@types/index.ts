import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

/** ========================  PATIENT STACK TYPES  ======================== */

export type PatientStackParamsList = {
    PatientsList: undefined
    PatientDetails: { patientId: number | string }
}

export type PatientStackNavProps<T extends keyof PatientStackParamsList> = {
    navigation: StackNavigationProp<PatientStackParamsList, T>
    route: RouteProp<PatientStackParamsList, T>
}

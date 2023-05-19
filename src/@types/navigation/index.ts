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

/** ========================  PRODUCTS STACK TYPES  ======================== */

export type ProductsStackParamsList = {
    ProductsList: undefined
    ProductDetails: { productId: number | string }
}

export type ProductsStackNavProps<T extends keyof ProductsStackParamsList> = {
    navigation: StackNavigationProp<ProductsStackParamsList, T>
    route: RouteProp<ProductsStackParamsList, T>
}

/** ========================  SETTINGS STACK TYPES  ======================== */

export type SettingsStackParamsList = {
    SettingsList: undefined
    Profile: undefined
    EditProfile: undefined
    EditClinic: undefined
}

export type SettingsStackNavProps<T extends keyof SettingsStackParamsList> = {
    navigation: StackNavigationProp<SettingsStackParamsList, T>
    route: RouteProp<SettingsStackParamsList, T>
}

/** ========================  BOTTOM TABS TYPES  ======================== */

export type BottomTabsParamsList = {
    Dashboard: undefined
    Patients: undefined
    Prescriptions: undefined
    Products: undefined
    Settings: undefined
}

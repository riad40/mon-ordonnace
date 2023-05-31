type Product = {
    _id: string
    name: string
    dci: string
    classTherapeutic: string
    laboratory: string
    avatar: string
    dosage: {
        ageGroup: string
        instructions: string
    }[]
}

type Prescription = {
    _id: string
    id: number
    patient: string
    products: {
        name: string
        dosage: string
        duration: string
    }[]
    status: PrescriptionStatus
    createdAt: string
    avatar: string
}

type PrescriptionStatus = "Brouillon" | "Enregistrée"

type Patient = {
    _id: string
    firstName: string
    lastName: string
    cin: string
    phoneNumber: string
    dateOfBirth: string
    avatar: string
    prescriptions: string[]
    createdAt: string
}

/** ============================  Option type ============================ */

type Option = {
    name: string
    avatar: string | null
}

/** ============================  User && Clinic types ============================ */

type User = {
    _id: string
    fullName: string
    email: string
    password: string
    avatar: string
    speciality: string
    dateOfBirth: string
    inpe: string
    phone: string
}

type Clinic = {
    _id: string
    name: string
    address: string
    city: string
    phone: string
    email: string
    fax: string
    owner: string
}

export type { Product, Prescription, Patient, Option, User, Clinic }

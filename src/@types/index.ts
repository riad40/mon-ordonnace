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
    prescriptionId: number | string
    patientName: string
    date: string
    status: PrescriptionStatus
    image: string
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

export type { Product, Prescription, Patient }

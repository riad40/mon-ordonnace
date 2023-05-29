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
    patientId: number | string
    name: string
    age: number
    image: string
}

export type { Product, Prescription, Patient }

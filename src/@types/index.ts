type Product = {
    productId: number
    name: string
    type: string
    therapeuticClass: string
    image: string
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

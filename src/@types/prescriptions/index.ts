type Prescription = {
    prescriptionId: number | string
    patientName: string
    date: string
    status: PrescriptionStatus
    image: string
}

type PrescriptionStatus = "Brouillon" | "Enregistrée"

export type { Prescription }

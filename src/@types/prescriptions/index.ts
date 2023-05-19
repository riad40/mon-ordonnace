type Prescription = {
    prescriptionId: number | string
    patientName: string
    date: string
    status: PrescriptionStatus
}

type PrescriptionStatus = "Brouillon" | "Enregistrée"

export type { Prescription }

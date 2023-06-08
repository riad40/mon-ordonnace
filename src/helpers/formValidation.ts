class FormValidation {
    public static emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    public static editProfileValidation(
        fullName: string,
        specialty: string,
        phoneNumber: string,
        email: string,
        dateOfBirth: string,
        inpe: string,
    ) {
        let errors: any = {}

        const dateOfBirthRegex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/

        if (fullName.trim().length < 5) {
            errors.fullName = "Nom du compte doit avoir au moins 5 caractères"
        }

        if (specialty.trim().length < 5) {
            errors.specialty = "Spécialité doit avoir au moins 5 caractères"
        }

        if (phoneNumber.trim().length < 10) {
            errors.phoneNumber = "Numéro de téléphone doit avoir au moins 5 caractères"
        }

        if (email.trim().length < 10 || !this.emailRegex.test(email.trim())) {
            errors.email = "Email fourni est invalide"
        }

        if (dateOfBirth.trim().length < 10 || !dateOfBirthRegex.test(dateOfBirth)) {
            errors.dateOfBirth = "Date de naissance fournie est invalide"
        }

        if (inpe.trim().length < 5) {
            errors.inpe = "Numéro INPE doit avoir au moins 5 caractères"
        }

        return errors
    }

    public static editClinicValidation(
        clinicName: string,
        clinicEmail: string,
        clinicAddress: string,
        clinicPhoneNumber: string,
        clinicFax: string,
    ) {
        let errors: any = {}

        const clinicAddressRegex = /^[a-zA-Z0-9\s,'-]*$/

        if (clinicName.trim().length < 5) {
            errors.clinicName = "Nom du cabinet doit avoir au moins 5 caractères"
        }

        if (clinicEmail.trim().length < 10 || !this.emailRegex.test(clinicEmail.trim())) {
            errors.clinicEmail = "Email fourni est invalide"
        }

        if (clinicAddress.trim().length < 10 || !clinicAddressRegex.test(clinicAddress)) {
            errors.clinicAddress = "Adresse fournie est invalide"
        }

        if (clinicPhoneNumber.trim().length < 10) {
            errors.clinicPhoneNumber = "Numéro de téléphone doit avoir au moins 10 caractères"
        }

        if (clinicFax.trim().length < 10) {
            errors.clinicFax = "Numéro de fax doit avoir au moins 10 caractères"
        }

        return errors
    }

    public static addNewProduct = (dosage: string, duration: string) => {
        let errors: any = {}

        if (dosage?.trim().length < 5) {
            errors.dosage = "Dosage doit avoir au moins 5 caractères"
        }

        if (duration?.trim().length < 5) {
            errors.duration = "Durée doit avoir au moins 5 caractères"
        }

        return errors
    }

    public static objectIsEmpty = (obj: any) => {
        return Object.values(obj).some((element: any) => element === "")
    }
}

export default FormValidation

const calculateAge = (dateString: string): number => {
    if (!dateString) return 0

    const [day, month, year] = dateString.split("-").map(Number)
    const today = new Date()
    const birthDate = new Date(year, month - 1, day)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age
}

export default calculateAge

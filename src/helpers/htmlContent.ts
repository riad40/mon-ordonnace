import { Prescription } from "../@types"

const htmlContent = (prescription: Prescription) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                /* CSS styles for the container */
                .container {
                    margin: 20px;
                }
                
                /* CSS styles for the patient name wrapper */
                .patient-name-wrapper {
                    margin-bottom: 10px;
                }
                
                /* CSS styles for the patient name bold text */
                .patient-name-bold {
                    font-weight: bold;
                }
                
                /* CSS styles for the patient name */
                .patient-name {
                    margin-left: 5px;
                }
                
                /* CSS styles for the product wrapper */
                .product-wrapper {
                    margin-top: 10px;
                }
                
                /* CSS styles for the product title */
                .product-title {
                    font-weight: bold;
                }
                
                /* CSS styles for the products dosages wrapper */
                .products-dosages-wrapper {
                    margin-top: 5px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                
                /* CSS styles for the products dosages date range */
                .products-dosages-date-range {
                    margin-right: 10px;
                }
                
                /* CSS styles for the products dosages dosage */
                .products-dosages-dosage {
                    font-style: italic;
                }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="patient-name-wrapper">
                        <span class="patient-name-bold">Nom du patient :</span>
                        <span class="patient-name">${prescription?.patient}</span>
                    </div>
    
                    ${prescription?.products
                        .map(
                            (product, index) => `
                        <div class="product-wrapper">
                            <span class="product-title">${product.name}</span>
                            <div class="products-dosages-wrapper">
                                <span class="products-dosages-date-range">Prendre pendant ${product.duration.split(" ")[0]} jours</span>
                                <span class="products-dosages-dosage">${product.dosage}</span>
                            </div>
                        </div>`,
                        )
                        .join("")}
                </div>
            </body>
        </html>
    `
}

export default htmlContent

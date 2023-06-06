import { Prescription } from "../@types"

const htmlContent = (prescription: Prescription) => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Prescription Details</title>
    
            <style>
                @import url("https://fonts.googleapis.com/css2?&family=Roboto:wght@100;300;400;500;700;900&display=swap");
                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    width: 100vw;
                    background-color: #f5f5f5;
                }
                * {
                    margin: 0;
                    padding: 0;
                    font-family: "Roboto", sans-serif;
                }
                .container-details {
                    width: 350px;
                    padding: 20px 0;
                    background-color: white;
                    border-radius: 5px;
                }
                .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .title-wrapper {
                    width: 30%;
                    padding: 10px;
                    background-color: #18b1d4;
                }
                .title {
                    font-size: medium;
                    font-weight: bold;
                    text-transform: uppercase;
                    color: white;
                }
                .date-wrapper {
                    width: 70%;
                    padding: 10px;
                    background-color: lightblue;
                    text-align: end;
                }
                .date {
                    font-size: medium;
                    font-weight: bold;
                    color: #616161;
                }
                .patient-name-wrapper {
                    padding: 20px;
                }
                .patient-name-bold {
                    font-weight: bold;
                    color: #858585;
                }
                .patient-name {
                    color: #858585;
                }
                .products-wrapper {
                    margin-bottom: 20px;
                    padding: 10px 20px;
                }
                .product-title {
                    color: #858585;
                    text-transform: uppercase;
                    font-weight: bold;
                }
                .product-details {
                    display: flex;
                    flex-direction: column;
                    padding: 10px 20px;
                    color: #858585;
                }
                .product-dosage-date-range {
                    padding: 5px 0;
                }
            </style>
        </head>
    
        <body>
            <div class="container-details">
                <div class="container">
                    <div class="title-wrapper">
                        <h2 class="title">Ordonnance</h2>
                    </div>
                    <div class="date-wrapper">
                        <span class="date">Le ${prescription?.createdAt?.split("T")[0].split("-").reverse().join("/")}</span>
                    </div>
                </div>
                <div class="patient-name-wrapper">
                    <span class="patient-name-bold">Nom du patient :</span>
                    <span class="patient-name">${prescription?.patient}</span>
                </div>
                ${prescription?.products
                    .map(
                        (product, index) => `
                <div class="products-wrapper">
                    <div class="product">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-details">
                            <span class="product-dosage-date-range"
                                >Prendre pendant ${product.duration.split(" ")[0]}
                                jours</span
                            >
                            <span class="product-dosage">${product.dosage}</span>
                        </div>
                    </div>
                </div>
                `,
                    )
                    .join("")}
            </div>
        </body>
    </html>
    
    `
}

export default htmlContent

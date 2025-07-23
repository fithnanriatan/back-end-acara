import { Express } from "express"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger_output.json"

export default function docs(app: Express) {

    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument, {
            customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui.min.css"
        })
    );

}
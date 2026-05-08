import app from "./src/app.js";
import config from "./src/configs/config.js";

app.listen(config.PORT,() => {
    console.log(`Server is up and running on PORT:${config.PORT}`)
})
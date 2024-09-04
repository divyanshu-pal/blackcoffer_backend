// importing DB connection file
import "./config/database.js";
import app from "./config/app.js";
import "dotenv/config";
import { getAllData, countLikelihood, countRelevance, countIntensity, countPublished,countCountry,countTopic,countRegion } from "./controllers/data.controller.js";

const PORT = process.env.PORT || 9002;


app.get("/", (req, res) => {
    res.send("index.js");
});

app.get("/allData", getAllData);

app.get("/counts/likelihood", countLikelihood);
app.get("/counts/relevance", countRelevance);
app.get("/counts/intensity", countIntensity);
app.get("/counts/published", countPublished);
app.get("/counts/country", countCountry);
app.get("/counts/topic", countTopic);
app.get("/counts/region", countRegion);
// app.get("/counts/city", countCity);

app.listen(PORT, () => {
    console.log("We are running on port 9002");
});

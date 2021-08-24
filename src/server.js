import express from "express";
import cors from "cors";
import services from "./services/index.js";
import createDefaultTables from "./scripts/create-tables.js";

const app = express();

app.use(express.json());

app.use(cors());

const { PORT } = process.env;

app.use("/", services);

app.listen(PORT, async () => {
	await createDefaultTables();
	console.log(`✅ Server is running on port  ${PORT}`);
});
app.on("error", (error) => console.log(`❌ Server is failed  :  ${error}`));

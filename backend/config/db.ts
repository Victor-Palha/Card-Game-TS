import mongoose from "mongoose"
import config from "config"

async function connect() {
    const url = config.get<string>("dbURL")
    try {
        await mongoose.connect(url)
        console.log("Connected to API Card's!!")
    } catch (err) {
        throw new Error("Failed to connect to database... Try later!")
    }
}

export default connect
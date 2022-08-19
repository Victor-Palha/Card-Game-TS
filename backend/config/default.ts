const db_name = process.env.DB_NAME
const db_pass = process.env.DB_PASS
export default{
    dbURL: `mongodb+srv://${db_name}:${db_pass}@cards.aqmldj5.mongodb.net/?retryWrites=true&w=majority`
}
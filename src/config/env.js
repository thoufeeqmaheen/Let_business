require("dotenv").config();

const PORT = process.env.PORT || 5000;
const API_ROUTER = process.env.API_ROUTER || "/api/v1";
const CONNECTION_STRING = process.env.CONNECTION_STRING;

module.exports ={
    PORT,
    API_ROUTER,
    CONNECTION_STRING
};
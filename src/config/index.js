require("dotenv").config();


const config = {
    port : process.env.PORT || 5000,

    mongodb:{
        uri:process.env.MONGO_URI,
    },

    api:{
        prefix:"/api",
        version:"v1"
    },

    cors:{
        origin:process.env.CORS_ORIGIN || "*",
        credentials:true
    }
}

module.exports = config;
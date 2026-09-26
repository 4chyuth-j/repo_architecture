const app = require('./app.js');
const config = require('./config/index.js');
const DatabaseConfig = require('./config/database.js');


const startServer = async ()=>{
    try {
        await DatabaseConfig.connect();
        app.listen(config.port,()=>{
            console.log(`Server started at http://localhost:${config.port}`)
        })
        
    } catch (error) {
        console.error('failed to start server:',error);
        process.exit(1);
    }
}

startServer();
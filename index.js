import app from './server.js';
import mongodb from 'mongodb'; // hogy hozzáférjünk az adatbázishoz
import dotenv from 'dotenv'; // hogy hozzáférjünk a környezeti változóinkhoz

export async function main() {
    
    dotenv.config(); // ezzel töltjük be a környezeti változókat

    // példányosítjuk a clienst az adott url-en
    const client = new mongodb.MongoClient(
        process.env.MOVIEREVIEWS_DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true}
    )

    const port = process.env.PORT || 8000; // ha nem férünk hozzá a létrehozott porthoz, akkor a 8000-esen fusson
        
    // a nem várt errorok kezelésére használjuk a try-catch blockot
    try {
        // Connect MongoDB Cluster
        await client.connect();// egy promissal tér vissza megvárja amígy az előtte lévő feladatok befejeződnek
        // elindítjuk a servert a megadott porton
        app.listen( port, () => {
            console.log(`Server is running on port: ${port}`);
        })
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main().catch(console.error);

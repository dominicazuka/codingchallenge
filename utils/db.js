import mongoose from 'mongoose';
let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected){
        console.log('mongodb already connected')
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "codingchallenge",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log('Mongodb Connected')
    }catch(error){   
        console.log(error)
    }
}
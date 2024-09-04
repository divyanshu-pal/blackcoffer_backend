import mongoose from 'mongoose'
import "dotenv/config";
// Local database connection
// MONGO_URL=""
// mongoose.connect('mongodb://0.0.0.0:27017/BlackCoffer', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect(`mongodb+srv://divyanshupal249:divyanshu12345@cluster0.idsbs.mongodb.net/BlackCofferAss?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

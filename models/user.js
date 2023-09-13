import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Is Required']
    },
    sector: {
        type: String,
        required: [true, 'Sector Is Required']
    },
    terms: {
        type: Boolean,
        default: false,
        required: [true, 'Term Is Required']
    }
});

const User = models.User || model("User", UserSchema);
export default User;
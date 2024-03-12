import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        fullName: {
            firstName: {
                type: String,
                required: true,
                trim: true,
            },
            middleName:{
                type: String,
                trim: true,
                default: null,
            },
            lastName: {
                type: String,
                required: true,
                trim: true,
            }
        },
        avatar: {
            type: String, // cloudinary URL
            required: true,
        },
        likedBooks: [
            {
                type: Schema.Types.ObjectId, // to reference an object
                ref: "Book"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String,

        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)
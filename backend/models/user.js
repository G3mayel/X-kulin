import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {   type: String,
        required: [true, 'User name is required'],
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        minlength: 5,
        maxlength: 255,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
    },
    kelas: {
        type: String,
        required: [true, 'Kelas is required'],
        trim: true,
        minlength: 1,
        maxlength: 50,
    },
    jurusan: {
        type: String,
        required: [true, 'Jurusan is required'],
        enum: ['RPL', 'DGM', 'MESIN', 'TITL'],
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ['pending', 'approve', 'reject'],
        default: 'active',
    },
    role: {
        type: String,
        enum: ['siswa', 'guru', 'admin'],
        default: 'siswa',
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minlength: 6,
        maxlength: 1024,
    },
}, );



const User = mongoose.model('User', userSchema);
export default User;
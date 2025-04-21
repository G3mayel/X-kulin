// untuk notifikasi
import mongoose from 'mongoose';

const notifikasiSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tipe: {
        type: String,
        enum: ['nilai', 'absensi'],
        required: true,
    },
    pesan: {
        type: String,
        required: true,
    },
    dibaca: {
        type: Boolean,
        default: false,
    },
    tanggal_kirim: {
        type: Date,
        default: Date.now,
    },
});

const Notifikasi = mongoose.model('Notifikasi', notifikasiSchema);
export default Notifikasi;

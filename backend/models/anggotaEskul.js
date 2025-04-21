// untuk melihat anggota ekskul yang bergabung
import mongoose from 'mongoose';

const anggotaEkskulSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ekskulId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ekskul',
        required: true,
    },
    joinedAt: {
        type: Date,
        default: Date.now,
    },
});

const AnggotaEkskul = mongoose.model('AnggotaEkskul', anggotaEkskulSchema);
export default AnggotaEkskul;

// untuk absen kegiatan ekskul
import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
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
    tanggal: {
        type: Date,
        required: true,
    },
    waktuMasuk: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ['hadir', 'izin', 'alpa'],
        required: true,
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;

// untuk melihat jadwal ekskul
import mongoose from 'mongoose';

const ekskulSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    trim: true,
  },
  pembinaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  hari: {
    type: String,
    required: true,
  },
  jamMulai: {
    type: String,
    required: true,
  },
  jamSelesai: {
    type: String,
    required: true,
  },
}, {
  timestamps: { createdAt: true, updatedAt: false }
});

const Ekskul = mongoose.model('Ekskul', ekskulSchema);
export default Ekskul;

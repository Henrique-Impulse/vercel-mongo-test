import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Por favor, forneça uma mensagem'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  metadata: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Log || mongoose.model('Log', LogSchema); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    sender: { type: 'string', required: true },
    receiver: { type: 'string', required: true },
    messsage: { type: 'string', required: true },
  },
  { timestamps: true }
);
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;

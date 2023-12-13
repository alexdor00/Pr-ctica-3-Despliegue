import mongoose from 'mongoose';

const nameSchema = new mongoose.Schema({
    name: String
});

const Name = mongoose.model('Name', nameSchema);

export { Name };

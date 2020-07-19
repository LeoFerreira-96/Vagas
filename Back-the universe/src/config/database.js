import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export default mongoose.connect('mongodb+srv://theuniverse:123mudar@cluster0.urxyk.mongodb.net/theuniverse?retryWrites=true&w=majority', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})


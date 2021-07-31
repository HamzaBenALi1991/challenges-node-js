const mongoose = require('mongoose');
const { Schema } = mongoose;

const todosSchema = new Schema({
  title:  {type:String, default :'hello', required : true} , // String is shorthand for {type: String}
  description: String,
},{
    versionKey: false,// for deactivating __v on mongoDB,
    timestamps: true // time of update and time of creation(createAt, updatedAt) 
});

// create the Todo model 
const Todo = mongoose.model('todos', todosSchema);

// export model to use it in an other place
module.exports = Todo;
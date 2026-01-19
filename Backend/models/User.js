import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type:String, required:true},
        age: {type: Number, min:0},
        
    },
    {
        timestamps: true

    }
);

//Hash password before saving (if password field is added in future)
//yeha pre('save', async function(){}) vanne middleware use garinxa and it runs before saving a document which rehashes password only if modified and bcrypt and salt are synchronous fxn used for hasing pwd. amd here arrow xn is not used because it has no own this.
userSchema.pre('save', async function(){
    if(!this.isModified('password')) return ;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});

//Method to match pwd
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User',userSchema);
export default User;
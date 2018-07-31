import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const { Schema } = mongoose

const ArticleSchema = new Schema({
	title:{type:String, required:true},
	text:{type:String, required:true},
	admin:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true}
});

ArticleSchema.plugin(mongoosePaginate);
export default mongoose.model('Article', ArticleSchema)
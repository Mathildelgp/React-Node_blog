import Joi from 'joi'
import Article from './article.model.js'

export default {
	async create(req, res){
		try{
			const schema = Joi.object().keys({
				title: Joi.string().required(),
				text: Joi.string().required(),
			});
			const { value, error } = Joi.validate(req.body, schema);
			if(error && error.details){
				return res.status(400).json(error);
			}
			const article = await Article.create(Object.assign({}, value, {admin : req.user._id}))
			return res.json(article)
		} catch(err){
			console.log(err)
			return res.status(500).send(err)
		}
	},

	async findAll(req, res){
		try{
			const {page, perPage} = req.query;
			const options = {
				page : parseInt(page, 10) || 1,
				limit : parseInt(perPage, 10) || 10,
		}
		const articles = await Article.paginate({}, options)
		res.json(articles)
	} catch (err) {
		console.log(err)
		return res.status(500).send(err)
		}
	},

	async findOne(req, res) {
		try {
			const { id } = req.params;
			const article = await Article.findById(id)
			if(!article){
				return res.status(404).json({err:"pas d'articles"})
			}
			return res.json(article)
		} catch (err) {
			console.error(err)
			return res.status(500).send(err)
		}
	},

	async delete(req, res){
    try {
      const { id } = req.params;
      const article = await Article.findByIdAndRemove(id)
      if(!article){
        return res.status(404).json({err:'no article found'})
      }
      return res.json({message:'article removed'})
    } catch (err) {
      console.error(err);
      return res.status(500).send(err)
    }
  },

  async update(req, res){
    try {
      const { id } = req.params;
      const schema = Joi.object().keys({
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
      const { value, error} = Joi.validate(req.body, schema);
      if(error && error.details){
        return res.status(400).json(error)
      }

      const article = await Article.findOneAndUpdate({_id:id}, value, {new: true})
      if(!article){
        return res.status(404).json({err:'wer u article at?'})
      }
      return res.json(article)
    } catch (err) {
        console.error(err)
        return res.status(500).send(err)
    }
  },
};
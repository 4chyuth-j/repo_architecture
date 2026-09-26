const BaseRepository = require("./BaseRepository.js");
const Tool = require('../models/Tool.js');

class ToolRespository extends BaseRepository{
    constructor(){
        super(Tool);
    }
    
    /**
     * finds the tool by its name
     * @param {*} name 
     * @returns 
     */
    async findByName(name){
        return await this.findOne({name})
    }

    /**
     * fetches the tool by its category
     * @param {*} category 
     * @returns 
     */
    async findByCategory(category) {
        return await Tool.findByCategory(category);
    }

    /**
     * finds the popular tool
     * @returns 
     */
    async findPopular() {
        return await Tool.findPopular();
    }

    /**
     * for searching tools based on search query
     * @param {*} searchQuery 
     * @returns 
     */
    async search(searchQuery = "postman") {
        return await this.findAll({
            $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } },
                { tags: { $in: [new RegExp(searchQuery, 'i')] } }
            ]
        }, { sort: { createdAt: -1 } });
    }
}

module.exports = ToolRespository;
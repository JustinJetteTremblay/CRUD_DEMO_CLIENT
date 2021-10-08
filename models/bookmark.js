module.exports = 
class Bookmark{
    constructor(name, url, Category)
    {
        this.Id = 0;
        this.Name = name !== undefined ? name : "";
        this.Url = undefined ? url : "";
        this.Category = undefined ? Category : "";
    }
}
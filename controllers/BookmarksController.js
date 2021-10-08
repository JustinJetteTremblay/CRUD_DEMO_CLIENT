const Repository = require('../models/Repository');

module.exports = 
class BookmarksController extends require('./Controller') {
    constructor(req, res){
        super(req, res);
        this.bookmarksRepository = new Repository('Bookmarks');
    }
    // GET: api/contacts
    // GET: api/contacts/{id}
    get(id){
        if(!isNaN(id))
            this.response.JSON(this.bookmarksRepository.get(id));
        else
            this.response.JSON(this.bookmarksRepository.getAll());
    }
    // POST: api/contacts body payload[{"Id": 0, "Name": "...", "Email": "...", "Phone": "..."}]
    post(bookmark){  
        // todo : validate contact before insertion
        // todo : avoid duplicates
        let newBookmark = this.bookmarksRepository.add(bookmark);
        if (newBookmark)
            this.response.created(JSON.stringify(newBookmark));
        else
            this.response.internalError();
    }
    // PUT: api/contacts body payload[{"Id":..., "Name": "...", "Email": "...", "Phone": "..."}]
    put(bookmark){
        // todo : validate contact before updating
        if (this.bookmarksRepository.update(bookmark))
            this.response.ok();
        else 
            this.response.notFound();
    }
    // DELETE: api/contacts/{id}
    remove(id){
        if (this.bookmarksRepository.remove(id))
            this.response.accepted();
        else
            this.response.notFound();
    }
}
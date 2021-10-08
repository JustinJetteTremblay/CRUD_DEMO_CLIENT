exports.initBookmarks = function (){
    const BookmarksRepository = require('./Repository.js');
    const Bookmark = require('./bookmark');
    const bookmarksRepository = new BookmarksRepository("bookmarks");
    bookmarksRepository.add(new Bookmark('Nicolas Chourot','Test','Sport'));
    bookmarksRepository.add(new Bookmark('Joel Dusablon','Test','Informatique'));
    bookmarksRepository.add(new Bookmark('Patrice Roy','Test','Cinema')); 
    bookmarksRepository.add({
        Id : 0,
        Name: 'Warda Moussadak',
        Url: 'Test',
        Category: 'Art'
      });
      bookmarksRepository.add({
        Id : 0,
        Name: 'Stéphane Chassé',
        Url: 'Test',
        Category: 'Technologies'
    });
}
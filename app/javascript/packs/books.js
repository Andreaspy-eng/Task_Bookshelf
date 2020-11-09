window.chooseSection = function(li) {
  let current_section = $(li);

  $('li').removeClass('active');
  current_section.addClass('active');
}

window.showCreateBooksPopup = function() {
  $('#createBooksModal').modal('show');
}

window.createBooks = function() {
  let title = $('#create_books_title').val();
  let section = $('.section-list .active');
  let section_id = $('.section-list .active').attr('id');

  $.ajax({
    url: `/books`,
    method: 'POST',
    data: {'title': title , 'section_id': section_id },
    error: function(err) {
      console.log(err);
    }
  });
}

window.showEditBooksPopup = function() {
  $('#editBooksModal').modal('show');
}

window.editBooks = function() {
  let title = $('#edit_books_title').val();
  //let body = $('#create_books_body').val();

  $.ajax({
    url: `/books/${book_id}/`,
    method: 'PUT',
    data: {'title': title, /*'body': body */},
    error: function(err) {
      console.log(err);
    }
  });
}

window.showDeleteBooksPopup = function() {
  $('#deleteBooksModal').modal('show');
}

window.deleteBooks = function() {
  let title = $('#delete_books_title').val();
  let book = $('.book-list .active');
  let book_id = $('.book-list .active').attr('id');
  //let body = $('#create_books_body').val();

  $.ajax({
    url: `/books/${book_id}/`,
    method: 'DELETE',
    data: { 'sections_id': '5f88a984f6173008dbc3876e', 'title': title, /*'body': body */},
    error: function(err) {
      console.log(err);
    }
  });
}
window.showCreateBooksPopup = function() {
  $('#createBooksModal').modal('show');
}

window.createBooks = function() {
  let title = $('#create_books_title').val();
  //let body = $('#create_books_body').val();

  $.ajax({
    url: `/books`,
    method: 'POST',
    data: { 'sections_id': '5f88a984f6173008dbc3876e', 'title': title, /*'body': body */},
    error: function(err) {
      console.log(err);
    }
  });
}
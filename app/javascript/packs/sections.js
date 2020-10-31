window.showCreateSectionsPopup = function() {
  $('#createSectionsModal').modal('show');
}

window.createSections = function() {
  let title = $('#create_sections_title').val();
  //let body = $('#create_books_body').val();

  $.ajax({
    url: `/sections`,
    method: 'POST',
    data: { 'sections_id': '5f88a984f6173008dbc3876e', 'title': title, /*'body': body */},
    error: function(err) {
      console.log(err);
    }
  });
}
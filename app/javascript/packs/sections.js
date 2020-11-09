window.makeElementActive = function(li) {
  let current_section = $(li);

  $('li').removeClass('active');
  current_section.addClass('active');
}

window.showCreateSectionsPopup = function() {
  $('#createSectionsModal').modal('show');
}

window.createSections = function() {
  let title = $('#create_sections_title').val();
  

  $.ajax({
    url: `/sections`,
    method: 'POST',
    data: { 'sections_id': '5f88a984f6173008dbc3876e', 'title': title, /*'body': body */},
    error: function(err) {
      console.log(err);
    }
  });
}

window.showEditSectionsPopup = function() {
  $('#editSectionsModal').modal('show');
}

window.editSection = function() {
  let title = $('#edit_sections_title').val();
  let section = $('.section-list .active');
  let section_id = $('.section-list .active').attr('id');

  $.ajax({
    url: `/sections/${section_id}/`,
    method: 'PUT',
    data: { 'title': title },
    success: function(res) {
      section.text(title);
      $('#editSectionsModal').modal('hide');
    },
    error: function(err) {
      console.log(err);
    }
  });
}


window.showDeleteSectionsPopup = function() {
  $('#deleteSectionsModal').modal('show');
}

window.deleteSections = function() {
  let title = $('#delete_sections_title').val();
  let section = $('.section-list .active');
  let section_id = $('.section-list .active').attr('id');
  //let body = $('#create_books_body').val();

  $.ajax({
    url: `/sections/${section_id}/`,
    method: 'DELETE',
    data: { 'sections_id': '5f88a984f6173008dbc3876e', 'title': title, /*'body': body */},
    error: function(err) {
      console.log(err);
    }
  });
}
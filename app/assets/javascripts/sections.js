function showCreateSectionsPopup(){
  $('#createSectionsModal').modal('show');
}

function createSections() {
  let title = $('#create_sections_title').val();
  let body = $('#create_sections_body').val();

  $.ajax({
    url: `/sections`,
    method: 'POST',
    data: { 'section_id': '5f88a984f6173008dbc3876e', 'title': title, 'body': body },
    error: function(err) {
      console.log(err);
    }
  })
}
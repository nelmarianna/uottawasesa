// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// For the edit and new blog posts editor

$(document).ready(function() {
  var editor_opts = {
    autogrow: true
  };

  var editor = new EpicEditor(editor_opts).load();

  //Put any custom editor styles here
  $(editor.getElement('editor').body).css({
    'background': 'none'
  });

  $("#publish_button, #save_button").click(function(e) {
    $("#body_field").val(editor.exportFile());
  });
});
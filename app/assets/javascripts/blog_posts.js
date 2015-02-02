// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// For the edit and new blog posts editor

$(document).ready(function() {
  
  if($(".editor-box").length !== 0) {
    var editor_opts = {
      autogrow: true,
      file: {name: "local_blog"}
    };

    var editor = new EpicEditor(editor_opts).load();

    //Put any custom editor styles here
    $(editor.getElement('editor').body).css({
      'background': 'none'
    });

    //Sends the local file to the server as the blog body
    $("#publish_button, #save_button").click(function(e) {
      $("#blog_post_body_field").val(editor.exportFile());
    });

    //clears the local file
    $("#discard_button").click(function(e) {
      editor.remove('local_blog');
      editor.open('local_blog');
    });
  }
});
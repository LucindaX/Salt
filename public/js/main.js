$("#resume-upload").on("change", function(){
  $("#main-container").html("");
  var file = $(this).prop('files')[0];
  var fr = new FileReader();
  fr.onload = function(e){
	  var resumeObject = JSON.parse(e.target.result);
    var resume = new Resume(resumeObject);
    resume.build();
	  $("#main-container").html(resume.html);
  }
	fr.readAsBinaryString(file);
})

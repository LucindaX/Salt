$(function(){
  
  $.getJSON("/data/schema.json", function(data){
    
    var ajv = new Ajv();
    var validate = ajv.compile(data);
    
    $("#resume-upload").on("change", function(){

      $("#main-container").html("");
  
      var file = $(this).prop('files')[0];
      if (file.type != "application/json") return alert("upload .json extentions only");
    
      var fr = new FileReader();
    
      fr.onload = function(e){
	  
        var resumeObject = JSON.parse(e.target.result);

        if (!validate(resumeObject)){
          console.log(validate.errors);
          return alert("your resume json format doesn't follow accepted schema");
        }

         var resume = new Resume(resumeObject);
        resume.build();
	      $("#main-container").html(resume.html);
     
       }
	    
      fr.readAsBinaryString(file);
    
    });

  });

})

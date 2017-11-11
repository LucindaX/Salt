var Resume = function(resume){
	this.resume = resume;
	this.html = null
}

Resume.prototype.buildSubsection = function(section){
	// ["title", "subtitle", "content" => textbody, "timeline" => timeline ]
	var content = "<div class='sub-section'>";
	content += "<h2 class='sub-section-title'>"+section.title+"</h2>";
	if(section.timeline){
		content += this.buildTimeline(section.timeline);
	}
	if(section.subtitle){
		content += "<h3 class='subtitle'>"+section.subtitle+"</h3>";
	}
	if(section.content){
		content += this.buildTextBody(section.content);
	}
	return content + "</div>"
	
}

Resume.prototype.buildSection = function(section){
	// ["title", "content" => textbody /"subs" => subsection]
	var content = "<div class='section'>";
	content += "<h1 class='section-title'>"+section.title+"</h1>";
	if(section.content){
		content += this.buildTextBody(section.content);
	}else if(section.subs.length > 0){
		for(var i=0; i < section.subs.length; i++){
			content += this.buildSubsection(section.subs[i]);
		}
	}
	return content + "</div>" 
}

Resume.prototype.buildTextBody = function(textBody){
	// ["text", "bullets"]
	var text = textBody.text;
	var bullets = textBody.bullets;
	var content = "<div class='text-body'>";
	if(text){
		content += "<div class='normal-text'>"+text+"</div>"
	}
	if(bullets && bullets.length > 0){
		content += "<ul class='bullet-list'>";
		for(var i=0; i < bullets.length; i++){
			content += "<li>"+bullets[i]+"</li>"
		}
		content += "</ul>"
	}
	return content + "</div>"
}

Resume.prototype.buildTimeline = function(timeline){
	// [ "start", "end" ]
	return "<div class='timeline'>"+timeline.start+"<hr>"+timeline.end+"</div>"
}

Resume.prototype.buildContact = function(contact){
	var content = "<div class='contact-info'>"
	content += "<div class='left-col'><div class='address'>"+contact.address+"</div></div>";
	content += "<div class='right-col'><div class='email'>"+contact.email+"</div>";
	content += "<div class='phone'>"+contact.phone+"</div>";
	if(contact.website) content += "<span class='website'>"+contact.website+"</span></div>"
	else content += "</div>"
	return content + "</div>"
}

Resume.prototype.build = function(){
	var content = "<div class='resume'>";
	content += "<div class='name'><h1>"+this.resume.name+"</h1></div>";
	content += this.buildContact(this.resume.contact);
	for(var i=0; i < this.resume.sections.length; i++){
		content += this.buildSection(this.resume.sections[i]);
	}
	this.html = content + "</div>";
	return true
}





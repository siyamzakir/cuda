/*Contact form submission Functionality */
$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
	
	
	
	

	/*TAB AREA */
$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
	/*END TAB AREA */
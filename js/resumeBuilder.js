// Object declarations for various resume sections.
var contact = {
  "email":      "jason@mojason.com",
  "linkedin":   "https://www.linkedin.com/pub/jason-force/80/3a7/43a",
  "google":     "https://plus.google.com/u/0/116492679110338493730/posts/",
  "twitter":    "https://twitter.com/mojason_81",
  "github":     "https://github.com/mojason-81",
  "display":    function(){
    var formattedEmail = HTMLemail.replace("%data%", contact.email);
    var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contact.linkedin);
    var formattedGoogle = HTMLgoogle.replace("%data%", bio.contact.google);
    var formattedTwitter = HTMLtwitter.replace("%data%", contact.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%", contact.github);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedLinkedIn);
    $("#topContacts").prepend(formattedGoogle);
    $("#topContacts").prepend(formattedTwitter);
    $("#topContacts").prepend(formattedGitHub);
  }
};

var bio = {
  "name":       "Jason Force",
  "role":       "An Object in Motion",
  "contact": {
    "email":    "jason@mojason.com",
    "linkedin": "https://www.linkedin.com/pub/jason-force/80/3a7/43a",
    "google":   "https://plus.google.com/u/0/116492679110338493730/posts/",
    "twitter":  "https://twitter.com/mojason_81",
    "github":   "https://github.com/mojason-81",
    "location": "Blue Springs, MO"
  },
  "picture":    "images/me.jpg",
  "message":    "Welcome, to my resume",
  "skills":     ["HTML","CSS","JavaScript","jQuery","Ruby","Rails"],
  "display":    function(){
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, "<br>", formattedRole);
    $("#header").prepend(formattedBioPic);
  },
  "displaySkills":    function(){
    if (bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);
      for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
      }
    }
  }
};

var work = {
  "jobs": [
    {
      "employer":     "Multi Service",
      "position":     "Software Engineer I",
      "location":     "Overland Park, KS",
      "dates":        "Oct 2015 - Present",
      "description":  "I'll find out soon enough."
    },
    {
      "employer":     "Smart Warehousing",
      "position":     "Jr Web Developer",
      "location":     "Edgerton, KS",
      "dates":        "Jun 2015 - Oct 2015",
      "description":  "Support web application stack -- CentOS, Apache, PostgreSQL, Perl.  Research / suggest code fixes for bugs.  Perform database queries to complete user requests for data correction and retrieval.  Perform database queries to gather information to aid in troubleshooting.  Respond to user trouble tickets in a timely manner.  Add / edit users."
    },
    {
      "employer":     "Rhythm Engineering",
      "position":     "Testing and Repair Specialist",
      "location":     "Lenexa, KS",
      "dates":        "Nov 2011 - Jun 2015",
      "description":  "Working with team members, perform and refine test procedures on adaptive traffic control system equipment.  Troubleshoot and repair adaptive traffic control system equipment in-house and by assisting clients over the phone.  Work with team members to develop trending data for component failures in the field.  Responsible for inventory control.  Ensure equipment is shipped to clients in a timely manner.  Process client returns.  Repair and return client equipment in a timely manner."
    }
  ],
  "display":    function(){
    for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append((formattedEmployer + formattedTitle), formattedDates, formattedLocation, formattedDescription);
    }
  }
};

var education = {
  "schools": [
    {
      "name":     "ITT Technical Institute",
      "location": "Omaha, NE",
      "degree":   "A.A.S.",
      "major":    "Computer and Electronics Engineering Technology",
      "date":     "2009"
    }
  ],
  "onlineCourses": [
    {
      "title":  "Front End Developer Nanodegree",
      "school": "Udacity",
      "date":   "In Progress",
      "url":    "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title":  "Ruby on Rails Developer Blueprint",
      "school": "Skillcrush",
      "date":   2015,
      "url":    "http://skillcrush.com/blueprint/ruby-rails-developer/"
    },
    {
      "title":  "Web Developer Blueprint",
      "school": "Skillcrush",
      "date":   2015,
      "url":    "http://skillcrush.com/blueprint/web-developer/"
    },
    {
      "title":  "Ruby",
      "school": "Codecademy",
      "date":   2015,
      "url":    "https://www.codecademy.com/learn/ruby"
    },
    {
      "title":  "Python",
      "school": "Codecademy",
      "date":   2015,
      "url":    "https://www.codecademy.com/learn/python"
    },
    {
      "title":  "JavaScript",
      "school": "Codecademy",
      "date":   2015,
      "url":    "https://www.codecademy.com/learn/javascript"
    },
    {
      "title":  "jQuery",
      "school": "Codecademy",
      "date":   2015,
      "url":    "https://www.codecademy.com/learn/jquery"
    },
    {
      "title":  "HTML / CSS",
      "school": "Codecademy",
      "date":   2015,
      "url":    "https://www.codecademy.com/learn/web"
    }
  ],
  "display":    function(){
    for (item in education.schools){
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
      var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[item].location);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[item].major);
      var formattedDate = HTMLschoolDates.replace("%data%", education.schools[item].date);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").prepend(formattedSchoolName + formattedDegree);
      $(".education-entry:last").append(formattedSchoolCity);
      $(".education-entry:last").append(formattedDate);
      $(".education-entry:last").append(formattedMajor);
      $(".education-entry:last").append("<hr>");
    }
    $(".education-entry").append(HTMLonlineClasses);
    for (item in education.onlineCourses){
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[item].date);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedTitle + formattedSchool);
      $(".education-entry:last").append(formattedDate);
      $(".education-entry:last").append(formattedURL);
      $(".education-entry:last").append("<hr>");
    }
  }
};

var project = {
  "projects": [
    {
      "title":        "Portfolio",
      "description":  "My online portfolio.",
      "url":          "http://mojason.com/portfolio/portfolio.html",
      "image":        "./images/portfolio2.jpg"
    },
    {
      "title":        "An Unfinished Read",
      "description":  "A site showcasing all the books on my shelf I have failed to finish.",
      "url":          "http://mojason.com/portfolio/books-unread/books.html",
      "image":        "./images/book_bw.jpg"
    }
  ],
  "display":  function(){
    for (item in project.projects){
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[item].title);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[item].description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.projects[item].image);
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

// International name
var inName = function(){
  var nameArr = bio.name.split(" ");
  fname = nameArr[0].slice(0,1).toUpperCase() + nameArr[0].slice(1).toLowerCase();
  lname = nameArr[1].toUpperCase();
  return fname + " " + lname;
};

//Calling functions to display resume info
bio.display();
contact.display();
work.display();
education.display();
bio.displaySkills();
project.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

// Object declarations for various resume sections.
/*
 "email":     '<a href="mailto:jason@mojason.com" TARGET="_blank"><i class="contactIcon fa fa-envelope-square"></i></a>',
 "linkedin":  '<a href="https://www.linkedin.com/pub/jason-force/80/3a7/43a" TARGET="_blank"><i class="contactIcon fa fa-linkedin-square"></i></a>',
 "google":    '<a href="https://plus.google.com/u/0/116492679110338493730/posts/" TARGET="_blank"><i class="contactIcon fa fa-google-plus-square"></i></a>',
 "twitter":   '<a href="https://twitter.com/mojason_81" TARGET="_BLANK"><i class="contactIcon fa fa-twitter-square"></i></a>',
 "github":    '<a href="https://github.com/mojason-81" TARGET="_blank"><i class="contactIcon fa fa-github-square"></i></a>'
*/
var bio = {
  "name":      "Jason Force",
  "role":      "An Object in Motion",
  "contact": {
    "email":    "jason@mojason.com",
    "linkedin": "https://www.linkedin.com/pub/jason-force/80/3a7/43a",
    "google":   "https://plus.google.com/u/0/116492679110338493730/posts/",
    "twitter":  "https://twitter.com/mojason_81",
    "github":   "https://github.com/mojason-81"
  },
  "picture":   "images/me.jpg",
  "message":   "Welcome, to my resume",
  "skills":    ["HTML","CSS","JavaScript","jQuery","Ruby","Rails"]
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
  ]
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
      "title":  "HTML / CSS",
      "school": "Codecademy",
      "date":   2015
    },
    {
      "title":  "JavaScript",
      "school": "Codecademy",
      "date":   2015
    },
    {
      "title":  "jQuery",
      "school": "Codecademy",
      "date":   2015
    },
    {
      "title":  "Python",
      "school": "Codecademy",
      "date":   2015
    },
    {
      "title":  "Ruby",
      "school": "Codecademy",
      "date":   2015
    },
    {
      "title":  "Web Developer Blueprint",
      "school": "Skillcrush",
      "date":   2015
    },
    {
      "title":  "Ruby on Rails Developer Blueprint",
      "school": "Skillcrush",
      "date":   2015
    },
    {
      "title":  "Front End Developer Nanodegree",
      "school": "Udacity",
      "date":   "In Progress"
    }
  ]
};

var project = {
  "projects": [
    {
      "title":        "Portfolio",
      "description":  "My online portfolio.",
      "url":          "http://mojason.com/portfolio/portfolio.html"
    },
    {
      "title":        "An Unfinished Read",
      "description":  "A site showcasing all the books on my shelf I have faild to finish.",
      "url":          "http://mojason.com/portfolio/books-unread/books.html"
    }
  ]
};

// Variable declarations for various biography items.
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// Contact info
/*
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedGoogle = HTMLgoogle.replace("%data%", bio.contacts.google);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
*/
// Pic of me
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
// Work
var displayWork = function(){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append((formattedEmployer + formattedTitle), formattedDates, formattedLocation, formattedDescription);
  };
};
/*
var formattedPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkYears = HTMLworkDates.replace("%data%", work.years);
var formattedWorkCity = HTMLworkLocation.replace("%data%", work.city);
// Education
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.city);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.major);
*/

// Start building resume here.
// Skills list
if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
  }
}
// Name and picture
$("#header").prepend(formattedName, "<br>", formattedRole);
$("#header").prepend(formattedBioPic);
// Contact info
/*
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedLinkedIn);
$("#topContacts").prepend(formattedGoogle);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGitHub);
// Work info
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer);
$(".work-entry").append(formattedPosition);
$(".work-entry").append(formattedWorkCity);
// Education info
$("#education").append(HTMLschoolStart)
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolCity);
$(".education-entry").append(formattedDegree);
$(".education-entry").append(formattedMajor);
*/
displayWork();

/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Object declarations for various resume sections.
/*
var bio = {
 "name":      "Jason Force",
 "role":      "An Object in Motion",
 "contacts":  {
   "email":     '<a href="mailto:jason@mojason.com" TARGET="_blank"><i class="contactIcon fa fa-envelope-square"></i></a>',
   "linkedin":  '<a href="https://www.linkedin.com/pub/jason-force/80/3a7/43a" TARGET="_blank"><i class="contactIcon fa fa-linkedin-square"></i></a>',
   "google":    '<a href="https://plus.google.com/u/0/116492679110338493730/posts/" TARGET="_blank"><i class="contactIcon fa fa-google-plus-square"></i></a>',
   "twitter":   '<a href="https://twitter.com/mojason_81" TARGET="_BLANK"><i class="contactIcon fa fa-twitter-square"></i></a>',
   "github":    '<a href="https://github.com/mojason-81" TARGET="_blank"><i class="contactIcon fa fa-github-square"></i></a>'
 },
 "picture":   "images/me.jpg",
 "message":   "Welcome, to my resume",
 "skills":    ["HTML","CSS","JavaScript","jQuery","Ruby","Rails"]
};
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
      "employer": "Multi Service",
      "position": "Software Engineer I",
      "city":     "Overland Park, KS",
      "years":    "< 1"
    },
    {
      "employer": "Smart Warehousing",
      "position": "Jr Web Developer",
      "city":     "Edgerton, KS",
      "years":    "< 1"
    },
    {
      "employer": "Rhythm Engineering",
      "position": "Testing and Repair Specialist",
      "city":     "Lenexa, KS",
      "years":    "< 4"
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
      "date":   "2015"
    },
    {
      "title":  "JavaScript",
      "school": "Codecademy",
      "date":   "2015"
    },
    {
      "title":  "jQuery",
      "school": "Codecademy",
      "date":   "2015"
    },
    {
      "title":  "Python",
      "school": "Codecademy",
      "date":   "2015"
    },
    {
      "title":  "Ruby",
      "school": "Codecademy",
      "date":   "2015"
    },
    {
      "title":  "Web Developer Blueprint",
      "school": "Skillcrush",
      "date":   "2015"
    },
    {
      "title":  "Ruby on Rails Developer Blueprint",
      "school": "Skillcrush",
      "date":   "2015"
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
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedGoogle = HTMLgoogle.replace("%data%", bio.contacts.google);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
// Pic of me
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
// Work
var formattedPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkYears = HTMLworkDates.replace("%data%", work.years);
var formattedWorkCity = HTMLworkLocation.replace("%data%", work.city);
// Education
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.city);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.major);

// Start building resume here.
// Skills list
$("#header").append(HTMLskillsStart);
for (i = 0; i < bio.skills.length; i++) {
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
}
// Name and picture
$("#header").prepend(formattedName, "<br>", formattedRole);
$("#header").prepend(formattedBioPic);
// Contact info
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

/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ["HTML","CSS","JavaScript","jQuery","Ruby","Rails"];
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
 "skills":    skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedGoogle = HTMLgoogle.replace("%data%", bio.contacts.google);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);

$("#header").append(HTMLskillsStart);
for (i = 0; i < bio.skills.length; i++) {
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
}
$("#header").prepend(formattedName, "<br>", formattedRole);
$("#header").prepend(formattedBioPic);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedLinkedIn);
$("#topContacts").prepend(formattedGoogle);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGitHub);

    /*
    This is empty on purpose! Your code to build the resume will go here.
    */

    var bio={
        name : "Hassan Mohamed",
        role :"Web Developer",
        contacts :
        {
          mobile: "443 783 7121",
          email: "kokobosh@gmail.com",
          github: "kobosh",
          twitter: "@kobosh",
          location: "Houston"
      },

      welcomeMessage: "welcome !this is me",
      skills: ["ASP.Net ","JavaScript","SQL Server"],
      biopic: "images/fry.jpg",

      display: function()
      {
        var skillSet="";
        for (var i = 0; i < bio.skills.length; i++)
        {
          skillSet+=   HTMLskills.replace("%data%",bio.skills[i]);
      }

      $('#header').prepend( HTMLheaderRole.replace('%data%',bio.role))
      .prepend(HTMLheaderName.replace('%data%',bio.name))
      .append(HTMLbioPic.replace('%data%',bio.biopic))

      .append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage))
      .append(HTMLskillsStart);

      $("#skills").append(skillSet);

      $('#topContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile))
      .append(HTMLemail.replace('%data%',bio.contacts.email))
      .append(HTMLgithub.replace('%data%',bio.contacts.github))
      .append(HTMLtwitter.replace('%data%',bio.contacts.twitter))
      .append(HTMLblog.replace('%data%','my blog'))
      .append(HTMLlocation.replace('%data%',bio.contacts.location))
      .prepend(HTMLcontactGeneric.replace("%contact%","My").replace("%data%","Info: "));

  }

};


/* education*/


var education=
{

    schools:
    [    {
     name: "UMES",
     location: "Princess Anne MD",
     degree: "MS",
     majors: "Computer Science",
     dates: "1999-2003",
     url: "https://umes.edu"
 } ],

 onlineCourses:
 [ {
     title: "Algorithms",
     school: "San Diego UCL",
     dates:"3/2016-6/2016",
     url: "SanDiego.com"
 },
 {
     title: "Front end Web Developmeent",
     school: "Udacity",
     dates:"6/2017-present",
     url: "Udacity.com"
 } ],

 display: function (){
    var schoolStr=HTMLschoolStart;
    var onlines=HTMLonlineClasses;
    education.schools.forEach(function(schl)
    {
        schoolStr+=HTMLschoolName.replace("%data%",schl.name) +
        HTMLschoolDegree.replace("%data%",schl.degree) +
         HTMLschoolDates.replace("%data%",schl.dates)+
          HTMLschoolLocation.replace("%data%",schl.location)+ HTMLschoolMajor.replace("%data%",schl.majors);

          });
        //schoolStr+=HTMLonlineClasses;
        education.onlineCourses.forEach(function(onln)
        {
         onlines+=HTMLonlineTitle.replace("%data%",onln.title) +
          HTMLonlineSchool.replace("%data%",onln.school)+
           HTMLonlineDates.replace("%data%",onln.dates) +HTMLonlineURL.replace("%data%",onln.url);

     }
     );

        return schoolStr+onlines;


    }
};

//work experience
var work={

    jobs: [    { employer: "PTGi",
    title: "Software Developer",
    location: "Herndon VA",
    dates: "4/2007-12/2012",
    description: "developed .Net Apps"
}],
display: function ()
{
    var jbs=HTMLworkStart;
    work.jobs.forEach(
        function(job)
        {
         jbs+=HTMLworkEmployer.replace("%data%", job.employer)+
         HTMLworkTitle.replace("%data%",job.title)+
         HTMLworkLocation.replace("%data%",job.location)+
         HTMLworkDates.replace("%data%",job.dates) +HTMLworkDescription.replace("%data%",job.description)

        }
        );
    return jbs;
}
};
//projects
var projects={

    projects: [    {
        title: "Domestic USA Routes",
        dates: "2/2008-9/2008",
        description: " route calls for each area code",
        images: "images/fry.jpg"
    }    ],

    display: function (){
        var projs=HTMLprojectStart;
        projects.projects.forEach(
            function(prj)
            {
                projs+=HTMLprojectTitle.replace("%data%", prj.title)+
                HTMLprojectDates.replace("%data%",prj.dates)+
                HTMLprojectDescription.replace("%data%",prj.description)+
                HTMLprojectImage.replace("%data%",prj.images)

            } );
        return projs;
    }
};
//fotter social media

var socialMedia=
{

    display:function()
    {
     var soc=HTMLfacebook+HTMLtwitter+HTMLlinkedin;
     return soc;
 }
}
//  the header part of resume
bio.display();
//the rest parts of resume
$("#workExperience").append(work.display());

$("#projects").append(projects.display());
$("#education").append(education.display());

$("#mapDiv").append( googleMap);

$("#footerContacts").append(socialMedia.display());
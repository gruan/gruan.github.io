(function () {
  'use strict';

  /**
   * @description
   * # PortfolioCtrl
   * Handles the controller for the portfolio section of the application
   */
  angular.module('personalApp')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope'];

  function HomeCtrl($scope) {
    $scope.portfolioData = {
      educationArray: [
        {
          sectionTitle: 'Education',
          accomplishment: 'Bachelor of Science in Computer Science',
          date: 'Expected 2018',
          location: 'University of Illinois at Urbana-Champaign',
          cityState: 'Urbana-IL',
          grade: 'GPA: 4.0',
          description: 'Courses: Computer Architecture, Data Structures, Discrete Structures, ' +
          'Applied Linear Algebra, Calculus 1 2 3.'
        },
        {
          accomplishment: 'French Exchange Student',
          date: 'Aug. 2013 - June 2014',
          location: 'Lycee Marguerite de Navarre',
          cityState: 'Bourges, France'
        },
        {
          accomplishment: 'High School Diploma',
          date: 'May 2013',
          location: 'University Laboratory High School',
          cityState: 'Urbana, IL',
          grade: 'GPA: 4.0'
        }
      ],
      skillsArray: [
        {
          sectionTitle: 'Skills',
          skills: [
            {
              title: 'Languages',
              list: 'Javascript, HTML5, CSS, C++, Java, Python, Scheme'
            },
            {
              title: 'Frameworks',
              list: 'Angular, Bootstrap'
            },
            {
              title: 'Preprocessors and Task Runners',
              list: 'Sass, GruntJS'
            },
            {
              title: 'Testing',
              list: 'Jasmine, Frisby'
            },
            {
              title: 'Lingual Languages',
              list: 'English, French, Chinese'
            }
          ]
        }
      ],
      experienceArray: [
        {
          sectionTitle: 'Experience',
          accomplishment: 'Software Web Developer Intern',
          date: 'June 2015 - Aug. 2015',
          location: 'NextGear Capital',
          cityState: 'Carmel, IN',
          description: 'Worked on NextGear Capital\'s web application as a front-end web developer ' +
          'on an AGILE team. Redesigned the UI of the financial accounts section and ' +
          'implemented portions of features for adding and editing bank accounts. ' +
          'Fixed UI and functional bugs, wrote unit and Frisby tests, and reworked ' +
          'the build process for IE development and support. Tools that were used include ' +
          'HTML5, SCSS, Javascript, Angular, Bootstrap, Karma, Frisby, and Grunt.'
        }
      ],
      projectsArray: [
        {
          sectionTitle: 'Projects',
          accomplishment: 'Live Trip - 3rd Place Overall',
          date: 'Mar. 2015',
          location: 'VandyHacks',
          cityState: 'Nashville, TN',
          description: 'Developed a HTML5 app targeted towards long-distance drivers that ' +
          'takes user input on preferred genres of music and provides a ' +
          'spoken list of nearby radio stations. In addition, the app provides ' +
          'drivers with interesting information on surrounding cities: ' +
          'demographics, population, famous people, city nicknames, etc. ' +
          'Live Trip was built with HTML5, CSS, Javascript, Python, Flask, ' +
          'Wolfram-API, and Wikipedia-API.'
        },
        {
          accomplishment: 'ShakeSafe',
          date: 'Oct. 2014',
          location: 'BoilerMake',
          cityState: 'West Lafayette, IN',
          description: 'Developed a Pebble Watch app targeted towards emergency situations. ' +
          'When the app is active and the watch is shaken in a specific manner, ' +
          'it texts emergency contacts that you are in danger and in need of help ' +
          'with your GPS location. ShakeSafe was built with Javascript, Pebble API, ' +
          'Flask, and Twilio REST API.'
        },
        {
          accomplishment: 'Fractl',
          date: 'Oct. 2014',
          location: 'HackMizzou',
          cityState: 'Columbia, MO',
          description: 'Developed a virtual real-time quaternion fractal projected onto the ' +
          'Oculus Rift. With motion sensing, provided via the Leap Motion, ' +
          'users could interact with the fractal with their hands - rotating, enlarging, ' +
          'shrinking, and modifying parameters without having to access the keyboard. ' +
          'Fractl was built with C++, OpenGL, SFML, and Leap Motion API. '
        }
      ],
      researchArray: [
        {
          sectionTitle: 'Research',
          accomplishment: 'Chemistry Research Assistant',
          date: 'Sep. 2011 - Aug. 2013',
          location: 'Universty of Illinois at Urbana-Champaign',
          cityState: 'Urbana, IL',
          description: 'Collaborated as co-author on a research paper currently pending publication ' +
          'entitled \'Target-Responsive Liposome Systems for Detection of Cocaine\'. ' +
          'Synthesized, purified, and characterized DNA-modified liposomes and nanoscale ' +
          'spectroscopy, and prepared columns for nano-scale particles using size ' +
          'extrusion chromatography.'
        },
        {
          accomplishment: 'Computing Science Research Intern',
          date: 'May 2012 - June 2012',
          location: 'University of Illinois at Urbana-Champaign',
          cityState: 'Urbana, IL',
          description: 'Collaborated on a research project to explore the effects of ' +
          'switched off gene sequences in Drosophila fly by consulting mutated embryos. ' +
          'Created an archive of mutated embryos and documented which respective gene ' +
          'sequence had been turned off using an assortment of scientific research ' +
          'papers. Researchers were then able to use the archive to map affected gene ' +
          'sequence to the mutated areas.'
        }
      ]
    };
  }
})();

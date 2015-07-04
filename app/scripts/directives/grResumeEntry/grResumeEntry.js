(function () {
  'use strict';

  angular
    .module('personalApp')
    .directive('grResumeEntry', resumeEntry);

  /**
   * Directive for rendering a single entry of the Resume. Currently used in index.html
   */

  function resumeEntry() {
    var directive;
    directive = {
      link: link,
      templateUrl: 'scripts/directives/grResumeEntry/grResumeEntry.html',
      scope: {
        accomplishment: '=',
        cityState: '=',
        date: '=',
        grade: '=',
        location: '=',
        sectionTitle: '=',
        description: '='
      },
      restrict: 'E'
    };

    return directive;

    function link(scope, element, attrs) {
      scope.accomplishment = accomplishment;
      scope.cityState = cityState;
      scope.date = date;
      scope.grade = grade;
      scope.location = location;
      scope.sectionTitle = sectionTitle;
      scope.description = description;

      scope.sectionTitleDisplayed = isSectionTitleDisplayed();
      scope.gradeDisplayed = isGradeDisplayed();
      scope.descriptionDisplayed = isDescriptionDisplayed();

      function isDescriptionDisplayed() {
        return attrs.description;
      }

      function isGradeDisplayed() {
        return attrs.grade;
      }

      function isSectionTitleDisplayed() {
        return attrs.sectionTitle;
      }
    }
  }
})();

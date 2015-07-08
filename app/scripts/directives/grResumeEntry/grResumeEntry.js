(function () {
  'use strict';

  angular.module('personalApp')
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
        info: '='
      },
      restrict: 'E'
    };

    return directive;

    function link(scope) {
      scope.sectionTitleDisplayed = isSectionTitleDisplayed();
      scope.gradeDisplayed = isGradeDisplayed();
      scope.descriptionDisplayed = isDescriptionDisplayed();

      function isDescriptionDisplayed() {
        return !!scope.info.description;
      }

      function isGradeDisplayed() {
        return !!scope.info.grade;
      }

      function isSectionTitleDisplayed() {
        return !!scope.info.sectionTitle;
      }
    }
  }
})();

(function () {
  'use strict';

  angular.module('personalApp')
    .directive('grPortfolioEntry', portfolioEntry);

  /**
   * Directive for rendering a single entry of the Resume. Currently used in index.html
   */

  function portfolioEntry() {
    var directive;
    directive = {
      link: link,
      templateUrl: 'scripts/directives/grPortfolioEntry/grPortfolioEntry.html',
      scope: {
        info: '='
      },
      restrict: 'E'
    };

    return directive;

    function link(scope) {
      scope.sectionTitle = scope.info.sectionTitle;
      scope.accomplishment = scope.info.accomplishment;
      scope.date = scope.info.date;
      scope.location = scope.info.location;
      scope.cityState = scope.info.cityState;
      scope.grade = scope.info.grade;
      scope.description = scope.info.description;

      scope.sectionTitleDisplayed = isSectionTitleDisplayed();
      scope.gradeDisplayed = isGradeDisplayed();
      scope.descriptionDisplayed = isDescriptionDisplayed();

      function isDescriptionDisplayed() {
        return !!scope.description;
      }

      function isGradeDisplayed() {
        return !!scope.grade;
      }

      function isSectionTitleDisplayed() {
        return !!scope.sectionTitle;
      }
    }
  }
})();

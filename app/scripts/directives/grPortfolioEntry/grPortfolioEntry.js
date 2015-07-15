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

      scope.sectionTitleDisplayed = !!scope.sectionTitle;
      scope.gradeDisplayed = !!scope.grade ;
      scope.descriptionDisplayed = !!scope.description;

      scope.isSmallMargin = scope.gradeDisplayed && !scope.descriptionDisplayed;
      scope.isMediumMargin = !scope.gradeDisplayed || scope.descriptionDisplayed;
    }
  }
})();

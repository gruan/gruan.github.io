(function () {
  'use strict';

  angular.module('personalApp')
    .directive('grPortfolioEntry', portfolioEntry);

  /**
   * Directive for rendering a single entry of the Resume. Currently used in index.html
   *
   * info has the following possible properties:
   * - sectionTitle
   * - accomplishment
   * - date
   * - location
   * - cityState
   * - grade
   * - description
   * - skills
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
      scope.sectionTitleDisplayed = !!scope.info.sectionTitle;
      scope.accomplishmentDisplayed = !!scope.info.accomplishment;
      scope.dateDisplayed = !!scope.info.date;
      scope.locationDisplayed = !!scope.info.location;
      scope.cityStateDisplayed = !!scope.info.cityState;
      scope.gradeDisplayed = !!scope.info.grade ;
      scope.descriptionDisplayed = !!scope.info.description;
      scope.skillsDisplayed = !!scope.info.skills;

      scope.isSmallMargin = scope.info.gradeDisplayed && !scope.info.descriptionDisplayed;
      scope.isMediumMargin = !scope.info.gradeDisplayed || scope.info.descriptionDisplayed;
    }
  }
})();

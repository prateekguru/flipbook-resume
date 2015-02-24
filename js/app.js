/// <reference path="angular-sanitize.js" />
/// <reference path="angular.js" />
/// <reference path="../assets/data.js" />

var appModule = angular.module('prateekcvapp', ['ngSanitize']);

appModule.controller('appController', appController);

function appController() {
    this.navLinks = dataModel.navLinks;
    this.model = dataModel.model;
}

appModule.filter('progressFilter', function() {
    var fn = function(input) {
        switch (input) {
            case 100:
            case 95:
            case 90:
            case 85:
            case 80:
                return 'progress-bar-danger';
            case 75:
                return 'progress-bar-sucess';
            case 70:
                return 'progress-bar-info';
            case 65:
            case 60:
                return 'progress-bar-warning';
            default:
                return 'progress-bar-warning';
        }
    };
    return fn;
});

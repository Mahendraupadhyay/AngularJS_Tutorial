/// <reference path="angular.min.js" />

var myApp = angular
    .module("MyModule", [])
    .controller("MyController", function ($scope) {

        var employees = [
            { name: "Emp1", dob: new Date("November 23,1980"), gender: "Male", Salary: 55224 },
            { name: "Emp2", dob: new Date("08/25/1992"), gender: "Female", Salary: 56482 },
            { name: "Emp3", dob: new Date("12/16/2018"), gender: "Male", Salary: 12100.023 },
            { name: "Emp4", dob: new Date("12/6/2018"), gender: "Male", Salary: 1200.023 },
            { name: "Emp5", dob: new Date("2/12/1998"), gender: "Male", Salary: 1548957.2356 }
        ];

        $scope.employees = employees;
        $scope.sortColumn = "name";
        $scope.reverseSort = false;


        /*AngularJS sort rows by table header Start*/
        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
            return '';
        }
    });
        /*AngularJS sort rows by table header End*/

        //var technologies = [    //Event Handling in Angular
        //    { name: "C#", likes: 0, dislikes: 0 },
        //    { name: "ASP.Net", likes: 0, dislikes: 0 },
        //    { name: "WCF", likes: 0, dislikes: 0 }];

        //$scope.technologies = technologies;
        //$scope.IncrementLikes = function (technology) { technology.likes++ }
        //$scope.IncrementDislikes = function (technology) { technology.dislikes++ }

        //var countries = [ // Nested ng-repeat
        //    { 
        //        name:"India",
        //        cities:[{ name:"Mumbai" }, { name:"Bhopal" }, { name:"Delhi" }]
        //    },
        //    {
        //        name:"US",
        //        cities:[{ name:"US City1" }, { name:"US City2" }, { name:"US City3" }]
        //    },
        //    {
        //        name:"UK",
        //        cities:[{ name:"UK City1" }, { name:"UK City2" }, { name:"UK City3" }]
        //    }];
        //$scope.countries = countries;

        //var employees = [
        //    { name : "Name1", gender : "M", Salary : 13 },
        //    { name : "Name2", gender :"F", Salary : 133 },
        //    { name : "Name3", gender : "O", Salary : 132 }];       




angular.module('vacationApp', [])
   .controller('VacationController', function() {
      var vm = this;
      vm.vacationDays = 0;
   
      vm.calculate = function() {
         var payHour = vm.beforeTaxPay / 80;
         var vacHours = vm.availableVacation / payHour;
         vm.vacationDays = vacHours / 8;
      };

   });
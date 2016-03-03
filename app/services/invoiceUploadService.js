expenseManagementApp.service('invoiceUploadService' ,[ '$rootScope' , function($rootScope){
    this.readURL = function (input, index) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                var invoicePath = e.target.result;
                $rootScope.fullData[index].invoice = invoicePath;
                window.open(invoicePath);
            }
        
        reader.readAsDataURL(input.files[0]);
        }
    }
}]);

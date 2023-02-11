app.controller('MainControllers', ['$scope', function ($scope) {
    
  $scope.text = list.person;
    
  $scope.sort = "name";
  
  $scope.country = removeDoublesCountry($scope.text);
  
  $scope.pod = removeDoublesPOD($scope.text);

  $scope.rays = ["", 1, 2, 3, 4, 5, 6, 7];
    
  $scope.show = false;
    
    $scope.krneki="to je začetek";
    

    
    
 //reset search fields
  $scope.reset = function() {
    $scope.search.pointOfDevelopment = ''; $scope.search.soulRay = ''; $scope.search.personalityRay = ''; $scope.search.mentalRay = ''; $scope.search.astralRay = ''; $scope.search.physicalBodyRay = ''; $scope.search.name = ''; $scope.search.lastName = ''; $scope.search.$ = ''; $scope.search.personalitySubRay = ''; $scope.search.mentalSubRay = ''; $scope.search.astralSubRay = ''; $scope.search.physicalBodySubRay = ''; $scope.search.fieldOfEndeavour = ''; $scope.search.countryOfOrigin = ''
        // Todo: Reset field to pristine state, its initial state!
    };
    
    
    

  //Remove double entries for "Point of development"
  function removeDoublesPOD(text) {
    var check = [""];
    var i = text.length;  
    for (i = i - 1; i >= 0; i--) {
      if (text[i].pointOfDevelopment === undefined) {
      } else {
        check[check.length] = text[i].pointOfDevelopment
      };
    };
    var uniq = check.reduce(function(a, b) {
      if (a.indexOf(b) < 0) {
        a.push(b)
      };
      return a;
    }, []);
    return uniq;
  };
  
//Remove double entries for "Country of origin"
  function removeDoublesCountry(text) {
    var check = [""];
    var i = text.length;
    for (i = i - 1; i >= 0; i--) {
      if (text[i].countryOfOrigin === undefined) {
      } else {
        check[check.length] = text[i].countryOfOrigin
      };
    };
    var uniq = check.reduce(function(a, b) {
      if (a.indexOf(b) < 0) {
        a.push(b)
      };
      return a;
    }, []);
    return uniq;
  };
  
 
  $scope.fallback = {"pointOfDevelopment":"-", "personalitySubRay":"-", "mentalSubRay":"-", "astralSubRay":"-", "physicalBodySubRay":"-", "countryOfOrigin":"-", "lastName":""};


  $scope.sray = {0:"soulRay", 1:"personalityRay", 2:"mentalRay", 3:"astralRay", 4:"physicalBodyRay", 5:"personalitySubRay", 6:"mentalSubRay", 7:"astralSubRay", 8:"physicalBodySubRay"};
  
  /*$scope.sray = {0:"Soul Ray", 1:"Personality Ray", 2:"Mental Ray", 3:"Astral Ray", 4:"Physical Body Ray", 5:"Personality sub-ray", 6:"Mental sub-ray", 7:"Astral sub-ray", 8:"Physical Body sub-ray"};*/

// Used in simple statistics
   $scope.ordersWithFallback = angular.copy($scope.text);


  /* just to test if a variable is an array */
 /*  function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
  } */
  
  
}])
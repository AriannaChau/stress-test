// front end logic
$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    // var warningTotal;
    var warningArray = [];
    var userResponses = [];

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSigns = $(this).val();
      warningArray.push(warningSigns);
      // warningTotal = warningArray.length;
    });
    console.log(warningTotal);
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptoms = $(this).val();
    });
    $("input:checkbox[name=coping]:checked").each(function() {
      var coping = $(this).val();
    });
 // warningarray.length + symptons.length - coping.length
  
    //   if (warningSigns >=3 && symptoms >=2 && coping <=2) {
    //     $("#lowCoping").show();
    //   } else if (warningSigns >=3 && symptoms >=2 && coping >=5) {
    //     $("#highCoping").show();
    //   } else (warningSigns <=2 && symptoms <=2 &&>=4){
    //     $("#lowStress").show();
    //   }
    // }
  });
});

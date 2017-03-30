// front end logic
$(document).ready(function() {
  var total;
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    var warningArray = [];
    var symptomsArray = [];
    var copingArray = [];

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSigns = $(this).val();
      warningArray.push(warningSigns);
    });

    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptoms = $(this).val();
      symptomsArray.push(symptoms);
    });

    $("input:checkbox[name=coping]:checked").each(function() {
      var coping = $(this).val();
      copingArray.push(coping);
    });

    total = warningArray.length + symptomsArray.length - copingArray.length

    if (total <= 6) {
      $("#lowStress").show();
    } else if (total <= 9) {
      $("#highCoping").show();
    } else {
      $("#lowCoping").show();
    }
  });
});

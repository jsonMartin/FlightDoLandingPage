(function() {
  $(function() {
    return $('.chosen-select').chosen({
      allow_single_deselect: true,
      no_results_text: 'No results matched',
      width: '95%'
    });
  });

}).call(this);

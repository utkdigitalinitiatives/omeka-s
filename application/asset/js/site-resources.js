(function($) {
    $(document).ready(function() {
        var advancedSearch = $('#advanced-search');
        $(document).on('change', '[name="item_assignment_action"]', function() {
            var selectedValue = $(this).val();
            if ((selectedValue == 'no_action') || (selectedValue == 'remove_all')) {
                advancedSearch.addClass('inactive');
            } else {
                advancedSearch.removeClass('inactive');
            }
        });

        new Sortable(document.getElementById('site-item-sets'), {
            draggable: '.resource-row',
            handle: '.sortable-handle',
        });
    });
})(jQuery)

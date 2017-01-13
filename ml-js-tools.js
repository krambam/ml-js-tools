// detect internet explorer and polyfill / solve IE 11 problem
// of flexbox centering width only "min-height" set.
// -----------------------------------------------------------

function initIEFlexboxHeightFix() {
    if (hasBodyMsFlexPack()) {
        setCssHeightFromRealHeight();
        $(window).resize(function () {
            setCssHeightFromRealHeight();
        });
    }
}

function setCssHeightFromRealHeight() {
    var $flexContainers = $("*").filter(function () {
        return $(this).css('-ms-flex-pack') === 'center';
    });
    $flexContainers.each(function () {
        console.log($(this).height());
        if ($(this).css('min-height')) {
            $(this).css('height', $(this).height());
        }
    });
}

function hasBodyMsFlexPack() {
    return typeof document.body.style.msFlexPack === 'string';
}
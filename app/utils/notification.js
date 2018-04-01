export function alertError(message) {

    message = message ? message : "something wrong happed while processing your request !"
    alert(message);
}

export function alertSuccess(message) {

    alert(message)
}

export function showDialog(message, confirmFunc) {

    message = message ? message : "Are you sure to remove this item";

    mscConfirm(message, function () {
        confirmFunc();
    });
}

export function toggleMainNavigation(show) {

    let isMainMenuOpen =  $(".m-header__top").attr("data-main-menu-open") == 'true';
    if(isMainMenuOpen) {
        
        $(".m-menu__item--submenu").removeClass("m-menu__item--hover");
        $(".m-header__top").attr("data-main-menu-open", 'false');
        $("#overlay").hide();

    } else {

        $(".m-menu__item--submenu").addClass("m-menu__item--hover");
        $(".m-header__top").attr("data-main-menu-open", 'true');
        $("#overlay").show();
    }
}

export function toggleSidebar() {

    let isMainMenuOpen =  $(".m-header__top").attr("data-sidebar-menu-open") == 'true';

    if(isMainMenuOpen) {
        
        $(".m-dropdown-product-menu").removeClass("m-dropdown--open");
        $(".m-header__top").attr("data-sidebar-menu-open", 'false');
        $("#overlay").hide();

    } else {

        $(".m-dropdown-product-menu").addClass("m-dropdown--open");
        $(".m-header__top").attr("data-sidebar-menu-open", 'true');
        $("#overlay").show();
    }

}

function initalizeOverlayClick() {

    $("body").on("click", "#overlay,.m-header__top", function (e) {

        let isMainMenuOpen =  $(".m-header__top").attr("data-main-menu-open") == 'true';
        let sideBarOpen =  $(".m-header__top").attr("data-sidebar-menu-open") == 'true';
        let isOverlayVisible = $("#overlay").is(":visible");

        if (isOverlayVisible && isMainMenuOpen) {

            toggleMainNavigation();

        } 
        
        if (isOverlayVisible && sideBarOpen) {

            toggleSidebar();
        }
    });

    $("body").on("click", "#btn_menu_open", function (e) {

        toggleMainNavigation();
        e.stopImmediatePropagation();
        
    });

    $("body").on("click", "#btn_side_bar_menu", function (e) {

        toggleSidebar();
        e.stopImmediatePropagation()
    });
}

initalizeOverlayClick();
// nav bar initialization
document.addEventListener('DOMContentLoaded', function() {
    let nav_menu = document.querySelectorAll('.sidenav');
    M.Sidenav.init(nav_menu);
  });

// recipe form drop down selction
//  document.addEventListener('DOMContentLoaded', function() {
//    let category_name_selector = document.querySelectorAll('.dropdown-trigger');
//    M.Dropdown.init(category_name_selector);
//  });

// modal for recipe deletion

document.addEventListener('DOMContentLoaded', function() {
  let  question_del = document.querySelectorAll('.modal');
  M.Modal.init(question_del);
});

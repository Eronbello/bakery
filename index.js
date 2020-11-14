const menuItem = document.getElementsByClassName('header__icon')[0]

menuItem.onclick = function () {
  const menu = document.getElementsByClassName('header__menu')[0]
  if (menu.classList.contains('header__menu--open')) {
    menu.classList.remove('header__menu--open')
  } else {
    menu.classList.add('header__menu--open')
  }
}
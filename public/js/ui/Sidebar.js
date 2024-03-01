/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarMiniElement = document.querySelector('.sidebar-mini');

    document.querySelector('.sidebar-toggle').addEventListener('click', function (event) {
      event.preventDefault();

      sidebarMiniElement.classList.toggle('sidebar-open');
      sidebarMiniElement.classList.toggle('sidebar-collapse');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    Array.from(document.querySelectorAll('.menu-item')).forEach((menuItemElement) => {
      menuItemElement.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();

        switch (true) {
          case menuItemElement.classList.contains('menu-item_login'):
            App.getModal('login').open();
            break;
          case menuItemElement.classList.contains('menu-item_register'):
            App.getModal('register').open();
            break;
          case menuItemElement.classList.contains('menu-item_logout'):
            User.logout((err, response) => {
              if (response.success) {
                App.setState('init');
              }
            });
            break;
        }
      });
    });
  }
}
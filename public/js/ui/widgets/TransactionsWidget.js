/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    this.element = element;
    this.registerEvents();
  }

  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    Array.from(this.element.querySelectorAll('.btn')).forEach((btnElement) => {
      btnElement.addEventListener('click', (event) => {
        switch (true) {
          case btnElement.classList.contains('create-income-button'):
            App.getModal('newIncome').open();
            break;
          case btnElement.classList.contains('create-expense-button'):
            App.getModal('newExpense').open();
            break;
        }
      });
    });
  }
}

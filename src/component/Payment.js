// Підключаємо технологію для стилізації
import React from "react";
import styled, { css } from "styled-components";

// Створюємо компонент "Список платежів/транзакцій"
export default function Payment({ payment }) {
  // якщо в нас список платежів має
  // кількість (на англ length) = 0
  // то тоді ми виводимо іншу верстку
  if (payment.length === 0) {
    return (
      // Виддаємо в інтерфейс елемент-секції "Список платежів"
      <PaymentList>
        {/* Та ще надаємо текст, що список пустий */}
        <Empty>Немає транзакцій</Empty>
      </PaymentList>
    );
  }
  // якщо в нас вже є певні платежі в списку
  // то тут ми виводимо верстку блока всіх платежів
  // та за допомогою функції .map() яка приймає PaymentItem компонент
  // ми для кожного платежу виводимо інтерфейс платежа, який знаходиться в PaymentItem
  return <PaymentList>{payment.map(PaymentItem)}</PaymentList>;
}

// Ось сам код інтерфейсу одного платежа
function PaymentItem({ name, amount, type }, key) {
  return (
    <React.Fragment key={key}>
      {/* Вказуємо що створюємо блок одного платежа */}
      <PaymentBlock>
        {/* Вказуємо, що виводимо картинку іконки платежа з портрібними параметрами */}
        <PaymentIcon>
          <img src="/icon/payment.svg" width="40px" height="40px" alt="Icon" />
        </PaymentIcon>
        {/* Передаємо текст з інфою про платіж */}
        <PaymentText>{name}</PaymentText>
        {/* ось тут ми передаємо параметр type в наш тег */}
        {/* який відповідає за тип нашої платіжки: "+" (поповненя) чи "-" (оплата) */}
        {/* а також виводимо текст з типом та сумою платежа */}
        <PaymentAmount type={type}>
          {type}
          {amount}
        </PaymentAmount>
      </PaymentBlock>
    </React.Fragment>
  );
}

// Створюємо елемент "Немає транзакцій"
const Empty = styled.div`
  /* розмір тексту */
  font-size: 16px;

  /* колір */
  color: #aaa;

  /* включаємо режим верстки flex, щоб зробити потрібно позицінювання елементів */

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Створюємо елемент "Сума платежа"
const PaymentAmount = styled.div`
  /* розмір тексту суми транзакції */
  font-size: 20px;

  /* включаємо режим верстки flex, щоб зробити потрібно позицінювання елементів */

  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* ось тут ми отримуємо наш переданий параметр type */
  /* та можемо в залежності від type */
  /* змінювати колір тексту */

  ${({ type }) => {
    // === Якщо платіж має type "+" то буде цей код працювати
    if (type === "+") {
      return css`
        color: green;
      `;
    }
    // ===

    // === Якщо платіж має type "-" то буде цей код працювати
    if (type === "-") {
      return css`
        color: red;
      `;
    }
    // ===

    // === В інших випадках буде ось цей код працювати
    return css`
      color: #fff;
    `;
    // ===
  }}
`;

// Створюємо елемент "Іконка платежа"
const PaymentIcon = styled.div`
  /* змінити фон іконки транзакції  */
  background: #4a4a4a;
  /* змінити ширину іконки */
  max-width: 50px;

  /* змінити висотку іконки */
  min-height: 50px;

  /* змінити закруглення країв іконки */
  border-radius: 15px;

  /* включаємо режим верстки flex, щоб зробити потрібно позицінювання елементів */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentText = styled.div`
  /* змінити розмір тексту транзакції */
  font-size: 18px;

  /* змінити колір транзакції */
  color: #cfcfcf;

  /* робимо ширину на все місце */

  width: 100%;

  /* включаємо режим верстки flex, щоб зробити потрібно позицінювання елементів */

  display: flex;
  align-items: center;
`;

const PaymentList = styled.div`
  /* змінити закругленя країв  */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  /* змінити отступи від границь  */
  padding: 30px;

  /* змінити мінімальну ширину блоку */
  min-height: 120px;

  /* Робимо вертикальні відступи між елементами */
  gap: 24px;

  /* Включаємо табличний формат верстки */
  display: grid;
`;

// Створюємо елемент "Блок платежа"
const PaymentBlock = styled.div`
  /* Задаємо певний формат верстки для позицюнювання елементів */
  display: grid;
  grid-template-columns: 60px 4fr 1fr;

  /* Робимо вертикальні і горизонтальні відступи між елементами */
  gap: 0px 20px;

  /* Робимо блок на всю ширину */
  width: 100%;
`;

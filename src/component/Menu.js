import styled from "styled-components";

export default function Menu({ config }) {
  return (
    // Вказуємо створити блок-секцію для меню
    <MenuBlock>
      {/* в config нам приходить список кнопок
        за допомогою .map() ми для кожної кнопки
        виводимо певний кусок інтерфейсу який є знизу
      */}
      {config.map((button, key) => (
        // key потрібен для того, щоб надати кнопкам унікальний номер (це вимагає react.js технологія) (key генерується автоматично)
        // Вказуємо що хочемо вивести кнопку та при натисканні на кнопку відбувалась певна дія (функція), яка відбувається при натискані на кнопку (onClick)
        <ButtonBlock onClick={button.onClick} key={key}>
          {/* тут ми підгружаємо зображення */}
          <ButtonIcon src={button.img} alt="Button" />
          {/* тут ми підключаємо текст */}
          <ButtonText>{button.name}</ButtonText>
        </ButtonBlock>
      ))}
    </MenuBlock>
  );
}

// Створюємо елемент "Блок меню кнопок"
const MenuBlock = styled.div`
  /* Включаємо режим верстки для розміщення елементів*/
  display: flex;
  justify-content: space-around;

  /* Робимо внутрішні відступи 30px окрім нижнього краю */
  padding: 30px;
  padding-top: 0;

  /* Відступи між елементами в блоці */
  gap: 18px;

  /* Робимо ширину на все місце доступне */
  width: 100%;

  /* Робимо знизу лінію */
  border-bottom: 3px solid #292929;
`;

// Створюємо елемент "Блока одної кнопки"
const ButtonBlock = styled.button`
  /* відступи між картинкою та текстом кнопках */
  gap: 8px;

  /* додаємо можливість робити 
  плавну анімацію на 0.7 секунд */
  transition: opacity 0.7s;

  /* при наведенні на блок, курсор буде виглядати
    як у клікабельних елементах
   */
  cursor: pointer;

  /* при наведенні на блок 
    він стає прозорим на 30% (1 - 0.7)
   */
  &:hover {
    opacity: 0.7;
  }

  /* Робимо ширину 100px */
  width: 100px;

  /* Включаємо режим верстки для розміщення елементів*/
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Створюємо елемент "Іконка кнопки"
const ButtonIcon = styled.img`
  /* висота кнопки  */
  height: 48px;

  /* ширина кнопки */
  width: 48px;
`;

// Створюємо елемент "Текст кнопки"
const ButtonText = styled.div`
  /* робимо жирність тексту (400, 500, 600, 700) */
  font-weight: 400;

  /* розмір тексту */
  font-size: 17px;

  /* колір тексту */
  color: #aaa;

  /* висота рядка тексту */
  line-height: 22px;

  /* Робимо текст по центру */
  text-align: center;

  /* Робимо ширину на все місце доступне */
  width: 100%;
`;

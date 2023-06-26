// Підключаємо потрібну технологію для стилізації інтерфейса
import styled from "styled-components";

// Створюємо компонент "Шапка"
export default function Header({ name }) {
  // всередені компонент "Шапка" ми отримуємо параметр name
  // Повертаємо назад в інтерфейс елемент "Шапка", в якому буде виводитись параметр name (то текст, що в шапці)
  return <HeaderText>{name}</HeaderText>;
}

// Створюємо елемент "Текст Шапки"
const HeaderText = styled.div`
  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;

  /* Задаємо знизу лінію */
  border-bottom: 3px solid #292929;
`;

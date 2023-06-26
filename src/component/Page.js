// Підключаємо технологію для стилізації
import styled from "styled-components";

// Створюємо компонент Page
export default function Page({ children }) {
  return (
    <PageTag>
      {/* тут children це місце, куди буде виводитись все, 
      що знаходиться всередені Page компонент, тобто наші компоненти */}
      <Container>{children}</Container>
    </PageTag>
  );
}
// Створюємо елемент "Сторінка", який відповідає за екран
const PageTag = styled.div`
  /* робимо колір фону */
  background-color: #151515;

  /* робимо фон на всю ширину екрану*/
  width: 100%;
  min-height: 100vh;

  /* фіксуємо фон на одному місці */
  background-attachment: fixed;

  /* Робимо щоб по бокам був технічний відступ від країв екрану 
  на той випадок якщо ширина екрану маленька, щоб інтерфейс не налазив */
  padding: 15px;

  /* Включаємо режим верстки, робимо інтерфейс по центру екрану */
  display: flex;
  justify-content: center;
`;

// Створюємо елемент "Контейнер", який відповідає за область з інтерфейсом на екрані
const Container = styled.div`
  /* Задаємо максимальну ширину інтерфейса */
  max-width: 500px;
  width: 100%;

  /* Задаємо фон інтерфейса */
  background-color: #212121;

  /* Задаємо відступ від країв інтерфейсу для компонентів, щоб вони не назалили на края */
  border-radius: 15px;

  /* Якщо щось вилазить за інтерфейс, то ми обрізаємо його */
  overflow: hidden;
`;
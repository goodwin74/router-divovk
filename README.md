# Роутинг для VK Mini Apps

## Базовые компоненты
**DIVOVKProvider** - Обёртка для модальных окон.

**ActivityBlock** - Модальное окно
**Пропсы**
* `id` - ID модального окна
* `activityStyle` - Стили фона
* `activityContStyle` - Стили окна

**BtnToBlock** - Кнопка для открытия окна
**Пропсы**
* `id` - ID кнопка
* `className` - Классы кнопки
* `style` - Стили кнопки

## Базовый пример
Импорт
```jsx
import {DIVOVKProvider, ActivityBlock, BtnToBlock} from './router-divovk';
```
Структура
```jsx
<DIVOVKProvider>
<BtnToBlock toId={'block1'}>Создать заявку</BtnToBlock>
<BtnToBlock toId={'block2'}>Посмотреть заявки</BtnToBlock>
<BtnToBlock toId={'block3'}>Список сотрудников</BtnToBlock>
<ActivityBlock id={'block1'}>
<h1>Создание заявки</h1>
<button onClick={()=>{history.back()}}>Назад</button>
</ActivityBlock>
<ActivityBlock id={'block2'}>
<h1>Список заявок</h1>
<button onClick={()=>{history.back()}}>Назад</button>
</ActivityBlock>
<ActivityBlock id={'block3'}>
<h1>Список сотрудников</h1>
<button onClick={()=>{history.back()}}>Назад</button>
</ActivityBlock>
</DIVOVKProvider>
```

### Вызов окна в любом элементе

Используем контекст
```jsx 
const {showBlock} = useContext(DIVOVKContext);
```
Вызываем метод **showBlock** в onClick указывая id блока, который хотим показать
```jsx
<button onClick={()=>showBlock('id_block')}>Открыть</button>
```
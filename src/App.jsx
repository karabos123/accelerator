import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Roadmap from './components/Roadmap';
import TaskPanel from './components/TaskPanel';

const INITIAL_DATA = [
  {
    id: 'frontend',
    title: 'Frontend-разработчик',
    zoneName: 'Город интерфейсов',
    rank: 'Junior Explorer',
    progress: 0,
    xp: 150,
    badge: 'Мастер вёрстки',
    status: 'Доступно',
    task: {
      name: 'Сверстать адаптивную карточку профиля',
      description: 'Создай карточку пользователя с аватаром, именем, описанием и кнопкой действия.',
      status: 'Начать задачу', 
      currentQuestionIndex: 0,
      questions: [
        { q: 'Какое CSS свойство используется для создания flex-контейнера?', a: 'display: flex' },
        { q: 'Какой HTML тег используется для вставки изображения?', a: 'img' },
        { q: 'Как называется хук React для управления состоянием?', a: 'useState' }
      ]
    }
  },
  {
    id: 'backend',
    title: 'Backend-разработчик',
    zoneName: 'Башня API',
    rank: 'API Initiate',
    progress: 0,
    xp: 180,
    badge: 'Повелитель API',
    status: 'Доступно',
    task: {
      name: 'Создать простой REST API',
      description: 'Спроектируй минимальный API для списка задач: получение, добавление и изменение статуса.',
      status: 'Начать задачу',
      currentQuestionIndex: 0,
      questions: [
        { q: 'Какой HTTP метод используется для создания нового ресурса?', a: 'POST' },
        { q: 'Какой код статуса означает "Успешно создано"?', a: '201' },
        { q: 'В каком формате обычно передаются данные в REST API?', a: 'JSON' }
      ]
    }
  },
  {
    id: 'ml',
    title: 'ML-инженер',
    zoneName: 'Лаборатория данных',
    rank: 'Data Novice',
    progress: 0,
    xp: 200,
    badge: 'Укротитель данных',
    status: 'Доступно',
    task: {
      name: 'Обучить простую модель классификации',
      description: 'Подготовь небольшой набор данных, обучи простую модель и выведи результат.',
      status: 'Начать задачу',
      currentQuestionIndex: 0,
      questions: [
        { q: 'Какая библиотека Python чаще всего используется для работы с табличными данными?', a: 'pandas' },
        { q: 'Как называется процесс обучения модели на размеченных данных?', a: 'обучение с учителем' },
        { q: 'Какая метрика часто используется для оценки качества классификации?', a: 'accuracy' }
      ]
    }
  }
];

function App() {
  const [directions, setDirections] = useState(INITIAL_DATA);
  const [activeId, setActiveId] = useState('frontend');

  const activeDirection = directions.find(d => d.id === activeId);

  const handleStartTask = () => {
    setDirections(prev => prev.map(d => 
      d.id === activeId 
        ? { ...d, task: { ...d.task, status: 'В процессе' }, status: 'В процессе' }
        : d
    ));
  };

  const handleNextQuestion = () => {
    setDirections(prev => prev.map(d => {
      if (d.id !== activeId) return d;

      const isLastQuestion = d.task.currentQuestionIndex === d.task.questions.length - 1;
      const nextIndex = d.task.currentQuestionIndex + 1;
      const newProgress = Math.round((nextIndex / d.task.questions.length) * 100);

      if (isLastQuestion) {
        return { 
          ...d, 
          progress: 100, 
          task: { ...d.task, status: 'Завершено', currentQuestionIndex: d.task.currentQuestionIndex }, 
          status: 'Завершено' 
        };
      } else {
        return { 
          ...d, 
          progress: newProgress,
          task: { ...d.task, currentQuestionIndex: nextIndex } 
        };
      }
    }));
  };

  return (
    <div className="app-container">
      <Sidebar />
      <Topbar />
      <Roadmap 
        directions={directions} 
        activeId={activeId} 
        onSelect={setActiveId} 
      />
      <TaskPanel 
        direction={activeDirection}
        onStart={handleStartTask}
        onNext={handleNextQuestion}
      />
    </div>
  );
}

export default App;

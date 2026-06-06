import React from 'react';
import { Target, Zap, Trophy, ShieldCheck, ChevronRight } from './Icons';
import ProgressBar from './ProgressBar';
import BadgeList from './BadgeList';

const TaskPanel = ({ direction, onStart, onNext }) => {
  const [answer, setAnswer] = React.useState('');
  const [error, setError] = React.useState(false);

  if (!direction) return null;

  const isCompleted = direction.task.status === 'Завершено';
  const isInProgress = direction.task.status === 'В процессе';
  const currentQuestion = direction.task.questions[direction.task.currentQuestionIndex];

  const handleSubmit = () => {
    if (answer.toLowerCase().trim() === currentQuestion.a.toLowerCase()) {
      onNext();
      setAnswer('');
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="task-panel glass scrollable" style={{ 
      padding: '24px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px' 
    }}>
      {/* Current Task Card */}
      <div className="info-card" style={{ 
        padding: '20px', 
        borderRadius: 'var(--radius-md)', 
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--glass-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--accent-purple)' }}>
          <Target size={18} />
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Текущая задача</span>
        </div>
        
        <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>{direction.task.name}</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: '1.5', marginBottom: '20px' }}>
          {direction.task.description}
        </p>

        {isInProgress && (
          <div style={{ marginBottom: '20px', padding: '15px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.05)', border: error ? '1px solid #ef4444' : '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent-cyan)' }}>
                Вопрос {direction.task.currentQuestionIndex + 1} из {direction.task.questions.length}
              </p>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: 'white' }}>{currentQuestion.q}</p>
            <input 
              type="text" 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Введите ваш ответ..."
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                backgroundColor: 'rgba(0,0,0,0.2)',
                color: 'white',
                outline: 'none',
                marginBottom: '10px'
              }}
            />
            {error && <p style={{ color: '#ef4444', fontSize: '0.75rem' }}>Неправильный ответ, попробуйте еще раз</p>}
          </div>
        )}

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
            <span style={{ color: 'var(--text-dim)' }}>Прогресс задачи</span>
            <span style={{ color: 'var(--accent-cyan)' }}>{direction.progress}%</span>
          </div>
          <ProgressBar progress={direction.progress} color="var(--accent-cyan)" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            padding: '6px 12px', 
            borderRadius: '20px', 
            background: 'rgba(251, 191, 36, 0.1)',
            color: '#fbbf24',
            fontSize: '0.85rem'
          }}>
            <Zap size={14} fill="#fbbf24" />
            <span>{direction.xp} XP</span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            padding: '6px 12px', 
            borderRadius: '20px', 
            background: 'rgba(16, 185, 129, 0.1)',
            color: 'var(--accent-green)',
            fontSize: '0.85rem'
          }}>
            <Trophy size={14} />
            <span>{direction.badge}</span>
          </div>
        </div>

        {!isCompleted ? (
          <button 
            onClick={isInProgress ? handleSubmit : onStart}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: isInProgress ? 'var(--accent-green)' : 'var(--accent-blue)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
          >
            {isInProgress ? 'Проверить ответ' : 'Начать задачу'}
            <ChevronRight size={18} />
          </button>
        ) : (
          <div style={{
            padding: '12px',
            borderRadius: '12px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: 'var(--accent-green)',
            textAlign: 'center',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <ShieldCheck size={20} />
            Задача завершена
          </div>
        )}
      </div>

      {/* Direction Progress */}
      <div className="info-card" style={{ 
        padding: '20px', 
        borderRadius: 'var(--radius-md)', 
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--glass-border)'
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '15px' }}>Прогресс направления</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{direction.title}</span>
            <span style={{ fontWeight: 'bold' }}>{direction.progress}%</span>
          </div>
          <ProgressBar progress={direction.progress} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '4px' }}>
            <span style={{ color: 'var(--text-dim)' }}>Ранг:</span>
            <span style={{ color: 'var(--accent-cyan)' }}>{direction.rank}</span>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="info-card" style={{ 
        padding: '20px', 
        borderRadius: 'var(--radius-md)', 
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--glass-border)'
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '15px' }}>Награды</h3>
        <BadgeList direction={direction} />
      </div>
    </div>
  );
};

export default TaskPanel;

import React from 'react';
import { Target, Zap, Trophy, ShieldCheck, ChevronRight, Gem } from './Icons';
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
    <div className="task-panel" style={{ 
      padding: '24px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px',
      backgroundColor: 'var(--bg-sidebar)',
      borderLeft: '1px solid var(--glass-border)',
      height: '100%',
      overflowY: 'auto'
    }}>
      {/* Current Task Card */}
      <div className="info-card glass" style={{ 
        padding: '20px', 
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-white)' }}>
            <Target size={18} color="var(--accent-purple)" />
            <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>Текущий квест</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>❯</span>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '8px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Zap size={24} color="var(--accent-blue)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-white)', marginBottom: '4px' }}>{direction.task.name}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: '1.4' }}>{direction.task.description}</p>
          </div>
        </div>

        <div style={{ marginTop: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>{direction.progress}%</span>
          </div>
          <ProgressBar progress={direction.progress} color="var(--accent-blue)" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Награда:</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: '600' }}>
            <Gem size={14} />
            <span>{direction.xp} XP</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: '600' }}>
            <Trophy size={14} />
            <span>50</span>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="info-card glass" style={{ 
        padding: '20px', 
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-white)' }}>Прогресс</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>❯</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['HTML', 'CSS', 'JavaScript', 'React'].map((skill, idx) => (
            <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '4px', 
                backgroundColor: idx === 0 ? '#e34c26' : idx === 1 ? '#264de4' : idx === 2 ? '#f7df1e' : '#61dafb',
                color: idx === 2 ? 'black' : 'white',
                fontSize: '0.6rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {skill[0]}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', width: '70px' }}>{skill}</span>
              <div style={{ flex: 1 }}>
                <ProgressBar progress={idx === 0 ? 100 : idx === 1 ? 72 : idx === 2 ? 41 : 12} color={idx === 0 ? '#e34c26' : 'var(--accent-blue)'} />
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', minWidth: '35px', textAlign: 'right' }}>
                {idx === 0 ? '100%' : idx === 1 ? '72%' : idx === 2 ? '41%' : '12%'}
              </span>
            </div>
          ))}
        </div>
        <button style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', fontSize: '0.8rem', cursor: 'pointer', textAlign: 'left', padding: '0' }}>Смотреть все навыки ❯</button>
      </div>

      {/* Interactive Task / Quiz Area */}
      {isInProgress && (
        <div className="info-card glass" style={{ 
          padding: '20px', 
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'rgba(59, 130, 246, 0.05)',
          border: error ? '1px solid #ef4444' : '1px solid var(--accent-blue)'
        }}>
          <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-cyan)', marginBottom: '10px' }}>
            Вопрос {direction.task.currentQuestionIndex + 1} из {direction.task.questions.length}
          </p>
          <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: 'var(--text-white)' }}>{currentQuestion.q}</p>
          <input 
            type="text" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Введите ответ..."
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid var(--glass-border)',
              backgroundColor: 'var(--bg-deep)',
              color: 'white',
              outline: 'none',
              marginBottom: '10px'
            }}
          />
          {error && <p style={{ color: '#ef4444', fontSize: '0.75rem' }}>Попробуйте еще раз</p>}
        </div>
      )}

      {/* Actions */}
      <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
        {!isCompleted ? (
          <button 
            onClick={isInProgress ? handleSubmit : onStart}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'var(--accent-purple)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
            }}
          >
            {isInProgress ? 'Продолжить' : 'Начать квест'}
            <ChevronRight size={18} />
          </button>
        ) : (
          <div style={{
            padding: '14px',
            borderRadius: '8px',
            backgroundColor: 'rgba(46, 160, 67, 0.15)',
            color: 'var(--accent-green)',
            textAlign: 'center',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: '1px solid var(--accent-green)'
          }}>
            <ShieldCheck size={20} />
            Завершено
          </div>
        )}
      </div>

      {/* Rewards Section */}
      <div className="info-card glass" style={{ 
        padding: '20px', 
        borderRadius: 'var(--radius-lg)',
        marginTop: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-white)' }}>Награды</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', cursor: 'pointer' }}>Смотреть все</span>
        </div>
        <BadgeList direction={direction} />
      </div>
    </div>
  );
};

export default TaskPanel;

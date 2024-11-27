import { XIcon } from 'lucide-react';
import styles from './StatusBar.module.css';

interface StatusBarProps {
  message: string | null;
  type: 'success' | 'error' | null; 
  onClose?: () => void;
}

export const StatusBar: React.FC<StatusBarProps> = ({ message, type, onClose }) => {
  if (!message || !type) return null;

  return (
    <div className={`${styles.statusBar} ${type === 'success' ? styles.success : styles.error}`}>
      {message}
      <XIcon absoluteStrokeWidth size={16} onClick={onClose} className='cursor-pointer'/>
    </div>
  );
};

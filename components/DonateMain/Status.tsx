import ReusableIcon from './ReusableIcon';
import styles from './DonateMain.module.css';

interface IStatus {
  text: string;
  icons: Array<'check' | 'xmark'>;
  spanText?: string;
}

export const Status: React.FC<IStatus> = ({ text, spanText, icons }) => {
  return (
    <div className={styles.donate_table_skills}>
      <div className={styles.donate_table_skills_name}>
        {text}
        {spanText && <span>{spanText}</span>}
      </div>
      <div className={styles.donate_table_skill}>
        {icons.map((iconType, index) => {
          let iconClass = styles.skill_status;

          if (index === 3) {
            iconClass = styles.specialIcon3; 
          } 
          else if (index === 4) {
            iconClass = styles.specialIcon4; 
          }
          else if (index === 2) {
            iconClass = styles.specialIcon2; 
          }
          else if (index === 1) {
            iconClass = styles.specialIcon1; 
          }
          else if (index === 0) {
            iconClass = styles.specialIcon0; 
          }

          return (
            <div key={index} className={iconClass}>
              <ReusableIcon type={iconType} color={iconType === 'check' ? 'green' : 'gray'} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

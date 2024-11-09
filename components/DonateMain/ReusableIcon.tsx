import { CheckIcon, XIcon } from 'lucide-react';
import styles from './DonateMain.module.css'
import { ChevronRightIcon } from '@radix-ui/react-icons';

interface IIconProps {
  type: 'check' | 'xmark' | 'none'
  color: string;
}

const ReusableIcon: React.FC<IIconProps> = ({ type, color }) => {
  if (type === 'check') {
    return <CheckIcon color={color} />;
  } 
  else if (type === 'xmark') {
    return <XIcon color={color} />;
  }
  else if (type === 'none') {
    return null
  }

  return null;
};

export default ReusableIcon;

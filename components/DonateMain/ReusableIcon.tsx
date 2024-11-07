import { CheckIcon, XIcon } from 'lucide-react';

interface IIconProps {
  type: 'check' | 'xmark'
  color: string;
}

const ReusableIcon: React.FC<IIconProps> = ({ type, color }) => {
  if (type === 'check') {
    return <CheckIcon color={color} />;
  } else if (type === 'xmark') {
    return <XIcon color={color} />;
  }

  return null;
};

export default ReusableIcon;

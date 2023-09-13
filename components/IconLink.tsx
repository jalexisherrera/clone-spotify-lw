import { IconType } from 'react-icons';

interface IconLinkProps {
  text: string;
  ActiveIcon: IconType;
  InactiveIcon: IconType;
  isActive?: boolean;
}

const IconLink = ({ text, ActiveIcon, InactiveIcon, isActive = false }: IconLinkProps) => {
  return (
    <div
      className={`flex items-center gap-4 ${
        isActive ? 'text-white' : 'text-mid-gray hover:text-white'
      } hover:cursor-pointer`}
    >
      {isActive ? <ActiveIcon className='text-3xl' /> : <InactiveIcon className='text-3xl' />}
      <span className='font-semibold'>{text}</span>
    </div>
  );
};

export { IconLink };

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Button } from './Button';
import { LogInDialog } from './Dialogs/LogInDialog';
import { useState } from 'react';

const Navbar = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  
  const handleLogInClick = () => {
    setDialogOpen(true);
  };

    return (
        <nav className='flex items-center justify-between px-5 py-2'>
        <div className='flex text-xl text-mid-gray-2 gap-2'>
          <div className='bg-spotify-black p-1 rounded-full'>
            <BsChevronLeft />
          </div>
          <div className='bg-spotify-black p-1 rounded-full'>
            <BsChevronRight />
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='flex gap-2'>
            <span className='wide-text'>Premium</span>
            <span className='wide-text'>Support</span>
            <span className='wide-text'>Download</span>
          </div>
          <div className='border border-white h-8' />
          <div className='flex items-center gap-4'>
            <span className='wide-text'>Sign up</span>
            <Button text='Log in' type='primary' handleClick={handleLogInClick} />
          </div>
        </div>
        <LogInDialog isOpen={isDialogOpen} setOpen={setDialogOpen} />
      </nav>
     );

};

export {Navbar};
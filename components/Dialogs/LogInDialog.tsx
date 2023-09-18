import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '../Button';

interface LogInDialogProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LogInDialog = ({ isOpen, setOpen }: LogInDialogProps) => {
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle className='bg-spotify-gray'>
        <span className='text-white'>Sign in</span>
      </DialogTitle>
      <DialogContent className='bg-spotify-gray'>
        <div className='flex flex-col'>
          <span className='text-white '>hola, soy un dialogo</span>
          <div className='flex gap-2'>
            <Button text='Sign in' />
            <Button text='Close' handleClick={handleCloseDialog} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LogInDialog };

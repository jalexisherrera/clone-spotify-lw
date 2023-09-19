import { IconLink } from './IconLink';
import { SpotifyLogo } from './SpotifyLogo';
import { GoHome, GoHomeFill, GoPlus, GoSearch } from 'react-icons/go';
import { BiLibrary, BiSolidSearch } from 'react-icons/bi';
import { Card } from './Card';

const Sidebar = () => {
  return (
    <aside className='w-[450px] p-2 flex flex-col gap-2'>
      <div className='container-card flex flex-col gap-5 px-6 py-4'>
        <div className='mx-1'>
          <SpotifyLogo />
        </div>
        <IconLink isActive ActiveIcon={GoHomeFill} InactiveIcon={GoHome} text='Home' />
        <IconLink ActiveIcon={BiSolidSearch} InactiveIcon={GoSearch} text='Search' />
      </div>
      <div className='container-card flex flex-col gap-4 px-2 py-4 h-full'>
        <div className='flex items-center justify-between px-3g'>
          <IconLink ActiveIcon={BiLibrary} InactiveIcon={BiLibrary} text='Your Library' />
          <div className='text-xl rounded-full text-mid-gray hover:text-white cursor-pointer hover:bg-black p-1'>
            <GoPlus />
          </div>
        </div>
        <Card
          title='Create your first playlist'
          description={`It's easy, we'll help you`}
          buttonText='Create playlist'
        />
        <Card
          title={`Let's find some podcasts to follow`}
          description={`We'll keep you updated on new episodes`}
          buttonText='Browse podcasts'
        />
        <div></div>
      </div>
    </aside>
  );
};

export { Sidebar };
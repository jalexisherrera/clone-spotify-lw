import Image from 'next/image';

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard = ({ title, description, image }: PlaylistCardProps) => {
  return (
    <div className='w-[192px] bg-spotify-light-black-2 flex flex-col p-3 rounded-md gap-2 hover:bg-dark-gray-2 hover:cursor-pointer'>
      <Image className='rounded-md' alt='Playlist image' src={image} height={160} width={160} />
      <span className='font-semibold text-white text-lg'>{title}</span>
      <span className='text-mid-gray'>{description}</span>
    </div>
  );
};

export { PlaylistCard };

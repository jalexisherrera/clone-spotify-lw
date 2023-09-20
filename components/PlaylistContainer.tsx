import { PlaylistCard } from './PlaylistCard';

interface PlaylistContainerProps {
  name: string;
  data: {
    id: string;
    image: string;
    title: string;
    description: string;
  }[];
}

const PlaylistContainer = ({ name, data }: PlaylistContainerProps) => {
  return (
    <section className='flex flex-col gap-5'>
      <div className='flex justify-between'>
        <span className='text-white text-2xl font-bold'>{name}</span>
        <span>Show all</span>
      </div>
      <div className='flex justify-around'>
        {data.map((item) => {
          return (
            <PlaylistCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export { PlaylistContainer };

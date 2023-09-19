import {PlaylistCard} from './PlaylistCard';

interface PlaylistContainerProps {
    name: string;
}

const PlaylistContainer = ({name}: PlaylistContainerProps) => {
    return (
        <section className='flex flex-col gap-5'>
            <div className='flex justify-between'>
                <span className='text-white text-2xl font-bold'>{name}</span>
                <span>Show all</span>
            </div>
            <div className='flex'>
                <PlaylistCard 
                image='/image/todays-top-hits.jpg'
                title='Today Top Hits'
                description='Jung kook is on top of the Hottest 50!' 
                />
            </div>
        </section>
    );
};

export {PlaylistContainer};
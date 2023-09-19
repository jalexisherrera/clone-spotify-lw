import { Navbar } from '@/components/Navbar';
import { PlaylistContainer } from '@/components/PlaylistContainer';
import { Sidebar } from '@/components/Sidebar';

const Home = () => {
  return (
    <div className='bg-black text-white w-full h-screen flex'>
      <Sidebar />
      <main className='w-full p-2 h-full'>
        <div className='container-card flex flex-col h-full'>
          <Navbar />
          <div className='bg-gradient-to-t from-spotify-light-black to-spotify-light-black-3 px-4 h-full flex flex-col gap-7'>
            <PlaylistContainer name={'Spotify Playlist'} />  
            <PlaylistContainer name={'Focus'} />
          </div>    
          
        </div>
      </main>
    </div>
  );
};

export default Home;

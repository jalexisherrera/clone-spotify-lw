import { Sidebar } from '@/components/Sidebar';

const Home = () => {
  return (
    <div className='bg-black text-white w-full h-screen flex'>
      <Sidebar />
      <main className='debug w-full'>
        <nav>
          <div>flechas de navegacion</div>
          <div>
            <span>premium support</span>
            <span>download</span>
            <span>sign up</span>
            <span>log in</span>
          </div>
        </nav>
        <div>
          <section>spotify playlists</section>
          <section>focus</section>
        </div>
      </main>
    </div>
  );
};

export default Home;

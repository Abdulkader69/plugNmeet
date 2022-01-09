import Footer from "./components/Footer";
import Header from "./components/Header";
import ParticipantsModule from './components/ParticipantsModule';
import MessageModule from './components/MessageModule';

function App() {
  return (
    <div className="App bg-[aliceblue]">
      <Header />
      <div className="main-content h-[calc(100vh-180px)] relative flex items-center justify-center">
        <div className="main-content-inner">
          <p className="text-center text-xl font-semibold mb-2">Hugo Reedus' Meeting Re: New Release Discussion</p>
          <hr className="h-2px w-52 m-auto" />
          <p className="text-center text-lg font-semibold mb-2">Starting soon... Wait to be admitted</p>
        </div>
        <MessageModule />
        <ParticipantsModule />
      </div>
      <Footer />
    </div>
  );
}

export default App;

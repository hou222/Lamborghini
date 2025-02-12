import Header from "./scenes/header";
import mp4 from "./assets/Lamborghini.mp4";
function App() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen ">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full h-screen z-10 bg-cover object-cover"
        >
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      {/* <div className="z-10">
        <div className="bg-yellow-800">
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
        </div>
        
      </div> */}
    </div>
  );
}

export default App;

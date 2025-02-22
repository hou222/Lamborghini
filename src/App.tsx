import Header from "./scenes/header";
import mp4 from "./assets/Gintani Equipped Lamborghini Aventador SVJ  _ 4K(480P).mp4";
function App() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen -z-10">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full h-screen z-10 bg-cover object-cover relative "
        >
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      <div className="z-10">
        <div className="bg-slate-300">
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
        </div>
        <div className="bg-red-200">
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
        </div>
        <div className="bg-blue-200">
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
        </div>
      </div>
    </div>
  );
}

export default App;

import Header from "../components/Header";
import "../styles/misc.css";

export default function dashboard() {
  return (
    <div className="w-full h-screen bg-bg flex flex-col">
      <Header />
      <div className="flex flex-col h-screen">
        <div className="flex flex-col self-center h-full items-center mt-52">
                  <img src="/assets/ymhd2.png" alt="" className="w-96 h-96" />
                  <span className="text-7xl thefont text-lgrey">YELLOW MINDS</span>
                  <span className="text-7xl curfont text-yellow mt-3">Let the world see your ambition!</span>
        </div>
      </div>
    </div>
  );
}

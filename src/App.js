import Navbar from "./components/navbar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="flex flex-col md:flex-row gap-5 px-5 py-5">
        <div className="sidebar w-full md:w-[20%] p-5 shadow-md">
          <SideBar />
        </div>
        <div className="content w-full md:w-[80%] bg-slate-100 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <article>
            <figure>
              <img src="https://picsum.photos/id/30/500/500" alt="" />
            </figure>
            <div className="info mt-5">
              <h3 className="title text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text text-slate-500 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                veritatis praesentium tenetur natus qui inventore dolor et error
                necessitatibus ut!
              </p>
              <a href="/home/ID">
                <button className="bg-white px-5 shadow py-2 rounded">
                  Read More
                </button>
              </a>
            </div>
          </article>
          <article>
            <figure>
              <img src="https://picsum.photos/id/30/500/500" alt="" />
            </figure>
            <div className="info mt-5">
              <h3 className="title text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text text-slate-500 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                veritatis praesentium tenetur natus qui inventore dolor et error
                necessitatibus ut!
              </p>
              <a href="/home/ID">
                <button className="bg-white px-5 shadow py-2 rounded">
                  Read More
                </button>
              </a>
            </div>
          </article>
          <article>
            <figure>
              <img src="https://picsum.photos/id/30/500/500" alt="" />
            </figure>
            <div className="info mt-5">
              <h3 className="title text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text text-slate-500 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                veritatis praesentium tenetur natus qui inventore dolor et error
                necessitatibus ut!
              </p>
              <a href="/home/ID">
                <button className="bg-white px-5 shadow py-2 rounded">
                  Read More
                </button>
              </a>
            </div>
          </article>
          <article>
            <figure>
              <img src="https://picsum.photos/id/30/500/500" alt="" />
            </figure>
            <div className="info mt-5">
              <h3 className="title text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text text-slate-500 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                veritatis praesentium tenetur natus qui inventore dolor et error
                necessitatibus ut!
              </p>
              <a href="/home/ID">
                <button className="bg-white px-5 shadow py-2 rounded">
                  Read More
                </button>
              </a>
            </div>
          </article>
          <article>
            <figure>
              <img src="https://picsum.photos/id/30/500/500" alt="" />
            </figure>
            <div className="info mt-5">
              <h3 className="title text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text text-slate-500 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                veritatis praesentium tenetur natus qui inventore dolor et error
                necessitatibus ut!
              </p>
              <a href="/home/ID">
                <button className="bg-white px-5 shadow py-2 rounded">
                  Read More
                </button>
              </a>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;

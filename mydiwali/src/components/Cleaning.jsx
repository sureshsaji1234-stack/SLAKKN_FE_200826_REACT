import HomeClean from "../assets/home.jpeg"
const Cleaning = () => {
  return (
    <><div id="clean" className="scroll-mt-20 bg-[#fffaf2] px-6 py-20 sm:px-10">
      <div className="shine-card mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-amber-200 p-6 shadow-sm transition duration-300 hover:border-amber-400 sm:p-10 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <img
                    src={HomeClean}
                    alt="Home"
                    className="mx-auto aspect-square w-full max-w-sm rounded-[2.5rem] object-cover shadow-xl shadow-orange-900/10 transition duration-300 hover:shadow-2xl"
                  />
        </div>
        <div className="order-1 md:order-2">
          <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-900">GETTING THE HOME READY</p>
          <h2 className="text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">My Contribution to cleaning</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">I already told you I woke up at 11am,everything is already done when i woke up. When it comes to the sweets, we are always on the receiving side.</p>
        </div>
      </div>
    </div></>
    
  )
}

export default Cleaning
//  className="order-2 grid grid-cols-2 gap-2 md:order-1"
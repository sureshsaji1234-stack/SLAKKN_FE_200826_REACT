import Sweets from "../assets/sweets.png"
const Famtime = () => {
  return (
    <>
    <div id="sweet" className="scroll-mt-20 bg-[#fffaf2] px-6 py-20 sm:px-10">
          <div className="shine-card mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-amber-200 p-6 shadow-sm transition duration-300 hover:border-amber-400 sm:p-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <img
                        src={Sweets}
                        alt="Sweets"
                        className="mx-auto aspect-square w-full max-w-sm rounded-[2.5rem] object-cover shadow-xl shadow-orange-900/10 transition duration-300 hover:shadow-2xl"
                      />
            </div>
            <div className="order-1 md:order-2">
              <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-900">DIWALI FEAST</p>
              <h2 className="text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">Food is Life</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">My brother's father-in-law's side of the family always makes the best sweets. I even spent the entire afternoon with them along with lunch.As usual, in the evening,we started our Night-time fire crackers.I dont know if anyone experienced this ,but there will always be a neighbour who only use the burst crackers while every other people doesnt. It pisses me off so much that we decided to piss them off.
                <span className="font-bold">Paper Bomb!</span>We took the paper bomb and fired it placing close to them, The sound made them stop for an hour. <span className="font-bold">Satisfaction</span>
              </p>
            </div>
          </div>
        </div></>
    
  )
}

export default Famtime

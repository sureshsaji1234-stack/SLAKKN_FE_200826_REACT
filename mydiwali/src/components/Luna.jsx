import Lumi from "../assets/lunaimg.jpeg"
const Luna = () => {
  return (
    <>
    <div id="luna" className="scroll-mt-20 relative overflow-hidden bg-[#fffaf2] px-6 py-20 sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-amber-200 p-6 shadow-sm transition duration-300 hover:border-amber-400 hover:shadow-[0_0_28px_rgba(245,158,11,0.4)] sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
        <img
          src={Lumi}
          alt="Luna"
          className="mx-auto aspect-square w-full max-w-sm rounded-[2.5rem] object-cover shadow-xl shadow-orange-900/10 transition duration-300 hover:shadow-2xl"
        />
        <div>
          <p className="mb-4 inline-flex rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold tracking-wide text-orange-800 shadow-sm">Golden Retriever</p>
          <h1 className="text-4xl font-black tracking-tight text-orange-950 sm:text-6xl">A culprit who is Innocent</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-orange-900/80">She is the reason the house is a mess. My brother and my sister-in-law went to my brother's father-in-law's house because this is <span className="font-bold">Thala Diwali</span> to them.
          Yes, it does sound like that relationship question in aptitude class,but i don't know how to explain this in another way.</p>
        </div>
        
      </div>
    </div>

      
    </>
  )
}

export default Luna

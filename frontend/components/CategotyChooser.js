const CategotyChooser = () => (
    <div className="w-full flex justify-center mt-20">
        <div className="h-10 w-86 p-1 flex rounded-lg justify-center border-2 border-[#1075B2]">
            <button className="border-solid bg-[#1075B2] rounded-md text-white w-32 text-xs">НОВИНКИ</button>
            <button className="border-solid text-[#1075B2] w-32 text-xs">ПОПУЛЯРНЫЕ</button>
            <button className="border-solid text-[#1075B2] w-32 text-xs">МЫ РЕКОМЕНДУЕМ</button>
        </div>
    </div>
)

export default CategotyChooser;
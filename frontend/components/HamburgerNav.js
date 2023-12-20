
const HamburgerNav = ({ isHamOpen }) => {
    return (
        <div className="absolute z-50">
            <span className={`bg-steel-500 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${isHamOpen ?
                'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}>
            </span> 
            <span className={`bg-steel-500 block transition-all duration-300 ease-out
                h-0.5 w-6 rounded-sm my-0.5 ${isHamOpen ?
                'opacity-0' : 'opacity-100'
            }`}>
            </span>
            <span className={`bg-steel-500 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${isHamOpen ?
                '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}>
            </span>
        </div>
    )

}

export default HamburgerNav

import React, { useState } from 'react';

const HamburgerNav = (isHamOpen, handleHamClick) => {

    return (
        <button onClick={handleHamClick}>
            <span className="bg-steel-500 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm z-[100] ${isOpen ?
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }">
            </span>
            <span className="bg-steel-500 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                    'opacity-0' : 'opacity-100'
                    }">

            </span>
            <span className="bg-steel-500 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${isOpen ?
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }">
            </span>
        </button>
    )

}

export default HamburgerNav

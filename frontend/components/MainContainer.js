import React from 'react';

const MainContainer = (props) => {
    return (
        <div className={"w-full flex justify-center min-h-[calc(100vh-176px-92px-1rem)]"}>
            <div className={"max-w-screen-xl w-full px-2"}>
                {props.children}
            </div>
        </div>
    );
};

export default MainContainer;
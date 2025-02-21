"use client";

import React, {FC, useEffect} from 'react';


type Props = {
    children: React.ReactNode
    h1: React.ReactNode
};

const DialogWithServerContent: FC<Props> = ({children, h1}) => {
    console.log("client side component");
    useEffect(() => {
        console.log("client side component useEffect");
    }, []);
    return (
        <div>
            <h1 onClick={() => console.log("test")}>{h1}</h1>
            {children}
        </div>
    );
};

export default DialogWithServerContent;

import {useState} from 'react'
import React from 'react';

interface Props {
    count: number;
}


export const StatDisplay: React.FC<Props> = ({count}) => {
    return(
        <div>
            <p>{count}</p>
        </div>
    )
}
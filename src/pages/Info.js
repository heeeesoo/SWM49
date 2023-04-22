import React from 'react';
import { useParams } from 'react-router-dom';
import info0 from "../data/0.json";
import info1 from "../data/1.json";
import info2 from "../data/2.json";
import info3 from "../data/3.json";
import info4 from "../data/4.json";

const Info = () => {
    const { num } = useParams();
    const arr = [info0,info1,info2,info3,info4];

    return (
        <div>
            {arr[Number(num)].name}
            <br/>
            {arr[Number(num)].text.split('\n').map(line => {
                return (
                    <span key={line}>{line}<br/></span>
                )
            })}
        </div>
    );
};

export default Info;
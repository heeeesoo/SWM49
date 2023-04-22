import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/data.json";
import info0 from "../data/0.json";
import info1 from "../data/1.json";
import info2 from "../data/2.json";
import info3 from "../data/3.json";
import info4 from "../data/4.json";

const Info = () => {
    const {id} = useParams();
    const data = "info"+id;

    return (
        <div>
            Info {id}
        </div>
    );
};

export default Info;
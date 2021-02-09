import {useEffect} from "react";
import TitleInterface from "../interfaces/TitleInterface";

const Title = (props: TitleInterface) => {
    useEffect(() => {
        document.title = `${props.text} - CBlog` || 'CBlog';
    }, [props.text]);
    return props.children;
};

export default Title;
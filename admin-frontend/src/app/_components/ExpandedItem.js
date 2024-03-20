import React from 'react';
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";

const ExpandedItem = ({content}) => {
    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    return (
        <div className={"flex flex-col justify-between text-base"}>
            <h3 className={'text=lg font-bold'}>Отзыв:</h3>
            <p style={{width: '70%', marginTop: 6, marginBottom: 16}}>{content}</p>

            <h3 className={'text=lg font-bold mb-2'}>Ваш ответ:</h3>
            <TextArea
                showCount
                maxLength={100}
                onChange={onChange}
                placeholder="Поле для ответа"
                style={{height: 120, width: '70%'}}
            />

            <Button style={{marginTop: 24, width: 150}} icon={<EditOutlined/>}>Ответить</Button>
        </div>);
};
export default ExpandedItem;
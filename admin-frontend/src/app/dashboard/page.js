import React from 'react';
import {Col, Row, Statistic} from "antd";


const Page = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Количество пользователей" value={112893}/>
                </Col>
                <Col span={12}>
                    <Statistic title="" value={112893}/>
                </Col>
            </Row>
        </div>
    );
};

export default Page;
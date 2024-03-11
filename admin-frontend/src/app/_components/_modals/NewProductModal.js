import React from 'react';
import {Modal} from "antd";

const NewProductModal = ({open, setOpen}) => {
    return (
        <Modal
 //           title="Добавление нового продукта"
            okText={"Понятно"}
            cancelText={"Отмена"}
            visible={open}
            onOk={() => (setOpen(false))}
            onCancel={() => (setOpen(false))}
        >
            Временно не доступно
        </Modal>
    );
};

export default NewProductModal;
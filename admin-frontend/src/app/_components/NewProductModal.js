import React from 'react';
import {Modal} from "antd";

const NewProductModal = ({open, setOpen}) => {
    return (
        <Modal
 //           title="Редактирование продукта"
            okText={"Понятно"}
            cancelText={"Отмена"}
            visible={open}
            onOk={() => (setOpen(false))}
            onCancel={() => (setOpen(false))}
        >
            Временно недоступно :/
        </Modal>
    );
};

export default NewProductModal;
import React from 'react';
import {Modal} from "antd";
import {ExclamationCircleFilled} from "@ant-design/icons";

const DeleteProductModal = ({open, setOpen}) => {
    return (
        <Modal
            title="Удаленный продукт будет невозможно восстановить!"
            okText={"Да"}
            icon={<ExclamationCircleFilled />}
            cancelText={"Отмена"}
            visible={open}
            okType={'danger'}
            onOk={() => (setOpen(false))}
            onCancel={() => (setOpen(false))}
        >
            Вы уверены что хотите удалить данный продукт?
        </Modal>
    );
};

export default DeleteProductModal;
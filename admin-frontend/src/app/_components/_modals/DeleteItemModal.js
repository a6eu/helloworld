import React from 'react';
import {Modal} from "antd";
import {ExclamationCircleFilled} from "@ant-design/icons";
import {getSession} from "@/lib";
import axios from "axios";

const DeleteItemModal = ({apiUrl, item, open, setOpen, setReloadData}) => {

    const deleteNewsById = async (id) => {
        const session = await getSession();
        const headers = {
            "Authorization": `Bearer ${session.user.accessToken}`,
        };

        const deleteUrl = apiUrl + `${id}/`;
        axios.delete(deleteUrl, { headers })
            .then(() => {
                setReloadData(true);
            })
            .catch((e) => {
                console.error('Error deleting news item:', e);
            });
    }

    return (
        <Modal
            title="Удаленный продукт будет невозможно восстановить!"
            okText={"Да"}
            icon={<ExclamationCircleFilled />}
            cancelText={"Отмена"}
            open={open}
            okType={'danger'}
            onOk={async () => {await deleteNewsById(item.id);
                        setOpen(false)}}
            onCancel={() => setOpen(false)}
        >
            Вы уверены что хотите удалить данный продукт?
        </Modal>
    );
};

export default DeleteItemModal;
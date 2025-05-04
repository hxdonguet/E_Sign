import React from 'react'
import style from './HistoryUpload.module.css'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPackages } from '../../app/features/api/packageSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const data = [
    {
        id: "1",
        document: "Document1.pdf",
        time_uploaded: "07/05/2025 00:00:00 AM",
        owner: "Undefined",
        status_of_sig: "Undefined",
        integrity: "Undefined",

    },
    {
        id: "2",
        document: "Document2.pdf",
        time_uploaded: "07/05/2025 00:00:00 AM",
        owner: "Undefined",
        status_of_sig: "Undefined",
        integrity: "Undefined",

    },
    {
        id: "3",
        document: "Document3.pdf",
        time_uploaded: "07/05/2025 00:00:00 AM",
        owner: "Undefined",
        status_of_sig: "Undefined",
        integrity: "Undefined",

    },{
        id: "4",
        document: "Document4.pdf",
        time_uploaded: "07/05/2025 00:00:00 AM",
        owner: "Undefined",
        status_of_sig: "Undefined",
        integrity: "Undefined",

    },
]
function HistoryUpload() {
    const document = useSelector(selectAllPackages);
    const [openDelete, setOpenDelete] = useState(document.map(() => false));

    const handleOpenRemove = (index) => {
        let newRemove = [...openDelete]
        newRemove[index] = !newRemove[index];
        setOpenDelete(newRemove);
    }

    return (
        <div className={style.container}>
            <div className={style.search}>
                <form className={style.form}>
                    <input type="text" placeholder="Tìm tên tài liệu..." />
                    <button className={style.button}>Tìm kiếm</button>
                </form>
                <button className={style.button}><Link to='/Dashboard'>Tải tài liệu mới</Link></button>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tài liệu</th>
                        <th scope="col">Thời gian tải lên</th>
                        <th scope="col">Chủ sở hữu</th>
                        <th scope="col">Trạng thái chữ ký số</th>
                        <th scope="col">Tính toàn vẹn</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td>{e.id}</td>
                                <td>{e.document}</td>
                                <td>{e.time_uploaded}</td>
                                <td>{e.owner}</td>
                                <td>{e.status_of_sig}</td>
                                <td>{e.integrity}</td>
                                <td className={style.text_center}>
                                    <div className={style.btn_group}>
                                        <div className={style.container_popup}>
                                            <button className={style.btn_edit_package}><Link to='#'>
                                                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></Link>
                                            </button>
                                        </div>
                                        <div className={style.container_popup}>
                                            <button className={style.btn_delete_package}
                                                onClick={() => handleOpenRemove(index)}>
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                            </button>
                                            {openDelete[index] && <DeleteForm index={index} package={e} handleRemove={handleOpenRemove} />}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default HistoryUpload

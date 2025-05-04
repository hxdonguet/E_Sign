import React from 'react'
import style from './Users.module.css'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPackages } from '../../app/features/api/packageSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const data = [
    {
        id: "1",
        user: "user1",
        username: "user1",
        password: "123456",
        email: "user@gmail.com",
        role: "Người dùng",

    },
    {
        id: "2",
        user: "user2",
        username: "user2",
        password: "123456",
        email: "user@gmail.com",
        role: "Người dùng",

    },
    {
        id: "3",
        user: "user3",
        username: "user3",
        password: "123456",
        email: "user@gmail.com",
        role: "Người dùng",

    },{
        id: "4",
        user: "user4",
        username: "user4",
        password: "123456",
        email: "user@gmail.com",
        role: "Người dùng",

    },
]
function Users() {
    const user = useSelector(selectAllPackages);
    const [openDelete, setOpenDelete] = useState(user.map(() => false));

    const handleOpenRemove = (index) => {
        let newRemove = [...openDelete]
        newRemove[index] = !newRemove[index];
        setOpenDelete(newRemove);
    }

    return (
        <div className={style.container}>
            <div className={style.search}>
                <form className={style.form}>
                    <input type="text" placeholder="Tìm người dùng..." />
                    <button className={style.button}>Tìm kiếm</button>
                </form>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên người dùng</th>
                        <th scope="col">Tên đăng nhập</th>
                        <th scope="col">Mật khẩu</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phân quyền</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td>{e.id}</td>
                                <td>{e.user}</td>
                                <td>{e.username}</td>
                                <td>{e.password}</td>
                                <td>{e.email}</td>
                                <td>{e.role}</td>
                                <td className={style.text_center}>
                                    <div className={style.btn_group}>
                                        <div className={style.container_popup}>
                                            <button className={style.btn_edit_package}><Link to='/EditUsers'>
                                                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon></Link>
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
export default Users

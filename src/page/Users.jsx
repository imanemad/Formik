import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/users/usersSlice"


const Users=()=>{
    const {loading,users,error}=useSelector(state=>state.users)
    const dispatch=useDispatch()


    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])

    return(
        <>
        {
            loading?<div>Loading</div>
            :error?
                (<h2>{error}</h2>)
            :

            (
                <div>
                    <table className="table bg-light my-5 mx-auto">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>نام</th>
                                <th className="d-md">نام کاربری</th>
                                <th className="d-md">ایمیل</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                users.map(u=>(
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td className="d-md">{u.username}</td>
                                        <td className="d-md">{u.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
        </>
    )
}
export default Users
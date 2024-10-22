import React, { useEffect, useState } from 'react';

let numOfPage=2
const TablePages = ({data,dataInfo,additionField}) => {
    const [tableData,setTableData]=useState([])
    const [currenPage,setCurrenPage]=useState(1)

    const [pages,setPages]=useState()
    const[pageCount,setPageCount]=useState(1)

    useEffect(()=>{
        let pCount=Math.ceil(data.length/numOfPage)
        setPageCount(pCount)
        let pArr=[]
        for(let i=1;i<=pCount;i++)pArr=[...pArr,i]
        setPages(pArr)
    },[data])

    useEffect(()=>{
        let start=(currenPage*numOfPage)-numOfPage
        let end=(currenPage*numOfPage)
        setTableData(data.slice(start, end))
    },[currenPage,data])

    return (
        <>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        {dataInfo.map(i=>(
                            <th key={i.feild}>{i.title}</th> 
                        ))}
                        {
                            additionField?(
                                <th>{additionField.title}</th>
                            ):null
                        }
                    </tr>
                </thead>
                <tbody>
                        {tableData.map(d=>(
                            <tr key={d.id}>
                                {dataInfo.map(i=>(
                                    <td key={i.feild+"_"+d.id}>{d[i.feild]}</td> 
                                ))}
                                {
                                    additionField?(
                                        <th>{additionField.elements(d.id)}</th>
                                    ):null
                                }
                            </tr>
                        ))}
                </tbody>
            </table>

            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                    <li className="page-item">
                        <span className={`page-link Cursor ${currenPage===1&&"disable"}`} onClick={()=>setCurrenPage(currenPage-1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>
                    {
                        pages.map(p=>(
                            <li className="page-item" key={p}>
                                <span className={`page-link Cursor ${currenPage === p &&"alert-success"}`} onClick={()=>setCurrenPage(p)}>{p}</span>
                            </li>
                    ))}
                    <li className="page-item">
                        <span className={`page-link Cursor ${currenPage===pageCount?"disable":""}`} onClick={()=>setCurrenPage(currenPage+1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default TablePages;

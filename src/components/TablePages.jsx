import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const TablePages = ({children,data,dataInfo,additionField,numOfPage,searchParams,loading}) => {
    const [initData,setInitData]=useState(data)
    const [searchChar,setSearchChar]=useState("")

    const [tableData,setTableData]=useState([])
    const [currenPage,setCurrenPage]=useState(1)

    const [pages,setPages]=useState([])
    const[pageCount,setPageCount]=useState(1)

    useEffect(()=>{
        let pCount=Math.ceil(initData.length/numOfPage)
        setPageCount(pCount)
        let pArr=[]
        for(let i=1;i<=pCount;i++)pArr=[...pArr,i]
        setPages(pArr)
    },[initData,numOfPage])

    useEffect(()=>{
        let start=(currenPage*numOfPage)-numOfPage
        let end=(currenPage*numOfPage)
        setTableData(initData.slice(start, end))
    },[currenPage,initData,numOfPage])

    useEffect(()=>{
        setInitData(data.filter(i=>i[searchParams.searcghField].includes(searchChar)))
        setCurrenPage(1)
    },[searchChar,data,searchParams])

    return (
        <>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3" style={{direction: "ltr"}}>
                        <input type="text" className="form-control" placeholder={searchParams.placeholder} onChange={e=>setSearchChar(e.target.value)}/>
                        <span className="input-group-text" >{searchParams.title}</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    {children}
                </div>
            </div>
            {
                loading?(<Loading/>):
                (
                    data.length?(
                        <table className="table table-responsive text-center table-hover table-bordered">
                            <thead className="table-secondary">
                                <tr>
                                    {dataInfo.map(i=>(
                                        <th key={i.feild}>{i.title}</th> 
                                    ))}
                                    {
                                        additionField?additionField.map((a,index)=>(
                                            <th key={"key_"+index}>{a.title}</th>
                                        )):null
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
                                                additionField?additionField.map((a,index)=>(
                                                    <td key={"key_"+index}>{a.elements(d)}</td>
                                                )):null
                                            }
                                        </tr>
                                    ))}
                            </tbody>
                        </table>):(
                        <h4 className='text-danger text-center mt-5'>موردی یافت نشد!</h4>
                    )
                )
            }

            {pages.length>1&&(
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
            )}
        </>
    );
}

export default TablePages;

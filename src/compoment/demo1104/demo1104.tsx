import React, { useState } from "react";
import {Table,Input, Button } from "antd";
import { title } from "process";
import { timeEnd,timeLog } from "console";
const Test1=()=>{
    const columms=[
        {title:'ID',dataIndex:'iD',key:'iD'},
        {title:'Student Code',dataIndex:'studentCode',key:'studentCode'},
        {title:'Student Name',dataIndex:'studentName',key:'studentName'},
        {title:'Final Test',dataIndex:'result',key:'result'},
        {title:'Home Town',dataIndex:'hometown',key:'hometown'}]

        const data=[
            {id:1,studentCode:'0909001',studentName:'Tạ Thái Minh Dương',result:8,hometown:'TPHCM'},
            {id:2,studentCode:'0909003',studentName:'Võ Minh Hạnh',result:8.5,hometown:'Hà Tĩnh'},
            {id:3,studentCode:'0909005',studentName:'Đặng Hoàng Việt',result:7.5,hometown:'Quảng Ngãi'},
            {id:4,studentCode:'0909007',studentName:'Trần Anh Tuấn',result:5,hometown:'Gia Lai'},
            {id:5,studentCode:'0909009',studentName:'Nguyễn Minh Phương',result:9,hometown:'Bình Định'}]
       
        const [searchData,setSearchData]=useState(data);
        const [searchText,setSearchText]=useState('');
        const myProvinces=['TPHCM','Hà Tĩnh'];
        return (
            <div>
                <div style={{display:"inline"}}>
                    Find student by name:<Input type="text" value={searchText} onChange={(e)=>{
                        setSearchData(data.filter(x=>x.studentName.toLowerCase().includes(e.currentTarget.value)))
                        setSearchText(e.currentTarget.value) } }

                        onKeyPress={(e)=>{
                            if(e.key=="Enter")
                            {
                                setSearchData(data.filter(x=>x.studentName.toLowerCase().includes(searchText.toLowerCase().trim())))
                            }
                            }
                        }
                        />&nbsp;
                        <input type="checkbox" onChange={(e)=>{
                            if(e.currentTarget.checked){
                                //Thêm Tiền Giang vào mảng myProvinces
                            }else{
                                //Xóa Tiền Giang khỏi mảng myProvinces
                            }
                        }}/>&nbsp;Khánh Hòa &nbsp;
                        
                        <input type="checkbox" onChange={(e)=>{
                            if(e.currentTarget.checked){
                                //Thêm Đồng Nai vào mảng myProvinces
                            }else{
                                //Xóa Đồng Nai khỏi mảng myProvinces
                            }
                        }}/>&nbsp;Đồng nai &nbsp;

                        <input type="checkbox" onChange={(e)=>{
                            if(e.currentTarget.checked){
                                //Thêm Bình Định vào mảng myProvinces
}else{
                                //Xóa Bình Định khỏi mảng myProvinces
                            }
                        }}/>&nbsp;Bình Định &nbsp;

                        <Button type="primary"
                        onClick={()=>{
                            let index:Number=data.findIndex(a=>a.result==5)
                            if(index!=-1)
                            alert(index);
                        }}
                        
                        >Lọc dữ liệu</Button>
                  
                </div>
            <Table columns={columms}
             dataSource={searchData}/>

            </div>
        )
    
}
export default Test1;

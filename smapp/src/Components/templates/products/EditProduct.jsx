import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

export function EditProduct()
{
    const {register,handleSubmit,setValue}= useForm();
                             const {id} =useParams();
                                const navigate =useNavigate();
                                  const [viewimage,setViewimage]=useState(null);

               const getSingleData=()=>{
                     axios.get(`http://localhost:4000/products/${id}`).then(res=>{
                               if(res.status==200)
                               {
                                 for(let props in res.data){
                                     setValue(props,res.data[props]);
                                 }
                               }
                        }).catch(err=>{
                            console.log(err);
                        })
               }        

               useEffect(getSingleData,[])
//Edit operation
     function updateProduct(p)
     {
      const formData = new FormData();

    formData.append('productName', p.productName);
    formData.append('productPrice', p.productPrice);
    formData.append('productCategory', p.productCategory);
    formData.append('isAvailable', p.isAvailable);
    formData.append('productImage', p.productImage[0]); 

           axios.put(`http://localhost:4000/products/${p.id}`,formData).then(res=>{
               if(res.status==200){
                alert("Product updated successfully!");
                 navigate("/viewproduct")
               }
           })
     }

     function geteditedproduct(){
         
    axios.get(`http://localhost:4000/products/${id}`).then(res => {
         if (res.status === 200) {
           for (let product in res.data) {
             if (product === 'productImage') {
               
               setViewimage(`data:image/jpg;base64,${res.data[product]}`);
             }
             setValue(product, res.data[product]);
           }
         }
       }).catch(err => {
         console.error('Error fetching product:', err);
       });
     }
     
       const imageHandle=(e)=>{
       
          let i = e.target.files[0];
         alert("image changing");
         if(i)
         {
           
           setViewimage(URL.createObjectURL(i));
           setValue('productImage',i.target.files[0]);
       }
     
       }
     
       useEffect(geteditedproduct,[]);
     

return(

    <div className="container w-50 p-5">
        <div className="'card">
            <div className="card-heading bg-warning p-2">
                <div className="card-title p-3">
                  <h3 className="card-title text-center p-3">Edit Product Details</h3>
</div>
<div className="card-body">

    <form onSubmit={handleSubmit(updateProduct)} className="border p-3 rounded bg-light">

        <div className="mb-3">
          <label className="form-label">Product name:</label>
          <input type="text" className="form-control" {...register("productName")} />
        </div>

        <div className="mb-3">
          <label className="form-label">Product price:</label>
          <input type="number" className="form-control" {...register("productPrice")} />
        </div>

        <div className="mb-3">
          <label className="form-label">Product category:</label>
          <input type="text" className="form-control" {...register("productCategory")} />
        </div>

        <div className="mb-3">
          <label className="form-check-label">Is available:</label>
          <input type="checkbox" className="form-check-input" {...register("isAvailable")} />
        </div>

        <div className='mb-3'>
           <label className='form-label'>ProductImage</label>
            <input type='file' className='form-control' {...register("productImage")}  onChange={imageHandle}></input>
           </div>

  <img src={viewimage} alt='hi' style= {{width:'100px',height:'100px'}}></img>
     
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success ">Update</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    )}

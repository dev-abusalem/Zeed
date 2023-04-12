import React, { useRef, useState } from 'react'
import {BiUserCircle, BiScreenshot, BiMobileAlt} from "react-icons/bi"
import {GiIdCard} from "react-icons/gi"
import {BsBank2, BsBookmarkCheck, BsGlobeAmericas} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {MdOutlineAccountBalanceWallet, MdGroups, MdConfirmationNumber} from "react-icons/md"
import {MdOutlineDriveFileRenameOutline , MdLocationPin, MdPermMedia} from "react-icons/md"
import logo from "../assets/images/logo1.png"
import {FaFileSignature,FaAddressBook,FaStore, FaHandshake} from "react-icons/fa"
import FileSaver from 'file-saver'

const CompanyDoc = () => {

    const handleDownload = () => {
        const pdfUrl = "/src/assets/pdf/agreement.docx";
        const pdfFileName = 'aggrement.docx';
        FileSaver.saveAs(pdfUrl, pdfFileName);
      };

      const handleDownload2 = () => {
        const pdfUrl = "/src/assets/pdf/T&C.docx";
        const pdfFileName = 'T&C.docx';
        FileSaver.saveAs(pdfUrl, pdfFileName);
      };
     


const handleSubmit = (e) =>{
        e.preventDefault()
        window.location.replace("/thankyou");
    }
 

//Remove Items form input field 1
const [file, setFile] = useState(null);

const fileInputRef = useRef(null);
const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

const handleRemoveFile = () => {
  setFile(null);
  fileInputRef.current.value = null;
};


//Remove Items form input field 2
const [file2, setFile2] = useState(null);

const fileInputRef2 = useRef(null);
const handleFileChange2 = (e) => {
  setFile2(e.target.files[0]);
};

const handleRemoveFile2 = () => {
  setFile2(null);
  fileInputRef2.current.value = null;
};

//Remove Items form input field 3
const [file3, setFile3] = useState(null);

const fileInputRef3 = useRef(null);
const handleFileChange3 = (e) => {
  setFile3(e.target.files[0]);
};

const handleRemoveFile3 = () => {
  setFile3(null);
  fileInputRef3.current.value = null;
};

//Remove Items form input field 4
const [file4, setFile4] = useState(null);

const fileInputRef4 = useRef(null);
const handleFileChange4 = (e) => {
  setFile4(e.target.files[0]);
};

const handleRemoveFile4 = () => {
  setFile4(null);
  fileInputRef4.current.value = null;
};

//Remove Items form input field 5
const [file5, setFile5] = useState(null);

const fileInputRef5 = useRef(null);
const handleFileChange5 = (e) => {
  setFile5(e.target.files[0]);
};

const handleRemoveFile5 = () => {
  setFile5(null);
  fileInputRef5.current.value = null;
};




//Remove Items form input field 6
const [file6, setFile6] = useState(null);

const fileInputRef6 = useRef(null);
const handleFileChange6 = (e) => {
  setFile6(e.target.files[0]);
};

const handleRemoveFile6 = () => {
  setFile6(null);
  fileInputRef6.current.value = null;
};

//Remove Items form input field 7
const [file7, setFile7] = useState(null);

const fileInputRef7 = useRef(null);
const handleFileChange7 = (e) => {
  setFile7(e.target.files[0]);
};

const handleRemoveFile7 = () => {
  setFile7(null);
  fileInputRef7.current.value = null;
};


  return (
    <section>
    <div className="login pt-5">
      <div className="singupbg min-h-screen m-3 flex flex-col items-center justify-center text-white">
        <div className="flex border border-white flex-col bg-colone shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-lg">

        <div className="font-medium self-center text-xl sm:text-2xl uppercase underline text-white">COMPANY SIGN UP
        </div>
    <div>
      <img className='md:w-[60px] mx-auto h-auto w-[40px] my-5' src={logo} alt="logo" />
    </div>

  
 
    <div className="">
    <form action="#" onSubmit={handleSubmit}>


      <div className="flex flex-col mb-3">
        <div className='flex justify-between items-center'>
            <label htmlFor="supname" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Supplier Name</label>
            <label htmlFor="supname" className="mb-1 text-xs sm:text-sm tracking-wide text-white">اسم التاجر</label>
        </div>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <MdOutlineDriveFileRenameOutline className='text-2xl' />
            </div>

            <input required id="supname" type="name" name="supname" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 bg-colone rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Supplier Name" />


        </div>
        </div>


        <div className="flex flex-col mb-3">
        <div className='flex justify-between items-center'>
            <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Email</label>
            <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-white">البريد الالكتروني</label>
        </div>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            </div>

            <input required id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Email Address" />
        </div>
        </div>



        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Mobile</label>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">رقم الهاتف</label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <BiMobileAlt className="text-2xl" />
            </span>
            </div>

            <input id="mobile" type="tel" name="mobile" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 bg-colone focus:outline-none focus:border-white" placeholder="Mobile Number" />
        </div>
        </div>




        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Bank Name</label>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">اسم البنك</label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <BsBank2 className="text-2xl" />
            </span>
            </div>
            <select id="mobile" type="tel" name="mobile" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 bg-colone text-white focus:outline-none focus:border-white" placeholder="Bank Name" >
                <option className='w-full py-2'>- Select Bank  / اختر البنك-</option>
                <option className='w-full py-2'>Kuwait - National Bank of Kuwait (NBK)</option>
                <option className='w-full py-2'>Kuwait - Kuwait Finance House (KFH)</option>
                <option className='w-full py-2'>Kuwait - Ahli United Bank</option>
                <option className='w-full py-2'>Kuwait - Bank of Bahrain & Kuwait (BBK)</option>
                <option className='w-full py-2'>Kuwait - Boubyan Bank (Boubyan)</option>
                <option className='w-full py-2'>Kuwait - Burgan Bank (Burgan)</option>
                <option className='w-full py-2'>Kuwait - Commercial Bank of Kuwait (CBK)</option>
                <option className='w-full py-2'>Kuwait - Doha Bank (Doha)</option>
                <option className='w-full py-2'>Kuwait - Gulf Bank of Kuwait (GBK)</option>
                <option className='w-full py-2'>Kuwait - Kuwait International Bank (KIB)</option>
                <option className='w-full py-2'>Kuwait - Mashreq Bank (Mashreq)</option>
                <option className='w-full py-2'>Kuwait - National Bank of Kuwait (NBK)</option>
                <option className='w-full py-2'>Kuwait - National Bank of Abu Dhabi (NBAD)</option>
                <option className='w-full py-2'>Kuwait - Qatar National Bank (QNB)</option>
                <option className='w-full py-2'>Kuwait - AL RAJHI BANK KUWAIT</option>
                <option className='w-full py-2'>Kuwait - Union National Bank (UNB)</option>
                <option className='w-full py-2'>Kuwait - Warba Bank (WARBA)</option>
                <option className='w-full py-2'>Kuwait - Al Ahli Bank (ABK)</option>
                <option className='w-full py-2'>Kuwait - QNB</option>
                <option className='w-full py-2'>Kuwait - MASRAF AL RAYAN</option>
                <option className='w-full py-2'>Kuwait - KFH - Kuwait -  GCC</option>
                <option className='w-full py-2'>Kuwait - AUB - Kuwait - Direct</option>
                <option className='w-full py-2'>Kuwait - KFH - Kuwait - Tokenization</option>
                <option className='w-full py-2'>Kuwait - HSBC BANK</option>
                <option className='w-full py-2'>Kuwait - KFH - Kuwait - BMW</option>
                <option className='w-full py-2'>Kuwait - KFH - Kuwait - AIRLINE (MCC: 4511)</option>
                <option className='w-full py-2'>Kuwait - KFH - Kuwait - WOMEN SHOPS (MCC: 5631)</option>
                <option className='w-full py-2'>Kuwait - AUB - Kuwait - Alturath</option>
                <option className='w-full py-2'>Kuwait - National Bank of Egypt</option>
                <option className='w-full py-2'>Kuwait - NATIONAL BANK OF OMAN</option>
                <option className='w-full py-2'>Kuwait - INDUSTRIAL BANK OF KUWAIT K S C</option>
                <option className='w-full py-2'>Kuwait - Central Bank of Kuwait</option>

            </select>
        </div>
        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Bank account holder name
</label>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">اسم الحساب
</label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <BiUserCircle className="text-2xl" />
            </span>
            </div>

            <input id="mobile" type="tel" name="mobile" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Bank account holder name" />
        </div>
        </div>




        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Bank account
            </label>
            <label htmlFor="bac" className="mb-1 text-xs sm:text-sm tracking-wide text-white">رقم الحساب البنكي
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <MdOutlineAccountBalanceWallet className="text-2xl" />
            </span>
            </div>

            <input id="bac" type="text" name="bac" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Bank account" />
        </div>
        </div>



        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">IBAN
            </label>
            <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">رقم الحساب بصيغة IBAN  
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <MdConfirmationNumber className="text-2xl" />
            </span>
            </div>

            <input id="mobile" type="tel" name="mobile" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="iban" />
        </div>
        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Civil ID of Manager (Front)

            </label>
            <label htmlFor="civilidf" className="mb-1 text-xs sm:text-sm tracking-wide text-white">المدنية (من الامام)  
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <GiIdCard className="text-2xl" />
            </span>
            </div>

            <input id="civilidf" ref={fileInputRef} onChange={handleFileChange} type="file" name="civilidf" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Civil ID of Manager (Front)" />
        </div>
        {file && (<small className=' cursor-pointer' onClick={handleRemoveFile}>Remove Item / حذف هذا المرفق</small>)}

        
        </div>

        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Civil id of Manager (Back)
            </label>
            <label htmlFor="civilidb" className="mb-1 text-xs sm:text-sm tracking-wide text-white">البطاقة المدنية (من الخلف) 
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <GiIdCard className="text-2xl" />
            </span>
            </div>

            <input ref={fileInputRef2} onChange={handleFileChange2} id="civilidb" type="file" name="civilidb" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Civil id of Manager (Back)" />
        </div>
        {file2 && (<small className=' cursor-pointer' onClick={handleRemoveFile2}>Remove Item / حذف هذا المرفق</small>)}
        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Civil ID of Owner
            </label>
            <label htmlFor="ownerid" className="mb-1 text-xs sm:text-sm tracking-wide text-white">البطاقات المدنية للملاك
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <GiIdCard className="text-2xl" />
            </span>
            </div>

            <input  ref={fileInputRef3} onChange={handleFileChange3} id="ownerid" type="file" name="ownerid" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Civil ID of Owner" />
        </div>
        {file3 && (<small className=' cursor-pointer' onClick={handleRemoveFile3}>Remove Item / حذف هذا المرفق</small>)}
        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Commercial License
            </label>
            <label htmlFor="clicence" className="mb-1 text-xs sm:text-sm tracking-wide text-white">الرخصة التجارية  
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <BsBookmarkCheck className="text-2xl" />
            </span>
            </div>

            <input  ref={fileInputRef4} onChange={handleFileChange4} id="clicence" type="file" name="clicence" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Commercial License" />
        </div>
        {file4 && (<small className=' cursor-pointer' onClick={handleRemoveFile4}>Remove Item / حذف هذا المرفق</small>)}

        </div>

        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Signature Authorization
            </label>
            <label htmlFor="clicence" className="mb-1 text-xs sm:text-sm tracking-wide text-white">اعتماد التوقيع   
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <FaFileSignature className="text-2xl" />
            </span>
            </div>

            <input ref={fileInputRef5} onChange={handleFileChange5} id="clicence" type="file" name="clicence" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Signature Authorization" />
        </div>
        {file5 && (<small className=' cursor-pointer' onClick={handleRemoveFile5}>Remove Item / حذف هذا المرفق</small>)}

        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Articles-of-Association
            </label>
            <label htmlFor="aass" className="mb-1 text-xs sm:text-sm tracking-wide text-white">عقد التأسيس    
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <MdGroups className="text-2xl" />
            </span>
            </div>

            <input ref={fileInputRef6} onChange={handleFileChange6} id="aass" type="file" name="aass" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Articles-of-Association" />
        </div>
        {file6 && (<small className=' cursor-pointer' onClick={handleRemoveFile6}>Remove Item / حذف هذا المرفق</small>)}

        </div>

        
        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Instagram (Instagram account screenshot)
            </label>
            <label htmlFor="insta" className="mb-1 text-xs sm:text-sm tracking-wide text-white">صورة لحساب الانستغرام     
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <BiScreenshot className="text-2xl" />
            </span>
            </div>

            <input  ref={fileInputRef7} onChange={handleFileChange7}  id="insta" type="file" name="insta" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Instagram (Instagram account screenshot)" />
        </div>
        {file7 && (<small className=' cursor-pointer' onClick={handleRemoveFile7}>Remove Item / حذف هذا المرفق</small>)}

        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Website
            </label>
            <label htmlFor="Website" className="mb-1 text-xs sm:text-sm tracking-wide text-white">الموقع الالكتروني  
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <BsGlobeAmericas className="text-2xl" />
            </span>
            </div>

            <input id="Website" type="text" name="Website" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Website" />
        </div>
        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="download" className="mb-1 text-xs sm:text-sm tracking-wide text-white">3 Parties’ Contract/Agreement / عقد اتفاق ثلاثي
            </label>
            <label onClick={handleDownload}  htmlFor="" className="mb-1 cursor-pointer text-xs sm:text-sm tracking-wide underline hover:text-slate-300 duration-100 text-white">Download here   
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <FaHandshake className="text-2xl" />
            </span>
            </div>

            <input id="download" type="text" name="download" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="3 Parties’ Contract/Agreemen" />
        </div>
        </div>

        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Other Media
            </label>
            <label htmlFor="Website" className="mb-1 text-xs sm:text-sm tracking-wide text-white">مستندات اضافية
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <MdPermMedia className="text-2xl" />
            </span>
            </div>

            <input id="Website" type="text" name="Website" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Other Media" />
        </div>
        </div>

        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Store Address (for Product Pickup)
            </label>
            <label htmlFor="storeadd" className="mb-1 text-xs sm:text-sm tracking-wide text-white">عنوان المتجر (لإستلام السلع) 
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-top pt-2 justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <FaStore className="text-2xl" />
            </span>
            </div>

            <textarea id="storeadd" type="text" name="storeadd" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Store Address (for Product Pickup)" ></textarea>
        </div>
        </div>


        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Latitude
            </label>
            <label htmlFor="Website" className="mb-1 text-xs sm:text-sm tracking-wide text-white">خط العرض 
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <MdLocationPin className="text-2xl" />
            </span>
            </div>

            <input id="Website" type="text" name="Website" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Addresss Latitude" />
        </div>
        </div>

        <div className="flex flex-col mb-6">
        <div className='flex justify-between items-center'>
            <label htmlFor="" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Longitude
            </label>
            <label htmlFor="Website" className="mb-1 text-xs sm:text-sm tracking-wide text-white">خط الطول  
            </label>
        </div> 

        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <MdLocationPin className="text-2xl" />
            </span>
            </div>

            <input id="Website" type="text" name="Website" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border bg-colone border-gray-400 w-full py-2 focus:outline-none focus:border-white" placeholder="Addresss Longitude" />
        </div>
        </div>

        <div className='flex items-start gap-5 mb-6'>
            <input className='mt-2 text-lg' type="checkbox" />
            <div className=''>
                <p>I confirm that I have read and agree to the <span onClick={handleDownload2} className='text-coltwo hover:text-opacity-70 duration-100 cursor-pointer underline inline-block'>Zeed/Vendor agreement.</span></p><br />
                <p>انا اقر بموافقتي على اتفاقية التاجراعلاه وان ألتزم بكل ما جاء فيها من بنود واحكام</p>
            </div>
        </div>


        <div className='flex items-start gap-5 mb-6'>
            <input className='mt-2 text-lg' type="checkbox" />
            <div className=''>
                <p>I acknowledge that I will receive an email to the provided email address at registration regarding the commission to be charged and that I must respond to activate my account.</p><br />
                <p>انا اقر بأنني اعلم بأنه سيتم ارسال بريد إلكتروني الى عنوان البريد الكتروني الذي زودناه عند التسجيل وسيتم ذكر قيمة العمولة فيه وانه يجب علينا الرد على هذا البريد الالكتروني لتفعيل الحساب.</p>
            </div>
        </div>




        <div className="flex w-full">
        <button type="submit" className="flex items-center justify-center focus:outline-none text-colone  text-sm sm:text-base bg-white hover:bg-opacity-80 duration-100 rounded py-2 w-full transition ease-in">
            <span className="mr-2 uppercase">SUBMIT</span>
            <span>
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </span>
        </button>
        </div>
    </form>
    </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default CompanyDoc
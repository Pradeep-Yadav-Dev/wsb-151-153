import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function List() {

    const [allData, setAllData] = useState([])
    const imagePath = "https://form-backend-by-py.onrender.com/uploads/"


    // display Data
    const displayData = () => {
        axios.get("https://form-backend-by-py.onrender.com/api/website/user/getuser")
            .then((ress) => {
                setAllData(ress.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // single Delete

    const singleDelete = (Did) => {
        axios.delete(`https://form-backend-by-py.onrender.com/api/website/user/single-user-delete/${Did}`)
            .then((ress) => {
                toast.success(ress.data.message)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // selectedInput
    const [selectInputs, setselectInputs] = useState([])


    const selectedInput = (e) => {
        // console.log(e.target.value) id
        // console.log(e.target.checked) true-false

        let { value, checked } = e.target;


        if (checked == true) {
            setselectInputs([...selectInputs, value])
        }
        else {
            let newData = selectInputs.filter((v) => {
                if (value != v) {
                    return v
                }
            })

            setselectInputs(newData)

        }

    }

    // https://form-backend-by-py.onrender.com/api/website/user/seleted-user-delete

    const seletedDeleteRow = () => {
        axios.post("https://form-backend-by-py.onrender.com/api/website/user/seleted-user-delete", selectInputs)
            .then((ress) => {
                toast.success(ress.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //  allInputChecked

    const allInputChecked = (e) => {
        if (e.target.checked == true) {
            let getAllInputsId = allData.map((v, i) => {
                return v._id
            })
            setselectInputs(getAllInputsId)
        }
        else {
            setselectInputs([])
        }



    }


    const [showModal, setShowModal] = useState(false)

    const [editData, setEditData] = useState({})

    const openModalFn = (editData) => {
        setShowModal(!showModal)

        setEditData(editData)
    }


    useEffect(() => {
        displayData()
    }, [allData])

    return (
        <div>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-[red] dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" class="px-6 py-3">
                                Sr.
                            </th>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input onChange={allInputChecked} id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Mobile Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                dob
                            </th>
                            <th scope="col" class="px-6 py-3">
                                gender
                            </th>

                            <th scope="col" class="px-6 py-3">
                                qualification
                            </th>

                            <th scope="col" class="px-6 py-3">
                                address
                            </th>

                            <th scope="col" class="px-6 py-3">
                                <button onClick={seletedDeleteRow} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Deleted</button>

                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {allData.length > 0 ?
                            allData.map((v, i) => {
                                return (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <th scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {i + 1}
                                        </th>

                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-1" onChange={(e) => selectedInput(e)} type="checkbox" checked={selectInputs.includes(v._id)} value={v._id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={imagePath + v.profilePicture} width={50} height={50} alt="" />
                                        </th>
                                        <td class="px-6 py-4">
                                            {v.name}
                                        </td>
                                        <td class="px-6 py-4">
                                            {v.email}
                                        </td>
                                        <td class="px-6 py-4">
                                            {v.contact}
                                        </td>
                                        <td class="px-6 py-4">
                                            {v.dob}
                                        </td>
                                        <td class="px-6 py-4">
                                            {v.gender}
                                        </td>
                                        <td class="px-6 py-4">
                                            {v.qualification.map((p) => {
                                                return (
                                                    p
                                                )
                                            })}
                                        </td>
                                        <td class="px-6 py-4">
                                            {v.address}
                                        </td>
                                        <td class="px-6 py-4">
                                            <button onClick={() => openModalFn(v)} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>

                                            <button onClick={() => singleDelete(v._id)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>


                                        </td>
                                    </tr>
                                )
                            })
                            :
                            " No Record Found "
                        }

                        {showModal == true ? <FormModal editData={editData} /> : ""}


                    </tbody>
                </table>
                <ToastContainer />
            </div>
        </div>
    )
}


let FormModal = ({ editData }) => {


    let editForm = (e) => {
        e.preventDefault()

        let editObj={
            name:e.target.name.value,
            email:e.target.email.value,
        }

        axios.put(`https://form-backend-by-py.onrender.com/api/website/user/update-user/${editData._id}`, editObj )
            .then((ress) => {
                toast.success(ress.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="  max-w-[1000px] border fixed top-[20%] left-[40%]  bg-[#ccc] ">

                <form onSubmit={editForm} class=" border-2  p-5">

                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" defaultValue={editData.name} id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter name</label>
                    </div>

                    <div class="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" defaultValue={editData.email} id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter email</label>
                    </div>

                    <div class="relative z-0 w-full mb-5 group">
                        <input type="number" defaultValue={editData.contact} name="contact" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter contact</label>
                    </div>

                    <div class="relative z-0 w-full mb-5 group">
                        <input type="radio" name='gender' value="male" defaultChecked={editData.gender} />  Male
                        <input type="radio" name='gender' value="female" defaultChecked={editData.gender} />  Female

                    </div>

                    <div class="relative z-0 w-full mb-5 grou">
                        <input type="file" name='profilePicture' />
                        <label > Enter Image </label>

                    </div>

                    <div class="relative z-0 w-full mb-5 ">
                        <textarea name="address" className='border' defaultValue={editData.address} placeholder='enter address' id=""></textarea>

                    </div>


                    <div class="relative z-0 w-full mb-5 ">
                        <input type="date" name="dob" id="" />
                    </div>

                    <div class="relative z-0 w-full mb-5 grou">

                        <input type="checkbox" name="qualification" value="10" id="" /> 10
                        <input type="checkbox" name="qualification" value="12" id="" /> 12
                        <input type="checkbox" name="qualification" value="UG" id="" /> UG
                        <input type="checkbox" name="qualification" value="PG" id="" /> PG


                    </div>



                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


                </form>

            </div>
        </>
    )
}

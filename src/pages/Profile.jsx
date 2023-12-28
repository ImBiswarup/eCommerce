import React, { useContext, useState } from 'react'
import { Login_Signup_Context } from '../contexts/Login_Signup_Context';
import photo from "../img/woman_hero.png"
import { LuBaggageClaim } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom"
import { FAQ } from "../utils/Constant"


const Profile = () => {

    const { logout, user, isAuthenticated } = useContext(Login_Signup_Context);

    const [edit, setEdit] = useState()
    const [isDisabled, setIsDisabled] = useState(true);

    const editChanger = () => {
        setIsDisabled(!isDisabled)
    }

    return (
        <div className='h-screen flex sticky font-semibold'>
            <div className='sm:w-[30%] overflow-x-hidden overflow-y-auto no-scrollbar sm:flex sm:justify-center hidden'>
                <div className="details w-full h-screen">
                    <div className="w-full rounded text-black flex flex-col items-center justify-center mt-20">
                        <div className='flex items-center hover:bg-gray-200 gap-6 w-full md:w-[90%] rounded cursor-pointer'>
                            {isAuthenticated ? (
                                <>
                                    <div className="mr-3">
                                        <img className='h-16 rounded-full m-1' src={user.picture} alt="photo" />
                                    </div>
                                    <div className="">
                                        <h2>{user.name}</h2>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="mr-3">
                                        <img className='h-16 rounded-full m-1' src={photo} alt="photo" />
                                    </div>
                                    <div className="">
                                        <h2>Hello,<br /> Biswarup Ghosh</h2>
                                    </div>
                                </>
                            )}
                        </div>
                        <Link to={"/orders"} className="order mt-5 flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] rounded hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <LuBaggageClaim />
                                MY ORDERS
                            </div>
                            <div className='mr-4'>
                                &gt;
                            </div>
                        </Link>
                        <div className="account flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%]  hover:cursor-pointer hover:text-blue-600 mt-5">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <FaUser />
                                ACCOUNT SETTINGS
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Profile Settings
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Manage Information
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                PAN Information
                            </div>
                        </div>

                        <div className="account flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%]  hover:cursor-pointer hover:text-blue-600 mt-5">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <FaWallet />
                                PAYMENT SETTINGS
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Gift Card
                            </div>
                            <div className='mr-4'>
                                $0
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Saved UPI
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Saved Cards
                            </div>
                        </div>

                        <div className="account flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%]  hover:cursor-pointer hover:text-blue-600 mt-5">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <MdAccountBalanceWallet />
                                MY STUFF
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                My Coupon
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                My Review & Ratings
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                All Notification
                            </div>
                        </div>
                        <div className="order flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                My Wishlist
                            </div>
                        </div>
                        <div className="order mt-5 flex items-center justify-between hover:bg-gray-200 gap-6 w-full md:w-[90%] rounded hover:cursor-pointer hover:text-red-600 mb-4" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <FaPowerOff />
                                Log Out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:w-[70%] overflow-x-hidden overflow-y-auto no-scrollbar '>
                <div className="mt-20 ml-6">
                    {
                        isAuthenticated ? (
                            <>
                                <div className="info">
                                    <div className="flex gap-4">
                                        <h1>Personal Information</h1>
                                        <button onClick={() => editChanger()} className='hover:text-blue-800'>
                                            Edit
                                        </button>
                                    </div>
                                    <div className="input sm:flex block gap-2 mt-2 ">
                                        <div className="">
                                            <input
                                                className={`${edit ? "" : "block"} rounded w-80 h-8 placeholder:pl-1.5 pl-1.5`}
                                                placeholder={user.name.slice(0, 8)}
                                                type="text"
                                                disabled={`${isDisabled ? "true" : ""}`}
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                className={`${edit ? "" : "disable"} rounded w-80 h-8 placeholder:pl-1.5 pl-1.5 `}
                                                placeholder={user.name.slice(8)}
                                                type="text"
                                                disabled={`${isDisabled ? "true" : ""}`}
                                            />
                                        </div>
                                    </div>
                                    <div className="gender mt-4">
                                        <h1>
                                            Your Gender
                                        </h1>
                                        <div className="flex">
                                            <div className="flex mr-3 gap-1.5">
                                                <input className='' type="radio" name="male" id="" />
                                                <h2>male</h2>
                                            </div>
                                            <div className="flex mr-3 gap-1.5">
                                                <input type="radio" name="female" id="" />
                                                <h2>female</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email mt-4">
                                        <div className="flex gap-4">
                                            <h1>Email Address</h1>
                                            <button onClick={() => editChanger()} className='hover:text-blue-500'>
                                                Edit
                                            </button>
                                        </div>

                                        <div className="input flex gap-2 mt-2">
                                            <input
                                                className={`${edit ? "" : "block"} rounded w-80 h-8 placeholder:pl-1.5 pl-1.5 `}
                                                placeholder={user.email}
                                                type="email"
                                                disabled={`${isDisabled ? "true" : ""}`}

                                            />
                                        </div>
                                    </div>
                                    <div className="phone mt-4">
                                        <div className="flex gap-4">
                                            <h1>Mobile Number</h1>
                                            <button onClick={() => editChanger()} className='hover:text-blue-500'>
                                                Edit
                                            </button>
                                        </div>

                                        <div className="input flex gap-2 mt-2">
                                            <input
                                                className={`${edit ? "" : "block"} rounded w-80 h-8 placeholder:pl-1.5 pl-1.5 `}
                                                placeholder="+913322654875"
                                                type="number"
                                                disabled={`${isDisabled ? "true" : ""}`}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="info">
                                    <div className="flex gap-4">
                                        <h1>Personal Information</h1>
                                        <button onClick={() => editChanger()} className='hover:text-blue-500'>
                                            Edit
                                        </button>
                                    </div>

                                    <div className="input sm:flex block gap-2 mt-2">
                                        <div className="">
                                            <input
                                                className={`${edit ? "" : "block"} rounded w-80 h-8 placeholder:pl-1.5 pl-1.5 `}
                                                placeholder="Biswarup"
                                                type="text"
                                                disabled={`${isDisabled ? "true" : ""}`}

                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                className={`${edit ? "" : "disable"} rounded w-80 h-8 placeholder:pl-1.5 pl-1.5 `}
                                                placeholder="Ghosh"
                                                type="text"
                                                disabled={`${isDisabled ? "true" : ""}`}

                                            />
                                        </div>
                                    </div>
                                    <div className="gender mt-4">
                                        <h1>
                                            Your Gender
                                        </h1>
                                        <div className="flex">
                                            <div className="flex mr-3 gap-1.5">
                                                <input className='' type="radio" name="male" id="" />
                                                <h2>male</h2>
                                            </div>
                                            <div className="flex mr-3 gap-1.5">
                                                <input type="radio" name="female" id="" />
                                                <h2>female</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email mt-4">
                                        <div className="flex gap-4">
                                            <h1>Email Address</h1>
                                            <button onClick={() => editChanger()} className='hover:text-blue-500'>
                                                Edit
                                            </button>
                                        </div>

                                        <div className="input flex gap-2 mt-2">
                                            <input
                                                className={`${edit ? "" : "block"} rounded w-80 h-8 placeholder:pl-1`}
                                                placeholder="biswarupg451@gmail.com"
                                                type="email"
                                                disabled={`${isDisabled ? "true" : ""}`}

                                            />
                                        </div>
                                    </div>
                                    <div className="phone mt-4">
                                        <div className="flex gap-4">
                                            <h1>Mobile Number</h1>
                                            <button onClick={() => editChanger()} className='hover:text-blue-500'>
                                                Edit
                                            </button>
                                        </div>

                                        <div className="input flex gap-2 mt-2">
                                            <input
                                                className={`${edit ? "" : "block"} rounded w-80 h-8 placeholder:pl-1.5 pl-1.5 `}
                                                placeholder="+91-1234567890"
                                                type="tel"
                                                disabled={`${isDisabled ? "true" : ""}`}

                                            />
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    }
                    <div className="update-btn mt-4 sm:flex sm:items-center">
                        <button className='bg-white text-orange-400 hover:bg-orange-400 hover:text-white rounded p-1.5'>Update Changes</button>
                    </div>
                    <div className="FAQ mt-6 ">
                        <div className="mb-4">
                            <b>FAQ</b>
                        </div>
                        {
                            FAQ.map((item) => {
                                return (

                                    <div className="text mb-4">
                                        <div className="qstn">
                                            <b>{item.question}</b>
                                        </div>
                                        <div className="ans">
                                            <h2>
                                                {item.answer}
                                            </h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="deactivate-account mb-8">
                            <span className='cursor-pointer hover:text-blue-600' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
                                <h2 className='hover:text-blue-600 inline-block p-2 hover:bg-gray-200 rounded'>
                                    Deactivate account
                                </h2>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Profile

'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from "@/../config";
import { getSession } from '@/lib';
import Search from "antd/es/input/Search";

const Page = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(`${config.baseUrl}/api/v1/auth/users/profile/all`);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [initLoading, setInitLoading] = useState(false);

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const fetchUsers = async (url) => {
        setIsLoading(true);
        try {
            const session = await getSession();
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${session.user.accessToken}`,
                }
            });
            setUsers(response.data.results);
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        console.log(_e);
        setSearchTerm(value);

        searchRequest(value);
    };

    const handlePagination = (url) => {
        if (url) setCurrentPage(url);
    };

    const searchRequest = async (value) => {
        setInitLoading(true);
        const session = await getSession();

        axios.get(`${config.baseUrl}/api/v1/auth/users/profile/all?search=${value}`, {
            headers: {
                Authorization: `Bearer ${session.user.accessToken}`,
            },
        })
        .then((response) => {
            if (response.data && response.data.results) {
                setUsers(response.data.results);
            }
            setInitLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setInitLoading(false);
        });
    };
    

    return (
        <div className="space-y-4">
            <div className="pb-4">
                <div className={"w-[70%] flex"}>
                        <Search loading={initLoading} style={{marginRight: 10}}
                                placeholder="Search user..." allowClear size={'large'}
                                onSearch={onSearch}
                                enterButton/>
                </div>


            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="space-y-4">
                {users.map((user) => (
                    <div key={user.id} className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {user.first_name} {user.last_name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                    {user.email}
                                </p>
                            </div>
                            <div className="text-lg text-gray-900">
                                {/* Display other user details */}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between">
                    <button
                        onClick={() => handlePagination(previousPage)}
                        className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        disabled={!previousPage}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePagination(nextPage)}
                        className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        disabled={!nextPage}
                    >
                        Next
                    </button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Page;

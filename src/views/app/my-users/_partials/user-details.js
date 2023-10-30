import React, { useEffect, useState } from 'react';
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "../../../../components/table/table";
import userListColumns from '../../../../containers/column-definition/my-users/details-def';
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import UserDetail from '../_modals/user-detail';

const UserDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const [users, setUsers] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getUsers();
    }, [currentPage, defaultPageSize, props.searchData]);

    const setDtCurrentPage = (page) => {
        setCurrentPage(page);
    };
    const setDtDefaultPageSize = (size) => {
        setCurrentPage(1);
        setDefaultPageSize(size);
    };

    useEffect(() => {
        setDefaultPageSize(defaultPageSize);
        setCurrentPage(1);
        setTotalPage(0);
    }, [props.searchData]);

    const getUsers = async () => {
        setIsLoading(true);
        let params = {page: currentPage};
        let body = {...props.searchData, ...{per_page: defaultPageSize}};
        
        try {
            await apiClient('getUserList', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setUsers(response.data.data.user_list?.data || []);
                    setTotalPage(response.data.data.user_list?.last_page || 0);
                    setTotalRows(response.data.data.user_list?.total || 0);
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const updateModalLarge = (data = {}, type) => {
        setIsModalOpen(!isModalOpen);
        setModalType(type);
        setModalData(modalData ? null : data);
     
    };

    const bodyContent = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={users} 
                columnDefinition={userListColumns(currentPage, defaultPageSize, updateModalLarge)}
                defaultPageSize={defaultPageSize} 
                setDefaultPageSize={setDtDefaultPageSize} 
                currentPage={currentPage}
                setCurrentPage={setDtCurrentPage}
                totalPage={totalPage}
                isLoading={isLoading}
            />

            {
                modalType && modalData
                ? (
                    {
                        'UserDetail': <UserDetail
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                            transaction={modalData}
                        />
                    }[modalType] || ''
                )
                : ''
            }
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle="User List"
                toggleOn={true}
                isOpen={true}
                isDefaultHeader={true}
                footerEnabled={false}
                isLoading={isLoading}
                bodyContent={bodyContent}
                totalRows={totalRows}
            />
        </div>
    );
}
 
export default UserDetails;

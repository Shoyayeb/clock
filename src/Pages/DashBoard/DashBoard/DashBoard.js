import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
import AdminRoute from '../../Shared/AdminRoute/AdminRoute';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddProduct from '../AddProduct/AddProduct';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import DashBoardNavBar from '../DashBoardNavBar/DashBoardNavBar';

const DashBoard = () => {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <DashBoardNavBar />
                <div className="w-full md:space-y-4 md:px-4 md:py-3">
                    <Routes>
                        <Route path="/" element={<DashBoardHome />} />
                        <Route
                            path="/addservice"
                            element={
                                <AdminRoute>
                                    <AddProduct />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/addadmin"
                            element={
                                <AdminRoute>
                                    <AddAdmin />
                                </AdminRoute>
                            }
                        />

                        {/* <Route path="/users" element={<UsersList />} /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
};

export default DashBoard;
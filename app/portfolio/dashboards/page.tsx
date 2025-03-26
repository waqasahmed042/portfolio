import React from 'react';
import '../../globals.scss';
import { metadata } from './metadata';
import Dashboards from '@/components/portfolio/portfolio-routes/dashboard';

const DashboardPage = () => {
    return <Dashboards />;
};

export { metadata };
export default DashboardPage;
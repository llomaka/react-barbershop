import { Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AboutCompany from '../components/AboutCompany';

export default function About() {
  return (
    <>
      <AboutCompany />
      <Divider sx={{ my: 3 }} />
      <Outlet />
    </>
  );
}

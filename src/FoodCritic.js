import * as React from 'react';
import AppForm from './modules/views/AppForm';
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Typography from './modules/components/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ProductCTA from "./modules/views/ProductCTA";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
    return (
        <>
        <AppAppBar />
    
    <div style={{marginTop: "-40px", marginBottom: "80px"}}>
    <AppForm sm={{ width: 1200, height: 900 }} align="center" >
    <br/><br/><br/><br/>
    <Typography variant="h2" gutterBottom marked="center" align="center">
  I like documenting restaurants and places
    </Typography>
    <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
        
        <Item><img src="https://lh3.googleusercontent.com/6nG-7MXAl3yCXWQFi6SZ0a9HwWk3OwicQHgZD1LOgMuDsiR4LvXGt0QyMUd_KrXilcxFy3iZx5AxLOoeACsoJAKQJ541tCoJVWB5QWrrvsJE-xuF5U1-ACKr0wk4u8P2Kw067jExZyO0WJYitljhBOyUpoyAdLbKJ_zR0Lsu9bu3srelal1H_XQDf2wxPM5L8JOcMGJymmdRlqhmdBORXJvo3P-WBFzCBbT9BKxZT6YE--Bs0K-gTrVemoJ4s7BZU2hhY11J876ImEGCMa6sj8xDnnGi6qOUV2MaGt0rHONIYS9LpwZj2dqPjmKHldv5PG3aZTvSM3pgNH_C7BQQHecZ_jJAF10NSfb0Bgt8ntYYwFKQUAXtib8fw5GyRYoww6kWMNKypPyp5TQyDILJi6P8KoezLFDqBLO_3_b2Uwdr1SKJQ59DIbyt4sCTxTQ-gRTzH0-rHjEXUsQeAGye178g9gn5BNGIUlbwLeKvvGIVJbmd0j_Nit0jPHGeOKegkBxiBVWd1ya5xcqipFgfVWmqz71PLIy4rMR4ecI1V_4-ex6v6m49KNTj8ZuHIIDl-GbCt5lq3cqoTd3ibkDMZAcjm74GtjG57dBlLJL-MEM71FxCKWNDWFPeDNzDkQm2Ckj6Yl8MipJO35DAeyD4DW1FdB_Bx0Bx72uAT8cjFiryf0Xuh-Qvg03TtIEn8IItFu_JJg9kYumbBw_lX5GewLT9J-cLolxqcmpE0pR6gnm6Zzx4ANYqKEBvZvlMi20=w742-h1016-no?authuser=0"  alt="buoy" /></Item>
        <br/><br/><br/>
          <Item><img src="https://lh3.googleusercontent.com/hhAVY5xq0q-BlK6-qW2q7dmFZ51xT_AUH3XVKEk2fVY24p_l-_RA1fuKOFJdg8GST6_YdlklYTMh0B_lIdmmO8LE0FuGD82xGx5Vs9Uxn0fMZZrTryDP8yp3TjblvV2-WjFXpDQjTDfkbbhM2w_tmc20Xmo0rI6nuID45tXewACstLy3E42aEVQ3z6ImXzYB3op-HpIDZNF_M8RdtdAP9Qdoqus0zLHGug37z-q7pABoe11YP478EGuh6aLA6jEpOkN6SyWl31dKLt4xiVXTLIIOI_55_hm3_kOVfQWgsaVm5g1_9TwlUA9gvMz87pZ1dy_60CXzLeUBZ5Uglmx06KsT7eabnIHdrmY-aVZHcae-8HQ3s8tO1GIVP1VCRIvJyu1bmhiJ0Tu18MI0kYGp4HuqvPBpfgmPQ7FPNnV5gn_A-so30Sqxc-sO21XYcXFjnMrazBQSbapyaNoZ7N1T1K7hRcbqwbaN1xD41XJN3VdLuFjAqBW8J5ZHd8dt5s7u8g8mk7-ydW1bNvIZIZWj8ljO-OsVd2aUjVUjh2Smk_PhCZtM-ktbLZmEbnLzHTb7KFOjBfHKjwgYOZzqNcMkqVOzGp3uk_CsE_zGQ8RFRPr5K2QvZnKFCZpNfyhE69mk8rYJUMp1nP40-o48O3fBzHHHpAGz-s_sHvRdyIieQhg9kXeJ66o_Eemi6IECWFZMsFyJianQ6I3bAYem77qUf0h3CX5xwGrKPeQg7r8orA9kKq7RYPwK6grZQjFlepw=w812-h1502-no?authuser=0" alt="go2" /></Item>
        <br/><br/><br/>
          <Item><Typography variant="h4" gutterBottom marked="center" align="center">
  Email me to get the best pictures on Review apps. This will help your business to grow clout and exposure to your local audience.
    </Typography></Item>
        </Stack>
      </Box>
<br/><br/><br/><br/>


<ProductCTA/>
      </AppForm>
   < AppFooter/>

   </div>
</>
  );
}


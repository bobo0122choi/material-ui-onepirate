import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AppForm from './modules/views/AppForm';
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Typography from './modules/components/Typography';

export default function TitlebarBelowMasonryImageList() {
  return (
    <>
    <AppAppBar />
    <div style={{marginTop: "-40px", marginBottom: "80px"}}>
    <AppForm sm={{ width: 850, height: 800 }} align="center" >
    <br/>
    <br/>
    <Typography variant="h2" gutterBottom marked="center" align="center">
        Freelance Modeling         
    </Typography>
    <br/>
    <br/>
    <Box xs={{ width: 800, height: 450, overflowY: 'scroll' }} sm={{ width: 300, height: 1000 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    
    </AppForm>
   < AppFooter/>
   </div>
    </>
  );
}

const itemData = [
  {
   img: "https://lh3.googleusercontent.com/P3HlrlqNQeiEW4kCwoNOln9M9fPJ2Zz6IXhxNfWvbVUldneNVJLtuLxi7LBeit6DJ57p2r7NYjNMUnShTEHFsfpBNEj-cw9qVLmg9nI1f_DGAEwbzc8yjpI5A56RxDYqNlZBHmyBLEiGtzH3pMeEvwmAUcCGPIVT8EI1J65zjCk8EVx_O0nXsBcICkD8nEtmdgt6aj6NwDcN_L-JAviY0OQqUwKfGYjmDW3iykjyxsskChNHpYbOK8Ui2ATAGWGZYM4qtTwjdXo6hGcI-QClBJM-Km2k5hYNNV73GwTMhLIdGy23RK4_V3C0DrDrDk7lWPCC1XfMrnZp5l2_AFaTQWfYAy16Jib6KZRz3NtR52_xnEdkQPMMCnCwH2TbkyWfVuwEky4AjNrpg5zymlE1T-DeFJoiNV1hAjvrEVtnRwiI5mj6NFKFsVLFUn7QcoAe_r7DIZUqW-31uf7RArwzmpqeyqe5MHp9PXBd9vxeDfVBtakjIvFZQ9dRwxvcZuBJG7E8EbLfTTCN9xGwU-deN6TVk9kk_MIVKYLrq87caUNaoQZ-Y3ZvTHKrLeyg8aeS-n7aV5JAAUbEJatvYFyNsKdJ9oiN-j68zNUxMw9I1vXX79xFLotKCdIL0abIXGncLaNHTTncB6ryLKsfUc3hLrzdhJj_cpkF2JsBcT7keb4f-jaPPjp6WGGlzFZhVMZX-GR9j3otGUyduhModJ4eOqua8P6tJJAh_1uJs00HPHPuJJxfs94Uc0ID6IA1UMs=w1004-h1506-no?authuser=0",
    title: '',
    author: 'Sophia Valentino',
  },
  {
    img: 'https://lh3.google.com/pw/AM-JKLXRdrjdCxs77E8zbYfqwCFfuXYGL_oG6bs5lvnPyzLFMhuiMr42hTfxCxBlC4KWi_vYnGagtGOVjIcmE9ZxtXEcZNBsvmk=w1004-h1506-no?authuser=0',
    title: 'Books',
    author: ' Nathan Kou',
  },
  {
    img: 'https://lh3.googleusercontent.com/G8kQxVMWuBM1WMlwNQM3Xo81ko1czpUlzHELXRCEpaOJlETW1I0a2kKAJClSSu4yGhYSFnwfVcpWZ3gJByXA3UoT245ktFcNIrfJD2d9_M-LDfCGx3bLXippoeugMRb03W_zF1Bm4gzIXLAXecy6VuKhBobq9eHJ9ZNeKZzmipj5y4XwkWmSkkIUtzEREmsuV96KgCBFf2zAREOUG-1Jm79fZEQY1w-Mn_u4vUeYC_xddiUzKpOZ4Oo-voAKp6-TcTpYnH202c7nrtQiDv202BnDcwNsIQwsUvaUEd65VGTELpQkgW7ow-gttqjZN4EzJnzwHMUMDovBSiYlxY1k-A-mJ0yggUQEiuodrINYkchQrAmoSY23Hc8BxrBfrL1OttadZOUVjWON79B0KmdLt4vQMT2wSzlBbrxC1RTgSRtFl5T3YFjuP63G3tmEK_UpzaSD7xpHY8yvsBj5DSOyRm-JhISEj7r96QD2taD0Tna4SI5LXiqtlX8KqF2ynnPFMq-gOlogucnWZ1ODgkwupFSCBxY7WdkijsJCx4lNk9-WO3C5bmKS9i0eQUuEQnLeX6y8U1AZzlzqLB1gHlQKIsFMAa2boRl_6c1U0etn9RCKAcLxDfSck9wa1ZbU5NmfOJOhFoFfDeemqNqNCuqA1hZjlOaTdQK27zuho_B4pQTbhD399gbqZgpnSD55WMPdmX9wpV4W-jHYkKD4YJTogCW6URF2dPhk75_qWk2smpGqDsbuClhMkngCdWIkv9s=w1082-h1506-no?authuser=0',
    title: 'Sink',
    author: 'Yaokuang Lee',
  },
  {
    img: 'https://lh3.google.com/pw/AM-JKLVOHDRaVBqZHGjNshqvcytJ6bPMbLabUsycIFuM8hjbo5yz0xhL4qoRmlFmpCCgcnZuQH6J99B2L5V7oAD-UJ87vEFsiw=w2182-h1228-no?authuser=0',
    title: 'Kitchen',
    author: 'Dallin Wilks',
  },
  {
    img: 'https://lh3.googleusercontent.com/cS7dxGVo8WgJk6IPZWQaZhAKRwCWF_PAPGz5vWW5G8VlDsK7YxzMPVPBR4v95D2ExEq0z20pzlMx4y5Inyija_t-eUthxL5TFX0ZBF11nFhtgbVpVy7D2sKtS7B9_Vf8Nne4l4JP7Bo9Xzz0XyohNi03cuycSFrK-kzhTiRIR0K-5OWJBhL9sesb4VWKMOeU0MLw2Jfq5Iyzn1DSHrFwqB5NBrWSLAMwqtBn_hFN1kWR6arkNOYBrmrDFGcZYVgrn88Nr-3cLrPdGE3IunTtc_A2bzXO11R78VIryY3dLnyeaky4z0_Fd-bU_xt1XLsYFk6ulmpDGVOjzEgjrwEpyTZ6MC6-PF6fBu46NEA-TRPZNN9Ct3BPszz8XyRXB8cIM4EgVZ5o6SLpG22Ni0bu2Zkm8k-_bRclwuHsu2I3o47Js-inISPLsI2sl7D5cBb4S_7x3jHoI5IB1_a0kndwE6S2sgQ5TNKfIquuLtMgG0EiDUL7fDjSLcynC5pAuDODtRtEC3cqVxHXq2NzEq_Zxdl2wFSJ7AV7x2bN11dUXq9ohKOplqfP1bw1l529B-pF1gx5iWEU5nOJn3IllAY4ZMb9jhcjhYZrjocQWkrvvlEZHDLt7QXDw8PgrAgwyOIOsXQqu0gzqDHO1fGMclepMa4sPqPLov6o4pPt1XR_HHon7LriKJt_YoHuv7tL7laZcDSnjgDaHCTWaPY8YFi1KEDC8OUcbL2tjwlxfdWMJc_AXlxbc2r3PaGqBiNQeP8=w2182-h1282-no?authuser=0',
    title: 'Blinds',
    author: 'Nathan Kou',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AM-JKLUDdZ__4LNQ3bpWY-ItmHMR45McFa6AvwrjPR6ukTJbH-eguZ2h7Y-wmnqm5l4n26bpeW1W0jaewVHBFUn6x5BuGTh-972IDq1hFfkmAG_VAgtlVkgW33KfMpJfAc53y4Uvjd-YH_6v8oXspTN49jr0=w2182-h1238-no?authuser=0',
    title: 'Chairs',
    author: 'Josué Peralta',
  },
  {
    img: 'https://lh3.googleusercontent.com/vqpZqNm7krgWCbHUvEsK_X9db-TVTfkWe7SYWM8Tayuhx2vh0p6l1TJbqu6XgnSjfR-kdTfDXngZEhw5Tlf7fjtJbVopiOImZhNaVIbKh1F0tm732CT0FctamFCdBq6wpBS32vlbL4CRLvJ0xNii5P_x12XHM2wltdzdshNuwikg6667d3rNWhm0rIUnb8DhIZ5HfUXbnOJWdwD-ZMcQE0HTT0LABquZ5fYuC8pO-GakS3LRNBTgMRTUaH7tlu-FbEpL7_gtYPHODhdHgDVxv2D3oLZllfnu_15NVKtZgkFg4fxrFa3gb3YI0E9_7c1x-hZjV1z8MtdsM3XDhgPDEiEvJ_vytOF1b0unGyFu8wfky8mU2ott9t11FdedP_jeLsXdQyvmXxjsxvoMiOxdeBjKcWMg9cpZ2NmI2vP_Tf-whO9IbYU1Rn1inXWIhRnOEO0OEc2usf_mn4ijkTp16n1uIijCMqWEUkS0ryi-9PmBcQMzpVu2rUPKrxXR6UDf9ZvNgKWd3Uoy9b_GcJZ28yT7UJ7qC1Wer2-4VST0j7M-MtzCyrVLm-nd_8UmK4SAb_WHMctGQD9Bm169WXkgOuoKz9BFWgNedCP4m5LXKfFKF7wnfkR2kqTp35C8-E5ChOmfBfI2ieHnOX5OVQeL0W2LA43pR9AQvzPMbxQ2hpjETk8FCBSA0W0QCAy-2snHSublSsalYaMB0qElrX0S9PK-PH5eOQup4Q49f2G-LRPpfvc5BbXb-vDX1y7iqfY=w1060-h1506-no?authuser=0',
    title: 'Laptop',
    author: 'Yaokuang Lee',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AM-JKLVWT4vm8dWp8I3xDE1ER3d5C3ZnxB9bM_q3Q4bjUPm1KgeVGCvTCcFSV4a1ahxcSwszuNfGCvayOCNSkpYUREeHcPIVsqrPw-wFdaMOXkrhH0kEVIIEW2WkbalGHjhvfEq5ji4EqSSGThbZFYFpvg6_6Q=w1168-h1506-no?authuser=0',
    title: 'Doors',
    author: 'Kim Lor',
  },
  {
    img: 'https://lh3.googleusercontent.com/CPLtYXEb8Des5gTlzd7CjRNL1oLQCUcB_5iWoRA8meeUVydobgJ4EsrVbPi9Y0RictZA1yLssYS2UXR7lW1yzyR1v84OF8me5XDC7a5cnU6ffMEfWEPMrMX__aflUsW6JudB0IwoxJLaGWQs-JdprDxbTJ_BS1noBXPqe-9DCTMHCut4rgidbv6JDNwJcnzlG-q1ydjv--Th7s14o-fvKd89dOP_UfjYL4vzyBifpBNnHKpqrXngns8PKgizkni96Z4taoPMFEDLVyd_iFdJMJKalMA-vyueIAw6idOf28XkPtouDL4Z2nkOdAaZLTw3IRVFhY22bOQXmLLLKlkHOPinzQYG6KDhhaxnYHCCWqdJoPqOx71n4n4CuUQr5TPBaqvFKjSp4eKXh4gVvt2GVYze0_cz2yZDUwhcJB-JkJKHQpcc_h-3J1JlBtintoTOUz44H0BVHkh-wUHRpsAPS-LAZHzgadlG71CrS8Ru7i6WJjdBtMNH-JZBgmJqMQgNuEfuGWXp-4TIibTnI1x5J7bgpbn5HWXab6sIFjPmQh5P1jdxVT6VRliDK06fLHxt51RQqSYQ8za9V_G11qcdcdqd_rnNk1wobWk8j5VP1QfeIfEG4JenZoRiADPriaBhO7QyJ_BpK0VpU-eUswGO_HFN4TGTVMet18S0jCusGlIVqESxgCCOXWLqqJ-WZhFlB_CLYgCYVz4QNV9q49cqFPOqBzi7Ya-OO9gNZ7ZtiUhCkoZYJdu4puB7M-xsuyc=w1004-h1506-no?authuser=0',
    title: 'Coffee',
    author: 'Wanchai Chab',
  },
  {
    img: 'https://lh3.googleusercontent.com/SQX3hrlRsayYQO44irolsvIGqkgES2LzyjmSDOtdpmOvvgTbhROksKXbdlZEIDlYNVMXvOXPKtJ0ZJyuH8oZjvFgPYqmf_tqo0-2yXaXEhC4xs4OhKhX1qmC7vrjAM5ziHfEI9HGXTJwfK5PzYXEoAFY8iuOXSGE33-bwxHJ8YdljSJLHF-PJiiFUhmWsWB_2UPp6H36joa7jBzMQY0ceSOhE6ddukiNoXDBDWp3y6Q7fenWmTRBBhyeMyASyFTyfjYtYv3FzK4CeSXVaa9smVTTcIbJew06MOPjnqrNix9h1hfVlU2BJbwqArb7ImNr2Q0WixywSYuRm2HWttmzv6mtFHUNeUb_qrudtkJL2wsFYnsd26x8IbQ3UuffR1oS9LiQ3ySelAaptQ1wacmnnbEOxE50CIqAYgtVAeAXTQclCvCBNo22jb6JKdjrIgbqeO_0Qsh_syx82Uavh7e8XuuDtTQjaAG4fzkes3ediUP0DAIXt8hgjIG2-Rkw4fPRtqFeGKxm5KTZoPRAOuIKk_EFnlMj9j1tF0PrfbLxTiXUarKnW4PZ_EvtI8P2l38eYTOB761qbz7hPsTp7HSDWzxgHBM_jR4UGbtX77Vx1xMNgbQpMi_WOVAXaAj-fvYUzGBJp5RQuzXDjYpNkDn2L-C6m-Jw_sRyhvq_dNi97XouMZ7INpU3N_PrKCt8TTnrfq6a47a9jElg8SJvclmi0vfza9OVyfvzgQoIwwwZuJkwWighLhw0CRdG5ziHMqk=w1067-h694-no?authuser=0',
    title: 'Storage',
    author: 'Michelle Baughan',
  },
  {
    img: 'https://lh3.google.com/pw/AM-JKLXeu1uWqSqzHro7PVk5VTO7HYenVimrhslwyI0WR8EVDJ0BPQbGiZhK4EsK8qamu7WEpflCTCQnH0NkkrbTE5E75RkSgyI=w2182-h1456-no?authuser=0',
    title: 'Shem Woo',
    author: 'Shem Woo',
  },
  {
    img: 'https://lh3.googleusercontent.com/eQ4Q7ZJKEbcTrCcEw7PF-1R91lDJ2XSuE7Yw60ylSi-9qD3zzqcDKIL714aJesy2i1Pt7999QZSCNIxvGstUgCWKH45dEsyhrdErVHUn-FaOB-fTxTyPk61-EekcSTzfNhCtNDkwJtX5WB85WP2tVO_4D20pWQsBQzP92G46noilwJaQ3m_4bFrKOXSGeJKazVEfouzjBt3TSQDcN6q8jV4mBIT04Hbp5yW6GeaimPYTLwOaBAauXc7vY2jvguajDklrbHdKYsn0f6mcA9OOJOlgMVTUNTQnJP_MlOTkYfbgzYx_Dv1Gbq0433MEU1jDi3H5X5ABbvXAc8ATfhKdDi9HxvSU81YzIsj2QyVvTE9NpDwRufd0tSFUrXOSpyeYplR5H-dAqUVvTqQFZ_arDzzd8j7iIewJpaEXyW9fsI94SmzdQaq6Kwd9DcW3H6rgTtWgEx7zg-p6NmTnjrgb4EHEiOMkjhqH1RDLlmwHpH6TZrIPVd5WyMF6pc2bPtqaPaZsfZjHdpfLKWYOIa59nw_gfgVFQt1o4cYlgAMvTuJ0OWS-31vmlQ-fahp5ZzKTqatWD-AJc0R7774h5Wrb7UspvXk1eDSCoaHXFl0ky4QsRmcZZw7wMhzoKCs8HCyz5L6eYJ3KMmXyCKE0oVJpruF74K15kjYlsAAf53LC7aLY5eIKfOwSQOxqEK8701SBgPkKhkmHo18f5C-KXVLcF8bijDzF9Rqx0luSp0TKhUD7GMSqEa1naeJAbXhZ2K8=w682-h1024-no?authuser=0',
    title: 'Coffee table',
    author: 'Alexa Ditto',
  },
];

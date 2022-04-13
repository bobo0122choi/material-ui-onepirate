import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import AppAppBar from "./modules/views/AppAppBar";
import AppForm from './modules/views/AppForm';
import AppFooter from "./modules/views/AppFooter";
import Typography from './modules/components/Typography';

export default function TitlebarImageList() {
  return (
      <>
    <AppForm sm={{ width: 850, height: 1300 }} align="center">
    <Typography variant="h2" gutterBottom marked="center" align="center">
        BYU INFORMATION Systems          
    </Typography>
    <ImageList xs={{ width: 800, height: 1000 }} sm={{ width: 300, height: 1000 }}>
        <AppAppBar />
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Completed BYU IS Courses/Skills</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </AppForm>
    <AppFooter/>
    </>
  );
}

const itemData = [
  {
    img: 'https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png',
    title: 'React',
    author: 'Web Development (IS 542)',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://miro.medium.com/max/1200/1*slHeZngyeUr7ypEz7MNL5w.png',
    title: 'Python/Django',
    author: 'Web Development (IS 403)',
  },
  {
    img: 'https://raw.githubusercontent.com/sumitc91/sumitc91.github.io/master/Blogs/23a73932-d77d-4bd4-b4ab-06ea4d5183d3_c-sharp-dotnet.jpg',
    title: 'C# ASP.NET',
    author: 'Full-stack Development (IS 413)',
  },
  {
    img: 'https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2020/03/SQL-Coding-Class-San-Francisco-1.jpeg',
    title: 'SQL',
    author: 'Systems Development (IS402)',
    cols: 2,
  },
  {
    img: 'http://eagletflysolutions.com/wp-content/uploads/2022/01/python-for-data-analysis-course-500x500-1.png',
    title: 'Python Data Analytics',
    author: 'Data Engineering (IS415)',
    cols: 2,
  },
  {
    img: 'https://miro.medium.com/max/1400/1*aVJ7LHqiKsQX0rTfDmtQXA.jpeg',
    title: 'Python Machine Learning',
    author: 'Data Engineering (IS455)',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
    title: 'JavaScript',
    author: 'Web Development (IS403)',
  },
  {
    img: 'https://www.umass.edu/archivenewsoffice/sites/default/files/styles/article_small/public/tableau-software.jpg',
    title: 'Tableau',
    author: 'Visual Analytics Platform (IS 201)',
  },
  {
    img: 'https://stepinlogic.com/wp-content/uploads/2020/07/aws-logo.png',
    title: 'AWS Cloud',
    author: 'Cloud Engineering (IS 531)',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://4.bp.blogspot.com/-gj_o1RC2bdI/WvUauV4deYI/AAAAAAAABsY/hGNZargUrcQLnjWcn3PhXk2HFk2DAvdXQCLcBGAs/s1600/0-WdTF28uxyxJpfbnn.jpgf',
    title: 'Metasploitable2',
    author: 'Information Security Mngmnt (IS 555)'
  },

];

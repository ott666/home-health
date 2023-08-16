import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: '100%', minHeight: 829 }}>
      <Masonry columns={{xs:1, sm:2, lg:3}} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img className='rounded-3xl'
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: '/team/port-1.jpg',
    title: 'Fern',
  }, 
  {
    img: '/team/port-2.jpg',
    title: 'Fern',
  },
  {
    img: '/team/port-3.jpg',
    title: 'Fern',
  },
  {
    img: '/team/port-4.jpg',
    title: 'Fern',
  },
  {
    img: '/team/port-5.jpg',
    title: 'Fern',
  },
  {
    img: '/team/port-6.jpg',
    title: 'Fern',
  },
  {
    img: '/team/port-7.jpg',
    title: 'Fern',
  },
  {
    img: '/team/port-8.jpg',
    title: 'Fern',
  }

];
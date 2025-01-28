import { Box, ImageList, ImageListItem } from '@mui/material';
import * as React from 'react';


export const ImageGallery = ( { images } ) => {
  return (
      <ImageList variant="masonry" sx={ { width:'100%', height: 500 } } cols={ 4 } rowHeight={ 200 } gap={4}>
        { images.map( ( image ) => (
          <ImageListItem key={ image }>
            <img
              src={ `${ image }?w=248&fit=crop&auto=format` }
              srcSet={ `${ image }?w=248&fit=crop&auto=format&dpr=2 2x` }
              alt="Imagen de la nota"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

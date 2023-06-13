import React from 'react';
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";

function ClipLoaderComponent({}) {
  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: '25px', marginBottom: '25px' }}
    >

      <Grid item xs={3}>
        <CircularProgress size={120} thickness={2}/>
      </Grid>

    </Grid>
  );
}

export default ClipLoaderComponent;

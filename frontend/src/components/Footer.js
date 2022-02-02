import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import styled from "styled-components"
import { Typography } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterWrapper = styled.section`
background: #A9CDCE;
font-weight: bold;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Box
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        height: '120px',
        paddingTop: '40px',
        paddingBottom: '20px',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        padding: '10px, 0',
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <Box>
                <Link href="/" color="inherit" underline="none">About us</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <Box>
                <Link href="/" color="inherit" underline="none">Terms and conditions</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <Box>
                <Link href="/" color="inherit" underline="none">Customer Service</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <Box>
                <Link href="/" color="inherit" underline="none">Contact</Link>
                <Box sx={{
                      padding: '10px',
                    }}>
                  <MailOutlineIcon />
                  <FacebookIcon />
                  <InstagramIcon />
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Box>
      <Box
        sx={{
        backgroundColor: '#CFE8E0',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px, 0',
        }}>
          <Typography variant="subtitle2">
            This is a fictional webshop made by students at Technigo Bootcamp
          </Typography>
      </Box>
    </FooterWrapper>
  )
}

export default Footer
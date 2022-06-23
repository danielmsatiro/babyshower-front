import * as React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { theme } from "../../Styles/theme";
import ForumIcon from '@mui/icons-material/Forum';


interface IProduct {
    title: string;
    description: string;
    price: string;
    img: string;
}

export default function ProductCard({title, description, price, img}: IProduct) {
  return (
    <Container
        sx={{
            width:"350px",
            maxHeight: "500px",
            border: `1px solid ${theme.palette.grey[50]} `,
            borderRadius: '5px',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: "10px"
        }}
    >

        <Container
            sx={{
                boxSizing: "unset",
                margin: '0'
            }}
        >
            <Box
                // sx={{
                //     width: 300,
                //     height: 300,
                //     backgroundColor: 'primary.dark',
                //     '&:hover': {
                //     backgroundColor: 'primary.main',
                //     opacity: [0.9, 0.8, 0.7],
                //     },
                // }}
            >
                <img src={img} alt="product" width={"300px"}></img>
            </Box>
        </Container>

        <Box sx={{
            marginTop: '10px',
        }}>
            <Typography variant='h5' sx={{
                fontFamily: `Poppins`,
                color: `${theme.palette.grey[500]}`,
                fontWeight: 600
            }}>{title}</Typography>

            <Typography variant='body2' sx={{
                fontFamily: `Poppins`,
                color: `${theme.palette.grey[300]}`,
                fontSize: '16px',
                margin: '10px 0 20px 0'
            }} >
                {description}
            </Typography>

            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    boxSizing: "unset",
                    alignSelf: 'center',
                    // padding: '0px'
                }}
            >
                <Button startIcon={<ForumIcon/>}
                sx={{
                    backgroundColor: `${theme.palette.primary.main}`,
                    fontWeight: 'bold',
                    fontSize: '16px',
                    width: '100px' ,
                    color: 'white'
                }}
                    onClick={() => console.log("sem página de produto")}
                >
                    Chat
                </Button> 

                <Box sx={{
                    display: 'flex',

                }}>
                    <Typography variant='body1' sx={{
                        fontWeight: 'bold',
                        color: `${theme.palette.grey[500]}`,
                        marginRight: '0px'
                    }}>R$</Typography>
                    <Typography variant='body1' sx={{
                        fontSize: '40px',
                        fontWeight: '600',
                        color: `${theme.palette.grey[500]}`
                    }}>{price}</Typography>
                </Box>

            </Container>
        </Box>

    </Container>
  );
}
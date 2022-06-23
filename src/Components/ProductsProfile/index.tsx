import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import { CardProduct, ICardProductProps } from "./CardProduct"
import { products} from "../../constants";

const ProductsProfile = () => {
    return (<>
    <Stack divider={<Divider orientation="horizontal" />}>
    <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
        <Typography>Nome</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography>Preço</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography>Perguntas</Typography>
        </Grid>
        <Grid item  xs={2}>
        <Typography>Vendido</Typography>
        </Grid>
    </Grid>
    {
        products.map((item) => 
        (<CardProduct key={item.id} title={item.title}
            price={item.price}
            sold={item.sold}
            questions={item.questions.quantity}
            noAnswerQuestions={item.questions.noAnswer}/>)
            )
        }
   
    </Stack>
    


    
    </>)
}

export {ProductsProfile}
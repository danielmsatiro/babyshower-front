import { Grid, Typography } from "@mui/material"

export interface ICardProductProps  {
    title: string;
    price: number;
    sold: boolean;
    questions: number
    noAnswerQuestions: number
    image?: string | undefined
    id?: number
}

const CardProduct = ({title, price, sold, questions, noAnswerQuestions, image=undefined}: ICardProductProps ) => {
    return (<>
    <Grid container>
        <Grid xs={2}></Grid>
        <Grid item xs={4}>
        <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography>{price}</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography>{questions}</Typography>
        </Grid>
        <Grid item  xs={2}>
        <Typography>{sold}</Typography>
        </Grid>
    </Grid>
    </>)
}

export { CardProduct }
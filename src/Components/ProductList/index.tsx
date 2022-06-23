import { Container } from "@mui/material";
import { wrap } from "module";
import { productsList } from "../../ProductsExample";
import ProductCard from "../ProductCard";

export default function ProductList() {
    return (
        <Container sx={{
            display: 'flex',
            width: '100vw',
            margin: '20px',
            flexWrap: 'wrap'
        }}>
            {productsList.map((item) => 
                <ProductCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    img={item.image}
                />
            )}
        </Container>
    )

}
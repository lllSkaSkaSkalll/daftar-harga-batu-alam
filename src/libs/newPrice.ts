import { Pricelist } from "./typeAnnotation";

const operators = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
};

type Operator = "+" | "-" | "*" | "/";

export const newPrice = (price: number, data: Pricelist, jenis: string, newPrice: number, operator: Operator, ukuran: string | undefined | null) => {
    if (!(operator in operators)) {
        throw new Error(`Invalid operator: ${operator}`);
    }

    const operation = operators[operator];
    let newData;

    if (ukuran) {
        newData = data.jenis.toLowerCase() === jenis && data.ukuran.toLowerCase() === ukuran ? operation(price, newPrice) : price;
    } else {
        newData = data.jenis.toLowerCase() === jenis ? operation(price, newPrice) : price;
    }
    // const newData = data.jenis.toLowerCase() === arg ? operation(price, newPrice) : price;

    return newData;
};

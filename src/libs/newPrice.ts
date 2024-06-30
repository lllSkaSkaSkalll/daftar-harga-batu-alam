import { Pricelist } from "./typeAnnotation";

const operators = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
};

type Operator = "+" | "-" | "*" | "/";

export const newPrice = (price: number, data: Pricelist, arg: string, newPrice: number, operator: Operator) => {
    if (!(operator in operators)) {
        throw new Error(`Invalid operator: ${operator}`);
    }

    const operation = operators[operator];
    const newData = data.jenis.toLowerCase() === arg ? operation(price, newPrice) : price;

    return newData;
};

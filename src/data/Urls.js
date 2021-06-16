import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "192.168.1.81";
const port = 3500;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
  [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`
}

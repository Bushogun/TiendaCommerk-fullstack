export class CreateProductDto{
  NombreProducto:string
  DescripcionProducto:string
  PrecioReal:number
  PrecioVenta:number
  Cantidad: number
  ImagenProducto: Buffer
  FechaCreacion:Date
}

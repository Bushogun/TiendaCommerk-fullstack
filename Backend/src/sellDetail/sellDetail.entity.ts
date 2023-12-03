import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from '../sells/sell.entity';
import { Producto } from '../products/product.entity';

@Entity()
export class DetalleVenta {
  @PrimaryGeneratedColumn()
  DetalleVentaID: number;

  @Column()
  VentaID: number;

  @Column()
  ProductoID: number;

  @Column({ nullable: true })
  Cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  PrecioUnitario: number;

  @ManyToOne(() => Venta)
  @JoinColumn({ name: 'VentaID' })
  venta: Venta;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'ProductoID' })
  producto: Producto;
}

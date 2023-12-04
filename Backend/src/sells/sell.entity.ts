import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/users/user.entity';
import { Producto } from 'src/products/product.entity';
@Entity()
export class Venta {
  @PrimaryGeneratedColumn()
  VentaID: number;

  @ManyToOne(() => Usuario, usuario => usuario.ventasRealizadas)
  nombreVendedor: Usuario;

  @ManyToOne(() => Producto, producto => producto.Cantidad)
  nombreProducto: Producto;

  @Column({ type: 'datetime', nullable: true })
  FechaCreacion: Date;
}

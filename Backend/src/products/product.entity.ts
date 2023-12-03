import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  ProductoID: number;

  @Column({ length: 100, nullable: true })
  NombreProducto: string;

  @Column({ length: 1000, nullable: true })
  DescripcionProducto: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  PrecioReal: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  PrecioVenta: number;

  @Column({ nullable: true })
  Cantidad: number;

  @Column({ type: 'varbinary', nullable: true })
  ImagenProducto: Buffer;

  @Column({ type: 'datetime', nullable: true })
  FechaCreacion: Date;
}

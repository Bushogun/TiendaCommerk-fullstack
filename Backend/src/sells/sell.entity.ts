import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Venta {
  @PrimaryGeneratedColumn()
  VentaID: number;

  @Column({ length: 100, nullable: true })
  NombreProducto: string;

  @Column({ length: 100, nullable: true })
  NombreVendedor: string;

  @Column({ type: 'datetime', nullable: true })
  FechaCreacion: Date;
}

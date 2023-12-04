import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Venta } from '../sells/sell.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre: string;

  @Column()
  NombreUsuario: string;

  @Column()
  CorreoElectronico: string;

  @Column()
  Contrasena: string;

  @Column()
  TotalVentas: number;

  @Column()
  Balance: number;

  @OneToMany(() => Venta, venta => venta.nombreVendedor)
  ventasRealizadas: Venta[];
}

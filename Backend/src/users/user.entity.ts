import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  UsuarioID: number;

  @Column({ length: 100, nullable: false })
  Nombre: string;

  @Column({ length: 50, nullable: false })
  NombreUsuario: string;

  @Column({ length: 200, nullable: false })
  CorreoElectronico: string;

  @Column({ length: 50, nullable: false })
  Contrasena: string;

  @Column({ nullable: true })
  TotalVentas: number;

  @Column({ nullable: true })
  Balance: number;
}

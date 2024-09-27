import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class RefreshToken extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    refreshToken!: string;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;
}

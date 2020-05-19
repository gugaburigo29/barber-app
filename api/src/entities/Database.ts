import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { DefaultEntity } from "./DefaultEntity";
import { Ramo } from "./Ramo";

enum TipoInscricao {
    CPF = "CPF",
    CNPJ = "CNPJ",
}

@Entity({name: "databases"})
export class Database extends DefaultEntity {

    @Column('simple-enum', {name: "tipo_inscricao", enum: TipoInscricao, nullable: false})
    tipoInscricao: TipoInscricao;

    @Column({nullable: false})
    inscricao: string;

    @JoinColumn({name: "ramo_id"})
    @ManyToOne(type => Ramo)
    ramo: Ramo;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    celular: string;

    @Column({nullable: false})
    email: string;

}

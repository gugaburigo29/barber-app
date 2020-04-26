import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import {Sexo, TipoUsuario, Usuario} from "../../entities/Usuario";
import {UsuarioRepository} from "../../repositories/UsuarioRepository";

const userAdmin: Partial<Usuario> = {
    nome: "Admin",
    email: "dashboard@dashboard.com",
    senha: "admin",
    dataNascimento: new Date(),
    sexo: Sexo.MASCULINO,
    tipo: TipoUsuario.ADMIN,
};

export class UserSeed1587848072352 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const usuarioRepository = getRepository(Usuario);
        await usuarioRepository.save(userAdmin);

        console.log("[Migration] User seed runned");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}

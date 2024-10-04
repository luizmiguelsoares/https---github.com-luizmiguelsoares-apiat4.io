import { formToJSON } from "axios";
import con from "./connection.js";


export async function inserirCanais(canal) {
    const comando = `
    insert into tb_canal (nm_canal, nr_canal, bt_aberto)
        values (?, ?, ?);`
;
    let resposta = await con.query(comando, [canal.nm_canal, canal.nr_canal, canal.bt_aberto])
        let info = resposta[0];

        return info.insertId;
   }

   export async function inserirCanalPrograma(canal_programa) {
    const comando = `
    insert into tb_canal_programa (id_canal, nm_programa, ds_genero, hr_programa)
        values (?, ?, ?, ?);`
;
    let resposta = await con.query(comando, [canal_programa.id_canal, canal_programa.nm_programa, canal_programa.ds_genero, canal_programa.hr_programa])
        let info = resposta[0];

        return info.insertId;
   }

   export async function inserirUsuario(usuario) {
    const comando = `
   insert into tb_usuario (nm_usuario)
        values (?);`
;
    let resposta = await con.query(comando, [usuario.nm_usuario])
        let info = resposta[0];

        return info.insertId;
   }

   export async function inserirProgramaFavorito(programa_favorito) {
    const comando = `
    insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
		values (?, ?, ?);`
;
    let resposta = await con.query(comando, [programa_favorito.id_usuario, programa_favorito.id_canal_programa, programa_favorito.vl_avaliacao])
        let info = resposta[0];

        return info.insertId;
   }

export async function  consultarCanal() {
    const comando = `
    select id_canal id,
       nm_canal  nome,
       nr_canal numero,
       bt_aberto aberto
    from tb_canal   
       `
       let resposta = await con.query(comando);
       let registros = resposta[0];

        return registros;
}

export async function  consultarCanalPrograma() {
    const comando = `
        select
        id_canal_programa  id,
        id_canal  id,
        nm_programa  nome,
        ds_genero genero,
        hr_programa horario
    from tb_canal_programa; 
       `
       let resposta = await con.query(comando);
       let registros = resposta[0];

        return registros;
}

export async function  consultarUsuario() {
    const comando = `
    select
	    id_usuario  id,
        nm_usuario nome
    from  tb_usuario;
       `
       let resposta = await con.query(comando);
       let registros = resposta[0];

        return registros;
}

export async function  consultarProgramaFavorito() {
    const comando = `
    select
        id_programa_favorito  id,
        id_usuario  id,
        id_canal_programa  id,
        vl_avaliacao  avaliacao
    from tb_programa_favorito;   
       `
       let resposta = await con.query(comando);
       let registros = resposta[0];

        return registros;
    }

        export async function removerCanal(id) {
            const comando = `
                delete from tb_canal
                where id_canal = ?
                `

                let resposta = await con.query(comando, [id]);
                let registros = resposta[0];
         
                 return registros.affectedRows;
            
        }

        export async function removerCanalPrograma(id) {
            const comando = `
                delete from tb_canal_programa
                where id_canal_programa = ?;
                `

                let resposta = await con.query(comando, [id]);
                let registros = resposta[0];
         
                 return registros.affectedRows;
            
        }

        export async function removerUsuario(nome) {
            const comando = `
                delete from tb_usuario
                where id_usuario = ?;
                `

                let resposta = await con.query(comando, [nome]);
                let registros = resposta[0];
         
                 return registros.affectedRows;
            
        }

        export async function removerProgramaFavorito(nome) {
            const comando = `
                delete from tb_programa_favorito
                where id_programa_favorito = ?;
                `

                let resposta = await con.query(comando, [nome]);
                let registros = resposta[0];
         
                 return registros.affectedRows;
            }

        export async function alterarCanal(id, tv) {
            const comando =`
                 update tb_canal
                    set nm_canal  =?,
                    nr_canal =?,
                    bt_aberto =?
                    where id_canal = ?;`

        let resposta = await con.query(comando, [tv.nm_canal, tv.nr_canal, tv.bt_aberto, id]);
        let registros = resposta[0];
 
         return registros.affectedRows;
            }

            export async function alterarCanalPrograma(id, canal_programa) {
                const comando =`
                update tb_canal_programa
                    set id_canal = ?,
                    nm_programa =?,
                    ds_genero =?,
                    hr_programa =?
                    where id_canal_programa = ?;`
    
            let resposta = await con.query(comando, [canal_programa.id_canal, canal_programa.nm_programa, canal_programa.ds_genero, canal_programa.hr_programa, id]);
            let registros = resposta[0];
     
             return registros.affectedRows;
                }    

                export async function alterarUsuario(id, usuario) {
                    const comando =`
                         update tb_usuario
                            set nm_usuario  = ?
                            where id_usuario = ?;`
        
                let resposta = await con.query(comando, [usuario.nm_usuario, id]);
                let registros = resposta[0];
         
                 return registros.affectedRows;
                    }    

                    export async function alterarProgramaFavorito(id, programa_favorito) {
                        const comando =`
                             update tb_programa_favorito
	                set id_usuario = ?,
		            id_canal_programa = ?,
		            vl_avaliacao = ?
                    where id_canal = ?;`
            
                    let resposta = await con.query(comando, [programa_favorito.id_usuario, programa_favorito.id_canal_programa, programa_favorito.vl_avaliacao, id]);
                    let registros = resposta[0];
             
                     return registros.affectedRows;
                        }    
import * as db from  '../repository/canalRepository.js';

import { Router } from "express"
const endpoints = Router();

endpoints.post('/canal', async (req, resp) => {
    try {
        let canal = req.body;

        let id = await db.inserirCanais(canal);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/canal_programa', async (req, resp) => {
    try {
        let canal_programa = req.body;

        let id = await db.inserirCanalPrograma(canal_programa);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/usuario', async (req, resp) => {
    try {
        let usuario = req.body;

        let id = await db.inserirUsuario(usuario);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/programa_favorito', async (req, resp) => {
    try {
        let programa_favorito = req.body;

        let id = await db.inserirProgramaFavorito(programa_favorito);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get ('/canal', async (req, resp) => {
    try {
        let canal = await db.consultarCanal();
        resp.send(canal)
    }
    catch (erro) {
        resp.status(400).send ({
            erro: erro.message
        })
    }
})

endpoints.get ('/canal_programa', async (req, resp) => {
    try {
        let canal = await db.consultarCanalPrograma();
        resp.send(canal)
    }
    catch (erro) {
        resp.status(400).send ({
            erro: erro.message
        })
    }
})

endpoints.get ('/usuario', async (req, resp) => {
    try {
        let canal = await db.consultarUsuario();
        resp.send(canal)
    }
    catch (erro) {
        resp.status(400).send ({
            erro: erro.message
        })
    }
})

endpoints.get ('/programa_favorito', async (req, resp) => {
    try {
        let canal = await db.consultarProgramaFavorito();
        resp.send(canal)
    }
    catch (erro) {
        resp.status(400).send ({
            erro: erro.message
        })
    }
})

endpoints.delete('/canal/:nome', async (req, resp) => {
    try {
        let id = req.params.id;
        let linha = await db.removerCanal(id);
        if(linha >= 1){
            resp.send();
        }
        else{
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/canal_programa/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let linha = await db.removerCanalPrograma(id);
        if(linha >= 1){
            resp.send();
        }
        else{
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/usuario/:nome', async (req, resp) =>{
    try{
        let nome = req.params.id;
        let linha = await db.removerUsuario(nome);
        if(linha >= 1){
            resp.send();
        }
        else{
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/canal/:nome', async (req,resp) =>{
    try{
        let nome = req.params.id;
        let linha = await db.removerProgramaFavorito(nome);
        if(linha >= 1){
            resp.send();
        }
        else{
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put ('/canal/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let canal = req.body;

        let linhas = await db.alterarCanal ( id, canal);
        if (linhas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado'})
        }
    }
        catch (erro) {
            resp.status(400).send ({
                erro: erro.message
            })
        }
    })

    endpoints.put ('/canal_programa/:id', async (req, resp) => {
        try {
            let id = req.params.id;
            let canal_programa = req.body;
    
            let linhas = await db.alterarCanalPrograma ( id, canal_programa);
            if (linhas >= 1) {
                resp.send();
            }
            else {
                resp.status(404).send({ erro: 'Nenhum registro encontrado'})
            }
        }
            catch (erro) {
                resp.status(400).send ({
                    erro: erro.message
                })
            }
        })

        endpoints.put ('/usuario/:id', async (req, resp) => {
            try {
                let id = req.params.id;
                let usuario = req.body;
        
                let linhas = await db.alterarUsuario ( id, usuario);
                if (linhas >= 1) {
                    resp.send();
                }
                else {
                    resp.status(404).send({ erro: 'Nenhum registro encontrado'})
                }
            }
                catch (erro) {
                    resp.status(400).send ({
                        erro: erro.message
                    })
                }
            })

            endpoints.put ('/canal/:id', async (req, resp) => {
                try {
                    let id = req.params.id;
                    let programa_favorito = req.body;
            
                    let linhas = await db.alterarProgramaFavorito ( id, programa_favorito);
                    if (linhas >= 1) {
                        resp.send();
                    }
                    else {
                        resp.status(404).send({ erro: 'Nenhum registro encontrado'})
                    }
                }
                    catch (erro) {
                        resp.status(400).send ({
                            erro: erro.message
                        })
                    }
                })

export default endpoints;
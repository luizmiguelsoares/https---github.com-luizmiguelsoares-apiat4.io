import canalController from './controller/canalController.js'

export default function adicionarRotas (servidor) {
    servidor.use (canalController)
}
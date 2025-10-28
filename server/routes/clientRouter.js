import {Router} from 'express';
import {getAllClients, getOneClient, createClient, deleteOneClient} from '../controllers/clientController.js';

const router = Router();

router.get('/', getAllClients)
router.get('/:id', getOneClient)
router.post('/' , createClient)
router.delete('/:id', deleteOneClient)

/*
router.patch('/:id', updateClient)
router.put('/:id', addToClient)
*/

export default router;
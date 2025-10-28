import {Router} from 'express';
import {getAllClients, getOneClient} from '../controllers/clientController.js';

const router = Router();

router.get('/', getAllClients)
router.get('/:id', getOneClient)

export default router;
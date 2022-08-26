import { Router } from 'express';
import GetController from '../controller/GetController';

const router: Router = Router();

router.get('/users', GetController.getUsers);

export default router;

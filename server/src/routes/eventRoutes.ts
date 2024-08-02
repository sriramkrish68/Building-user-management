import { Router } from 'express';
import { entry, exit, people, history, analytics } from '../controllers/eventController';

const router = Router();

router.post('/entry', entry);
router.post('/exit', exit);
router.get('/people', people);
router.get('/history', history);
router.get('/analytics', analytics);

export default router;

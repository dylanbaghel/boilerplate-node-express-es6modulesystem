import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.send('Fething Users...');
});

export default router;
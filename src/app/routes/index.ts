import { Router } from 'express';
import { AuthRouter } from '../modules/auth/auth.route';
import { RoomRouter } from '../modules/room/room.route';
import { SlotRouter } from '../modules/slot/slot.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/rooms',
    route: RoomRouter,
  },
  {
    path: '/slots',
    route: SlotRouter,
  },
];

moduleRoutes.forEach((moduleRoute) => {
  router.use(moduleRoute.path, moduleRoute.route);
});

export default router;

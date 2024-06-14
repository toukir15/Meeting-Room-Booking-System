import express from 'express';
import { RoomControllers } from './room.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { RoomValidations } from './room.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(RoomValidations.createRoomValidationSchema),
  RoomControllers.createRoom,
);
router.get('/', RoomControllers.getAllRooms);
router.get('/:id', RoomControllers.getSingleRoom);
router.put(
  '/:id',
  validateRequest(RoomValidations.updateRoomValidationSchema),
  RoomControllers.updateRoom,
);
router.delete(
  '/:id',
  validateRequest(RoomValidations.updateRoomValidationSchema),
  RoomControllers.deleteRoom,
);

export const RoomRouter = router;

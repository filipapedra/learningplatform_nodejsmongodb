/*authentication middleware to protect this route.*/ 
const authMiddleware = require('../middleware/authMiddleware');
router.put('/:id', authMiddleware, userController.updateUserProfile);
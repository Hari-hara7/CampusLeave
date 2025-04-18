const express = require("express");
const router = express.Router();
const {
  applyLeave,
  getAllLeaves,
  updateLeaveStatus,
  getStudentLeaves,
} = require("../controllers/leaveController");

const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.post("/", applyLeave);
router.get("/my", getStudentLeaves);
router.get("/", getAllLeaves); // For teachers
router.put("/:id", updateLeaveStatus); // Update leave status (teacher)

module.exports = router;

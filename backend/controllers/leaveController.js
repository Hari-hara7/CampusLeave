const Leave = require("../models/Leave");

exports.applyLeave = async (req, res) => {
  try {
    const { reason, fromDate, toDate } = req.body;
    const leave = await Leave.create({
      student: req.user.id,
      reason,
      fromDate,
      toDate,
    });
    res.json(leave);
  } catch (err) {
    res.status(500).json({ message: "Failed to apply for leave" });
  }
};

exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("student", "name email");
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ message: "Error fetching leaves" });
  }
};

exports.updateLeaveStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const leave = await Leave.findByIdAndUpdate(id, { status }, { new: true });
    res.json(leave);
  } catch (err) {
    res.status(500).json({ message: "Error updating status" });
  }
};

exports.getStudentLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({ student: req.user.id });
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch your leaves" });
  }
};

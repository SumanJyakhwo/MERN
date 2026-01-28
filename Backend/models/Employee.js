import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    employeeId: { type: String, required: true, unique: true, trim: true },
    address: { type: String, required: true },
    salary: { type: Number, required: true, min: 0 },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    dateOfJoining: { type: Date, required: true, default: Date.now },
    reportingTo: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    employmentType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Intern"],
      required: true,
      default: "Full-Time",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "On Leave", "Resigned"],
      default: "Active",
    },
    expertise: { type: [String], default: [] },
    canTeach: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    bankDetails: { accountNumber: String, bankName: String, ifscCode: String },
    emergencyContact: { name: String, relationship: String, phone: String },
  },
  { timestamps: true },
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;

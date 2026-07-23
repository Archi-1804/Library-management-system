import bcrypt from "bcrypt";
import User from "./models/User.js";

export const seedUsers = async () => {
    try {
        // Sample seed users configuration
        const defaultUsers = [
            {
                userType: "Student",
                userFullName: "Demo Student",
                admissionId: "2023STUDENT01",
                age: 20,
                gender: "Male",
                dob: "2003-05-15",
                address: "Campus Hostel Block A",
                mobileNumber: 9876543210,
                email: "student.demo@librahub.edu",
                passwordRaw: "123456",
                isAdmin: false
            },
            {
                userType: "Staff",
                userFullName: "Demo Staff Member",
                employeeId: "101STAFF",
                age: 32,
                gender: "Female",
                dob: "1991-08-22",
                address: "Faculty Quarters Apt 4B",
                mobileNumber: 9876543211,
                email: "staff.demo@librahub.edu",
                passwordRaw: "123456",
                isAdmin: false
            },
            {
                userType: "Admin",
                userFullName: "System Administrator",
                employeeId: "ADMIN01",
                age: 40,
                gender: "Male",
                dob: "1983-11-10",
                address: "Library Admin Office",
                mobileNumber: 9876543212,
                email: "admin.demo@librahub.edu",
                passwordRaw: "admin123",
                isAdmin: true
            }
        ];

        for (const u of defaultUsers) {
            // Check if user already exists by admissionId, employeeId or email
            const filter = u.admissionId 
                ? { admissionId: u.admissionId } 
                : { employeeId: u.employeeId };

            const existingUser = await User.findOne({
                $or: [
                    filter,
                    { email: u.email }
                ]
            });

            if (!existingUser) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(u.passwordRaw, salt);

                const newUser = new User({
                    userType: u.userType,
                    userFullName: u.userFullName,
                    admissionId: u.admissionId,
                    employeeId: u.employeeId,
                    age: u.age,
                    gender: u.gender,
                    dob: u.dob,
                    address: u.address,
                    mobileNumber: u.mobileNumber,
                    email: u.email,
                    password: hashedPassword,
                    isAdmin: u.isAdmin
                });

                await newUser.save();
                console.log(`[SEED] Created default account: ${u.userFullName} (${u.admissionId || u.employeeId})`);
            }
        }
    } catch (err) {
        console.error("[SEED] Error seeding default users:", err.message);
    }
};

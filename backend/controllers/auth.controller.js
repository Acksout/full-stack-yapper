// import User from "../models/user.model.js";
// import bcrypt from "bcryptjs";

// export const signup = async (req, res) => {
//   try {
//     const { fullName, username, password, confirmPassword, gender } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Passwords don't match." });
//     }

//     const user = await User.findOne({ username });

//     if (user) {
//       return res.status(400).json({ error: "User already exists." });
//     }

//     // Hash password here

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     // https://avatar-placeholder.iran.liara.run/

//     const malePfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
//     const femalePfp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

//     const newUser = new User({
//       fullName,
//       username,
//       password: hashedPassword,
//       gender,
//       pfp: gender === "male" ? malePfp : femalePfp,
//     });

//     if (newUser) {
//       //Generate JTW Here
//       await newUser.save();

//       res.status(201).json({
//         _id: newUser._id,
//         fullName: newUser.fullName,
//         username: newUser.username,
//         pfp: newUser.pfp,
//       });
//     } else {
//       res.status(400).json({"Invalid userdata"})
//     }
//   } catch (error) {
//     console.log("Error in signup controller", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// export const logout = (req, res) => {
//   console.log("logoutUser");
// };

// export const login = (req, res) => {
//   console.log("signupUser");
// };
//
//
//
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match." });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const malePfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femalePfp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      pfp: gender === "male" ? malePfp : femalePfp,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      pfp: newUser.pfp,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  console.log("logoutUser");
};

export const login = (req, res) => {
  console.log("signupUser");
};

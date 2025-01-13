import User from "../model/User.schema";

export const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body();
        const user = await User.findOne({ email });
        if (user) {
            console.log("User Alredy Exist")
        }

        const createuser = new User({
            name,
            email,
            password
        });

        await createuser.save();

        res.status(201).json({ messahe: "User Profile Created Sucessfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server Error" });
    }
}
export const login = async(req, res) => {
    try {
        const { email, password } = req.body();
        const user = await user.findOne({ email });
        if (user) {
            res.Status(200).json({ message: "User Created Sucessfuly" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}
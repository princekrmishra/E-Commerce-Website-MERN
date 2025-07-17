import UserModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";

export async function registerUserController(request, response) {
    try{
        let user;
        const { name, email, password } = request.body;
        if(!name || !email || !password){
            return response.status(400).json({
            message: "provide email, name, password",
            error: true,
            success: false
        })
        }

        user = await UserModel.findOne({ email: email })

        if(user){
            return response.json({
                message: 'User already exists',
                error: true,
                success: false
            })
        }
        
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        

       user = new UserModel({
            email: email,
            password : hashedPassword,
            name: name,
            otp: verifyCode,
            otpExpires: Date.now() + 600000
        });

        await user.save();

        await sendEmailFun({
            sendTo: email,
            subject: "Verify email from Mishra Mart",
            text: "",
            html: VerificationEmail(name, verifyCode)
        })

        const token = jwt.sign({
            email: user.email,
            id: user._id
        },
        process.env.JSON_WEB_TOKEN_SECRET_KEY
        );

        return response.status(200).json({
            success: true,
            error: false,
            message: "User registered successfully! Please verify your email",
            token: token,
        })


    }catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function verifyEmailController(request, response) {
    try{
        
        const { email, otp } = request.body;
        const user = await UserModel.findOne({ email : email })

        if(!user){
            return response.status(400).json({
                error: true,
                success:false,
                message: "User not found",
            })
        }

        const isCodeValid = user.otp === otp;
        const isNotExpired = user.otpExpires > Date.now();

        if(isCodeValid && isNotExpired){
            user.verify_email = true,
            user.otp = null,
            user.otpExpires = null,
            await user.save();

            return response.status(200).json({
                error: false,
                success: true,
                message: "Email verified successfully"
            });
        }
        else if(!isCodeValid){
            return response.status(400).json({
                error: true,
                success: false,
                message: "Invalid OTP",
            });
        }
        else {
            return response.status(400).json({
                error: true,
                success: false,
                message: "OTP expired",
            });
        }
    }catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function loginUserController(request, response) {
    const { email, password } = request.body;

    const user = await UserModel.findOne({ email: email });

    if(!user){
        return response.status(400).json({
            error: true,
            success: false,
            message: "User not registed"
        });
    }

    if(!user.status !== "Active"){
        return response.status(400).json({
            error: true,
            success: false,
            message: "Contact to admin"
        });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);

    if(!checkPassword){
        return response.status(400).json({
            error: true,
            success: false,
            message: "Password is incorrect"
        });
    }

    const accesstoken = await generatedAccessToken()
    const refreshToken = await generatedRefreshToken()
}

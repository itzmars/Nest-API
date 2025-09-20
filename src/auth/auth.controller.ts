import { Body, Controller, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { AuthService } from "./auth.service";
import type { AuthDto } from "./dto";


@Controller('auth')
export class AuthController { 
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log({dto});
        return this.authService.signup();
    }

    @Post('signin')
    signin(@Req() req: Request) {
        return this.authService.signin();
    }
}
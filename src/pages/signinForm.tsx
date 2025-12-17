
import { Button } from "@/components/ui/button";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "@/components/ui/card";
import { Field,FieldDescription,FieldGroup,FieldLabel } from "@/components/ui/field";
import {Input} from "@/components/ui/input"
import { NavLink } from "react-router-dom";
export default function SignInForm({...props}:React.ComponentProps<typeof Card>){
    return(
      
        <Card {...props} className="bg-gray border-t text-white">
         <CardHeader>
            <CardTitle>Create the Account</CardTitle>
            <CardDescription>Enter your email and password to create account.</CardDescription>
         </CardHeader>
         <CardContent>
         <form>
            <FieldGroup>
                <Field> 
                    <FieldLabel htmlFor="name">
                        Full Name
                    </FieldLabel>
                    <Input id="name" type="text" placeholder="name" required/>
                </Field>
                <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
                <Field>
                    <Button type="submit">Create Account</Button>
                    <Button variant="secondary" type="button">
                    Sign up with Google
                    </Button>
                    <FieldDescription className="px-6 text-center">
                    Already have an account? <NavLink to="/login">Log in</NavLink>
                    </FieldDescription>
                </Field>
                </FieldGroup>
            </FieldGroup>            
         </form>
         </CardContent>
        </Card>
    )
}
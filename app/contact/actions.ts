"use server";

import { z } from "zod";

const contactSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactState = {
    success?: boolean;
    errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string;
};

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const validatedFields = contactSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "",
        };
    }

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact Form Submission:", validatedFields.data);

    return {
        success: true,
        message: "Thanks for reaching out! I'll get back to you soon.",
    };
}

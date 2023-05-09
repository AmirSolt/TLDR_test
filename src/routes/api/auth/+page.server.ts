import { redirect } from "@sveltejs/kit"
import { signUpSchema, signInSchema } from '$lib/schemas/auth'

export const actions = {

	signup: async ({ locals, request }) => {
		const formData = await request.formData()
		const req = Object.fromEntries(formData)
		
		const email = req.email as string
		const password = req.password as string

		if(!signUpSchema.safeParse({email, password}).success){
			return {
				status: 400,
				message: "Invalid credentials"
			}
		}
		console.log("///////////////////////")
		console.log("email", email)
		console.log("password", password)

		const { data, error: err } = await locals.supabase.auth.signUp({
			email: email,
			password: password,
		})

		console.log("........................")
		console.log("data", data)
		console.log("err", err)
	
		if (err) {
			return {
				status: 400,
				message: "Authentification failed"
			}
		}


		return {
			status: 200,
			message: "Authentification success"
		}

	},
	login: async ({ locals, request }) => {
		const formData = await request.formData()
		const req = Object.fromEntries(formData)
		
		const email = req.email as string
		const password = req.password as string

		if(!signInSchema.safeParse({email, password}).success){
			return {
				status: 400,
				message: "Invalid credentials"
			}
		}

		const { data, error: err } = await locals.supabase.auth.signInWithPassword({
			email: email,
			password: password,
		})

		console.log("........................")
		console.log("data", data)
		console.log("err", err)
	
		if (err) {
			return {
				status: 400,
				message: "Authentification failed"
			}
		}


		return {
			status: 200,
			message: "Authentification success"
		}
	},
	logout: async ({ locals}) => {
		const { error: err } = await locals.supabase.auth.signOut()

		if (err) {
			return {
				status: 400,
				message: "Authentification failed"
			}
		}
	
		throw redirect(303, "/")
	},
	verifyToken: async ({ locals, request }) => {

		const formData = await request.formData()
		const req = Object.fromEntries(formData)
		
		const email = req.email as string
		const token = req.token as string

		if(!signInSchema.safeParse({email, token}).success){
			return {
				status: 400,
				message: "Invalid credentials"
			}
		}

		const { data, error: err } = await locals.supabase.auth.verifyOtp({
			email: email,
			token: token,
			type:"email",
		})

		console.log("........................")
		console.log("data", data)
		console.log("err", err)
	
		if (err) {
			return {
				status: 400,
				message: "Authentification failed"
			}
		}


		return {
			status: 200,
			message: "Authentification success"
		}
	}



};
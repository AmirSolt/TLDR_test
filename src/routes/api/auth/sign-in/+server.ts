
import { error, redirect } from "@sveltejs/kit"


export const POST = async ({ request, locals }) => {
	const body = Object.fromEntries(await request.formData())
	const email = body.email as string
	const password = body.password as string

	if(!signInSchema.safeParse({email, password}).success){
		throw error(400, "Invalid credentials")
	}

	const { error: err } = await locals.supabase.auth.signInWithPassword({
		email: email,
		password: password,
	})

	if (err) {
		throw error(400, "Invalid credentials")
	}

	// throw redirect(303, "/dashboard")
}
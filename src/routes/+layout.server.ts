



export const load = async ({ locals: { getSession, supabase } }) => {

  // const session =;

  // let wallet;
  // if(session?.user?.id)
  //   wallet = await supabase.from('wallets')
  //     .select()
  //     .eq('id', session?.user.id)
  //     .single()

      

  return {
    session: await getSession(),
    // supabase
    // wallet: supabase.from('wallets').select().eq('id', session?.user.id).single()

  };
};
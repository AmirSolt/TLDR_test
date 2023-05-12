


export const load = async ({ locals: { getSession, supabase } }) => {


    // if wallet is empty
  

  return {
    session: await getSession(),
  };
};
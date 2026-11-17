// Paste your Supabase project values here to turn on real accounts.
// Leave them empty to run in demo mode (no password is stored, browser only).
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';

const sb = (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const Auth = {
  live: !!sb,
  async user() {
    if (sb) {
      const { data } = await sb.auth.getSession();
      const u = data.session && data.session.user;
      return u ? { email: u.email, name: (u.user_metadata && u.user_metadata.name) || u.email } : null;
    }
    try { return JSON.parse(localStorage.getItem('sr_user')); } catch (e) { return null; }
  },
  async signUp(name, email, password) {
    if (sb) {
      const { data, error } = await sb.auth.signUp({ email, password, options: { data: { name } } });
      if (error) throw error;
      return { needsConfirm: !data.session };
    }
    localStorage.setItem('sr_user', JSON.stringify({ name, email }));
    return { needsConfirm: false };
  },
  async signIn(email, password) {
    if (sb) {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return;
    }
    const name = email.split('@')[0];
    localStorage.setItem('sr_user', JSON.stringify({ name, email }));
  },
  async signOut() {
    if (sb) await sb.auth.signOut();
    try { localStorage.removeItem('sr_user'); } catch (e) {}
  }
};

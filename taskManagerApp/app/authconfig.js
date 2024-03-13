export const authConfig = {
  providers: [], // Add providers with an empty array for now
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = !!auth?.user?.isAdmin; 

      const isOnAdminDashboard = request.nextUrl.pathname.startsWith('/dashboard');
      const isOnStudentDashboard = request.nextUrl.pathname.startsWith('/news');

      if (isLoggedIn) {
        if (isAdmin) {
          if (!isOnAdminDashboard) {
            return Response.redirect(new URL('/dashboard', request.nextUrl));
          }
        } else {
          if (!isOnStudentDashboard && !isOnAdminDashboard) {
            return Response.redirect(new URL('/news', request.nextUrl));
          }
        }
        return true;
      } else {
        if (isOnAdminDashboard || isOnStudentDashboard) {
          return Response.redirect(new URL('/', request.nextUrl));
        }
        return true;
      }
    },
  },
}


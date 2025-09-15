/**
 * Role-based navigation utilities
 */

/**
 * Get dashboard path based on user role
 * @param {string} role - User role (admin, hr, employee)
 * @returns {string} Dashboard path for the role
 */
export function getRoleBasedDashboard(role) {
  switch (role) {
    case 'admin':
      return '/admin/dashboard';
    case 'hr':
      return '/hr/dashboard';
    case 'employee':
      return '/employee/dashboard';
    default:
      return '/employee/dashboard'; // Default to employee dashboard
  }
}

/**
 * Get the appropriate redirect path based on user state
 * @param {Object} user - User object
 * @param {boolean} needsEmailVerification - Whether user needs email verification
 * @param {boolean} needsOnboarding - Whether user needs onboarding
 * @returns {string} Redirect path
 */
export function getRedirectPath(user, needsEmailVerification, needsOnboarding) {
  if (needsEmailVerification) {
    return '/verify-email';
  }
  
  if (needsOnboarding && user?.role === 'employee') {
    return '/onboarding';
  }
  
  return getRoleBasedDashboard(user?.role);
}
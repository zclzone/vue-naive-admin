export function resolveToken(authorization) {
  /**
   * * jwt token
   * * Bearer + token
   * ! 认证方案: Bearer
   */
  const reqTokenSplit = authorization.split(' ')
  if (reqTokenSplit.length === 2) {
    return reqTokenSplit[1]
  }
  return ''
}

export default interface OauthOptions {
    client_id: string,
    client_secret: string,
    code?: string,
    grant_type: 'authorization_code' | 'refresh_token',
    redirect_uri?: string,
    refresh_token?: string,
    test_token?: string
}